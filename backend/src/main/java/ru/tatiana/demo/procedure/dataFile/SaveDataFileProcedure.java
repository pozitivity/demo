package ru.tatiana.demo.procedure.dataFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.SqlReturnResultSet;
import org.springframework.jdbc.object.StoredProcedure;
import ru.tatiana.demo.model.DataFile;
import ru.tatiana.demo.procedure.extractor.dataFile.DataFileExtractor;

import javax.sql.DataSource;
import java.sql.Types;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Tatyana on 11.04.2017.
 */
public class SaveDataFileProcedure extends StoredProcedure {

    private static final String SQL = "\"save_data_file\"";

    private static final String CONTENT = "_content";
    private static final String USED = "_used";
    private static final String NAME = "_name";
    private static final String FILE_DATA_ID = "_id";
    private static final String SIZE = "_size";
    private static final String HEADERS = "_headers";
    private static final String REFCUR = "rc_SaveDataFile";

    public SaveDataFileProcedure(DataSource dataSource) {
        setDataSource(dataSource);
        setSql(SQL);
        declareParameter(new SqlParameter(FILE_DATA_ID, Types.BIGINT));
        declareParameter(new SqlParameter(CONTENT, Types.VARCHAR));
        declareParameter(new SqlParameter(USED, Types.BOOLEAN));
        declareParameter(new SqlParameter(NAME, Types.VARCHAR));
        declareParameter(new SqlParameter(SIZE, Types.BIGINT));
        declareParameter(new SqlParameter(HEADERS, Types.VARCHAR));
        declareParameter(new SqlReturnResultSet(REFCUR, new DataFileExtractor()));
        compile();
    }

    public DataFile execute(Long id, String content, Boolean used, String name, Long size, String headers) {
        Map<String, Object> params = new HashMap<>();
        params.put(FILE_DATA_ID, id);
        params.put(CONTENT, content);
        params.put(USED, used);
        params.put(NAME, name);
        params.put(SIZE, size);
        params.put(HEADERS, headers);
        Map<String, Object> stringObjectMap = execute(params);
        return (DataFile) stringObjectMap.get(REFCUR);
    }
}
