alter table file add column "size" bigint;

create SEQUENCE file_id_seq
  start with 1 increment by 1
  no minvalue no maxvalue
  cache 1;

alter SEQUENCE file_id_seq OWNED by file.id;

alter table only file
  alter column id set default nextval('file_id_seq'::regclass);
drop function if exists "save_fileData"(bigint, text, boolean, text);
create or replace function "save_fileData"(
  _id bigint,
  _content text,
  _used boolean,
  _name text,
  _size bigint)
returns bigint AS
$BODY$
begin
  if(_id is null) then
    insert into file(content, "name", used, create_time, "size") values(_content, _name, _used, CURRENT_TIMESTAMP, _size) returning id into _id;
  ELSE
    update file set "name" = _name, content = _content, used = _used, size = _size where id = _id;
  end if;
  return _id;
end;
$BODY$
  LANGUAGE plpgsql VOLATILE;