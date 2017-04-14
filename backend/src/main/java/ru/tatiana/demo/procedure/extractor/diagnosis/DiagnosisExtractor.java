package ru.tatiana.demo.procedure.extractor.diagnosis;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import ru.tatiana.demo.procedure.extractor.RowExtractor;
import ru.tatiana.demo.model.Diagnosis;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by tatiana.gorbunova on 24.12.2016.
 */
public class DiagnosisExtractor implements ResultSetExtractor<Diagnosis> {
    public Diagnosis extractData(ResultSet rs) throws SQLException, DataAccessException {
        rs.next();
        ResultSet cur = (ResultSet) rs.getObject(1);
        cur.next();
        Diagnosis diagnosis = RowExtractor.diagnosis(cur);
        cur.close();
        return diagnosis;
    }
}