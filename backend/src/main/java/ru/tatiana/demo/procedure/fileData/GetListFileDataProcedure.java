package ru.tatiana.demo.procedure.fileData;

import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.SqlReturnResultSet;
import org.springframework.jdbc.object.StoredProcedure;
import ru.tatiana.demo.model.FileData;
import ru.tatiana.demo.procedure.extractor.fileData.FileDataListExtractor;

import javax.sql.DataSource;
import java.sql.Types;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Tatyana on 11.04.2017.
 */
public class GetListFileDataProcedure extends StoredProcedure {
    private static final String SQL = "\"get_fileDatas\"";

    private static final String OFFSET = "_offset";
    private static final String PAGE_SIZE = "_page_size";
    private static final String REFCUR = "rc_GetFileDatas";

    public GetListFileDataProcedure(DataSource dataSource) {
        setDataSource(dataSource);
        setSql(SQL);
        declareParameter(new SqlParameter(OFFSET, Types.INTEGER));
        declareParameter(new SqlParameter(PAGE_SIZE, Types.INTEGER));
        declareParameter(new SqlReturnResultSet(REFCUR, new FileDataListExtractor()));
        compile();
    }

    public List<FileData> execute(Integer offset, Integer pageSize) {
        Map<String, Object> params = new HashMap<>();
        params.put(OFFSET, offset);
        params.put(PAGE_SIZE, pageSize);
        Map<String, Object> stringObjectMap = execute(params);
        return (List<FileData>) stringObjectMap.get(REFCUR);
    }
}
