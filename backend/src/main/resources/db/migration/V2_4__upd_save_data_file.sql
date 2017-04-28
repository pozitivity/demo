drop function if exists "save_data_file"(bigint, text, boolean, text, bigint, text);

create or replace function "save_data_file"(
  _id bigint,
  _content text,
  _used boolean,
  _name text,
  _size bigint,
  _headers text)
returns refcursor AS
$BODY$
declare ref refcursor = 'rc_SaveDataFile';
        returning_id bigint;
begin
  if(_id is null) then
    insert into file(content, "name", used, create_time, "size", headers)
        values(_content, _name, _used, CURRENT_TIMESTAMP, _size, _headers) returning id into returning_id;
  ELSE
    returning_id = _id;
    update file set "name" = _name, content = _content, used = _used, size = _size, headers = _headers where id = _id;
  end if;
  open ref for
    select * from file where id = returning_id;
  return ref;
end;
$BODY$
  LANGUAGE plpgsql VOLATILE;