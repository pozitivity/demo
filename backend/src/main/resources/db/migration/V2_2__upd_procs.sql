alter table file add column headers json;

drop function if exists "save_fileData"(bigint, text, boolean, text, bigint);

create or replace function "save_data_file"(
  _id bigint,
  _content text,
  _used boolean,
  _name text,
  _size bigint,
  _headers text)
returns bigint AS
$BODY$
begin
  if(_id is null) then
    insert into file(content, "name", used, create_time, "size", headers)
        values(_content, _name, _used, CURRENT_TIMESTAMP, _size, headers) returning id into _id;
  ELSE
    update file set "name" = _name, content = _content, used = _used, size = _size, headers = _headers where id = _id;
  end if;
  return _id;
end;
$BODY$
  LANGUAGE plpgsql VOLATILE;

drop function if exists "get_fileData"(bigint);

create or replace function "get_data_file"(
  _id bigint
)
returns refcursor AS
$BODY$
  declare ref refcursor := 'rc_GetDataFile';
  BEGIN
   open ref for
   select * from file
   where id = _id;
   return ref;
  END;
$BODY$
  LANGUAGE plpgsql VOLATILE;

drop function if exists "get_fileDatas"(integer, integer);

create or replace function "get_data_files"(
  _offset integer,
  _page_size integer)
returns refcursor AS
$BODY$
  declare ref refcursor := 'rc_GetDataFiles';
   BEGIN
    open ref for
    select * from file
    offset _offset limit _page_size;
    return ref;
   END;
$BODY$
  LANGUAGE plpgsql VOLATILE;

drop function if exists "del_fileData"(bigint);

create or replace function "del_data_file"(
_id bigint)
returns void AS
$BODY$
begin
  delete from file where id = _id;
end;
$BODY$
  LANGUAGE plpgsql VOLATILE;