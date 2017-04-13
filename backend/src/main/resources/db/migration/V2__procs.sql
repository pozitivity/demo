create or replace function "get_diagnoses"(
  _offset integer,
  _page_size integer)
returns refcursor AS
$BODY$
declare ref refcursor := 'rc_GetDiagnoses';
BEGIN
  open ref for
  select d.* from diagnosis d
  OFFSET _offset LIMIT _page_size;
  return ref;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE;

create or replace function "get_patients"(
  _offset integer,
  _page_size integer)
returns refcursor AS
$BODY$
declare ref refcursor := 'rc_GetPatients';
BEGIN
  open ref for
  select p.id as id, p.date_birthday as birthday, p.date_in as datein, d.name as diagnosis from patient p
  inner join diagnosis d on p.diagnosis_id = d.id
  where p.diagnosis_id = d.id
  OFFSET _offset LIMIT _page_size;
  return ref;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE;

create or replace function "get_diagnosis"(
  _id bigint)
returns refcursor AS
$BODY$
declare ref refcursor := 'rc_GetDiagnosis';
BEGIN
  open ref for
  select * from diagnosis
  where id = _id;
  return ref;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE;

create or replace function "get_fileData"(
  _id bigint
)
returns refcursor AS
$BODY$
  declare ref refcursor := 'rc_GetFileData';
  BEGIN
   open ref for
   select * from file
   where id = _id;
   return ref;
  END;
$BODY$
  LANGUAGE plpgsql VOLATILE;

create or replace function "get_fileDatas"(
  _offset integer,
  _page_size integer)
returns refcursor AS
$BODY$
  declare ref refcursor := 'rc_GetFileDatas';
   BEGIN
    open ref for
    select * from file
    offset _offset limit _page_size;
    return ref;
   END;
$BODY$
  LANGUAGE plpgsql VOLATILE;

create or replace function "del_fileData"(
_id bigint)
returns void AS
$BODY$
begin
  delete from file where id = _id;
end;
$BODY$
  LANGUAGE plpgsql VOLATILE;

create or replace function "save_fileData"(
  _id bigint,
  _content text,
  _used boolean,
  _name text)
returns bigint AS
$BODY$
begin
  if(_id is null) then
    insert into file(content, "name", used, create_time) values(_content, _name, _used, CURRENT_TIMESTAMP) returning id into _id;
  ELSE
    update file set "name" = _name, content = _content, used = _used where id = _id;
  end if;
  return _id;
end;
$BODY$
  LANGUAGE plpgsql VOLATILE;
