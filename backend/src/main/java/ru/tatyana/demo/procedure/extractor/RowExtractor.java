package ru.tatyana.demo.procedure.extractor;

import ru.tatyana.demo.entity.Diagnosis;
import ru.tatyana.demo.entity.Patient;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by tatiana.gorbunova on 30.11.2016.
 */
public class RowExtractor {
    public static Patient patient(ResultSet rs) throws SQLException {
        Patient patient = new Patient();
        patient.setId(rs.getLong("id"));
        patient.setBirthday(rs.getTimestamp("date_birthday"));
        patient.setDatein(rs.getTimestamp("date_in"));
        patient.setDiagnosisId(rs.getLong("diagnosis_id"));
        return patient;
    }

    public static Diagnosis diagnosis(ResultSet rs) throws SQLException {
        Diagnosis diagnosis = new Diagnosis();
        diagnosis.setId(rs.getLong("id"));
        diagnosis.setName(rs.getString("name"));
        diagnosis.setCode(rs.getString("code"));
        return diagnosis;
    }
}
