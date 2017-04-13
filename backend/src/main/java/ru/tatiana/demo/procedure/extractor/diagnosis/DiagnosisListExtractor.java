package ru.tatiana.demo.procedure.extractor.diagnosis;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import ru.tatiana.demo.model.Diagnosis;
import ru.tatiana.demo.procedure.extractor.RowExtractor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by tatiana.gorbunova on 24.12.2016.
 */
public class DiagnosisListExtractor implements ResultSetExtractor<List<Diagnosis>> {
    public List<Diagnosis> extractData(ResultSet rs) throws SQLException, DataAccessException {
        List<Diagnosis> diagnosis = new ArrayList<>();
        rs.next();
        ResultSet cur = (ResultSet) rs.getObject(1);
        while(cur.next()) {
            diagnosis.add(RowExtractor.diagnosis(cur));
        }
        cur.close();
        return diagnosis;
    }
}
