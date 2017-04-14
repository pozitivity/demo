package ru.tatiana.demo.procedure.extractor.patient;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import ru.tatiana.demo.model.PatientModel;
import ru.tatiana.demo.procedure.extractor.RowExtractor;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by tatiana.gorbunova on 30.11.2016.
 */
public class PatientExtractor implements ResultSetExtractor<PatientModel> {
    public PatientModel extractData(ResultSet rs) throws SQLException, DataAccessException {
        rs.next();
        ResultSet cur = (ResultSet) rs.getObject(1);
        cur.next();
        PatientModel patient = RowExtractor.patient(cur);
        cur.close();
        return patient;
    }
}