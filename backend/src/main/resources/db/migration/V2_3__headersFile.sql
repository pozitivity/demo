alter table file alter column headers type text;

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
        values(_content, _name, _used, CURRENT_TIMESTAMP, _size, _headers) returning id into _id;
  ELSE
    update file set "name" = _name, content = _content, used = _used, size = _size, headers = _headers where id = _id;
  end if;
  return _id;
end;
$BODY$
  LANGUAGE plpgsql VOLATILE;