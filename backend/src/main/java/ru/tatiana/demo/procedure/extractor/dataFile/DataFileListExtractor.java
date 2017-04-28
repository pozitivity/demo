package ru.tatiana.demo.procedure.extractor.dataFile;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import ru.tatiana.demo.model.DataFile;
import ru.tatiana.demo.procedure.extractor.RowExtractor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Tatyana on 11.04.2017.
 */
public class DataFileListExtractor implements ResultSetExtractor<List<DataFile>> {
    public List<DataFile> extractData(ResultSet rs) throws SQLException, DataAccessException {
        List<DataFile> dataFiles = new ArrayList<>();
        rs.next();
        ResultSet cur = (ResultSet) rs.getObject(1);
        while(cur.next()) {
            dataFiles.add(RowExtractor.dataFile(cur));
        }
        cur.close();
        return dataFiles;
    }
}
