package ru.tatiana.demo.procedure.extractor.dataFile;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import ru.tatiana.demo.procedure.extractor.RowExtractor;
import ru.tatiana.demo.model.DataFile;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Tatyana on 11.04.2017.
 */
public class DataFileExtractor implements ResultSetExtractor<DataFile> {
    public DataFile extractData(ResultSet rs) throws SQLException, DataAccessException {
        rs.next();
        ResultSet cur = (ResultSet) rs.getObject(1);
        cur.next();
        DataFile dataFile = RowExtractor.fileData(cur);
        cur.close();
        return dataFile;
    }
}
