package ru.tatiana.demo.procedure.dataFile;

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
public class GetDataFileProcedure extends StoredProcedure {
    private static final String SQL = "\"get_data_file\"";

    private static final String FILE_DATA_ID = "_id";
    private static final String REFCUR = "rc_GetFileData";

    public GetDataFileProcedure(DataSource dataSource) {
        setDataSource(dataSource);
        setSql(SQL);
        declareParameter(new SqlParameter(FILE_DATA_ID, Types.BIGINT));
        declareParameter(new SqlReturnResultSet(REFCUR, new DataFileExtractor()));
        compile();
    }

    public DataFile execute(Long id) {
        Map<String, Object> params = new HashMap<>();
        params.put(FILE_DATA_ID, id);
        Map<String, Object> stringObjectMap = execute(params);
        return (DataFile) stringObjectMap.get(REFCUR);
    }
}
