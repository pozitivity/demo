package ru.tatiana.demo.procedure.extractor.fileData;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import ru.tatiana.demo.procedure.extractor.RowExtractor;
import ru.tatiana.demo.model.FileData;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Tatyana on 11.04.2017.
 */
public class FileDataExtractor implements ResultSetExtractor<FileData> {
    public FileData extractData(ResultSet rs) throws SQLException, DataAccessException {
        rs.next();
        ResultSet cur = (ResultSet) rs.getObject(1);
        cur.next();
        FileData fileData = RowExtractor.fileData(cur);
        cur.close();
        return fileData;
    }
}
