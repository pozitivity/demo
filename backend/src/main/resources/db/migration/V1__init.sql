create table diagnosis (
  id bigint PRIMARY KEY,
  code text,
  name text
);

create table patient (
  id bigint PRIMARY KEY,
  date_birthday timestamp,
  date_in TIMESTAMP,
  diagnosis_id bigint REFERENCES "diagnosis"(id)
);

CREATE TABLE file (
  id bigint PRIMARY KEY,
  name text,
  content text,
  create_time timestamp,
  used boolean default FALSE
);

