package ru.tatyana.demo.procedure.extractor;

import ru.tatyana.demo.entity.Diagnosis;
import ru.tatyana.demo.entity.Patient;
import ru.tatyana.demo.model.PatientModel;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by tatiana.gorbunova on 30.11.2016.
 */
public class RowExtractor {
    public static PatientModel patient(ResultSet rs) throws SQLException {
        PatientModel patient = new PatientModel();
        patient.setId(rs.getLong("id"));
        patient.setBirthday(rs.getTimestamp("birthday"));
        patient.setDatein(rs.getTimestamp("datein"));
        patient.setDiagnosis(rs.getString("diagnosis"));
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
