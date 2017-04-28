package ru.tatiana.demo.procedure.dataFile;

import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.object.StoredProcedure;

import javax.sql.DataSource;
import java.sql.Types;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Tatyana on 11.04.2017.
 */
public class DeleteDataFileProcedure extends StoredProcedure {
    private static final String SQL = "del_data_file";

    private static final String FILE_DATA_ID = "_id";

    public DeleteDataFileProcedure(DataSource dataSource) {
        setDataSource(dataSource);
        setSql(SQL);
        declareParameter(new SqlParameter(FILE_DATA_ID, Types.BIGINT));
        compile();
    }

    public void execute(Long id) {
        Map<String, Object> params = new HashMap<>();
        params.put(FILE_DATA_ID, id);
        execute(params);
    }
}
