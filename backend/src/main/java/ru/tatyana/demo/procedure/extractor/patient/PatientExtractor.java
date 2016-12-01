package ru.tatyana.demo.procedure.extractor.patient;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import ru.tatyana.demo.entity.Patient;
import ru.tatyana.demo.procedure.extractor.RowExtractor;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by tatiana.gorbunova on 30.11.2016.
 */
public class PatientExtractor implements ResultSetExtractor<Patient> {
    public Patient extractData(ResultSet rs) throws SQLException, DataAccessException {
        rs.next();
        ResultSet cur = (ResultSet) rs.getObject(1);
        cur.next();
        Patient patient = RowExtractor.patient(cur);
        cur.close();
        return patient;
    }
}
