package ru.tatiana.demo.procedure.extractor.patient;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import ru.tatiana.demo.model.PatientModel;
import ru.tatiana.demo.procedure.extractor.RowExtractor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by tatiana.gorbunova on 30.11.2016.
 */
public class PatientListExtractor implements ResultSetExtractor<List<PatientModel>> {
    public List<PatientModel> extractData(ResultSet rs) throws SQLException, DataAccessException {
        List<PatientModel> patients = new ArrayList<>();
        rs.next();
        ResultSet cur = (ResultSet) rs.getObject(1);
        while(cur.next()) {
            patients.add(RowExtractor.patient(cur));
        }
        cur.close();
        return patients;
    }
}
