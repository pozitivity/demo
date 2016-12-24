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