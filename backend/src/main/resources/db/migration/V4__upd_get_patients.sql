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