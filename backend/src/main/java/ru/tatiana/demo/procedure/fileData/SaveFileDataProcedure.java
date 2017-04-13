package ru.tatiana.demo.procedure.fileData;

import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.object.StoredProcedure;

import javax.sql.DataSource;
import java.sql.Types;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Tatyana on 11.04.2017.
 */
public class SaveFileDataProcedure extends StoredProcedure {

    private static final String SQL = "\"save_fileData\"";

    private static final String CONTENT = "_content";
    private static final String USED = "_used";
    private static final String NAME = "_name";
    private static final String FILE_DATA_ID = "_id";
    private static final String REFCUR = "refcur";

    public SaveFileDataProcedure(DataSource dataSource) {
        setDataSource(dataSource);
        setSql(SQL);
        declareParameter(new SqlParameter(FILE_DATA_ID, Types.BIGINT));
        declareParameter(new SqlParameter(CONTENT, Types.VARCHAR));
        declareParameter(new SqlParameter(USED, Types.BOOLEAN));
        declareParameter(new SqlParameter(NAME, Types.VARCHAR));
        compile();
    }

    public Long execute(Long id, String content, Boolean used, String name) {
        Map<String, Object> params = new HashMap<>();
        params.put(FILE_DATA_ID, id);
        params.put(CONTENT, content);
        params.put(USED, used);
        params.put(NAME, name);
        Map<String, Object> stringObjectMap = execute(params);
        return (Long) stringObjectMap.get(REFCUR);
    }
}
