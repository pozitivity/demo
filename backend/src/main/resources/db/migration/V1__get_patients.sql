create or replace function "get_patients"(
  _offset integer,
  _page_size integer)
returns refcursor AS
$BODY$
declare ref refcursor := 'rc_GetPatients';
BEGIN
  open ref for
  select p.* from patient p
  OFFSET _offset LIMIT _page_size;
  return ref;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE;