package ru.tatyana.demo.procedure.diagnosis;

import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.SqlReturnResultSet;
import org.springframework.jdbc.object.StoredProcedure;
import ru.tatyana.demo.entity.Diagnosis;
import ru.tatyana.demo.procedure.extractor.diagnosis.DiagnosisListExtractor;

import javax.sql.DataSource;
import java.sql.Types;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by tatiana.gorbunova on 24.12.2016.
 */
public class GetListDiagnosesProcedure extends StoredProcedure {
    public static final String SQL = "\"get_diagnoses\"";

    public static final String OFFSET = "_offset";
    public static final String PAGE_SIZE = "_page_size";
    public static final String REFCUR = "rc_GetDiagnoses";

    public GetListDiagnosesProcedure(DataSource dataSource) {
        setDataSource(dataSource);
        setSql(SQL);
        declareParameter(new SqlParameter(OFFSET, Types.INTEGER));
        declareParameter(new SqlParameter(PAGE_SIZE, Types.INTEGER));
        declareParameter(new SqlReturnResultSet(REFCUR, new DiagnosisListExtractor()));
        compile();
    }

    public List<Diagnosis> execute(Integer offset, Integer pageSize) {
        Map<String, Object> params = new HashMap<>();
        params.put(OFFSET, offset);
        params.put(PAGE_SIZE, pageSize);
        Map<String, Object> stringObjectMap = execute(params);
        return (List<Diagnosis>) stringObjectMap.get(REFCUR);
    }
}
