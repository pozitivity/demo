package ru.tatiana.demo.procedure.extractor.fileData;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import ru.tatiana.demo.procedure.extractor.RowExtractor;
import ru.tatiana.demo.model.FileData;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Tatyana on 11.04.2017.
 */
public class FileDataListExtractor implements ResultSetExtractor<List<FileData>> {
    public List<FileData> extractData(ResultSet rs) throws SQLException, DataAccessException {
        List<FileData> fileDatas = new ArrayList<>();
        rs.next();
        ResultSet cur = (ResultSet) rs.getObject(1);
        while(cur.next()) {
            fileDatas.add(RowExtractor.fileData(cur));
        }
        cur.close();
        return fileDatas;
    }
}
