package ru.tatyana.demo.procedure.diagnosis;import org.springframework.jdbc.core.SqlParameter;import org.springframework.jdbc.core.SqlReturnResultSet;import org.springframework.jdbc.object.StoredProcedure;import ru.tatyana.demo.entity.Diagnosis;import ru.tatyana.demo.procedure.extractor.diagnosis.DiagnosisExtractor;import javax.sql.DataSource;import java.sql.Types;import java.util.HashMap;import java.util.Map;/** * Created by Tatyana on 24.12.2016. */public class GetDiagnosisProcedure extends StoredProcedure {    private static final String SQL = "\"get_diagnosis\"";    private static final String DIAGNOSIS_ID = "_id";    private static final String REFCUR = "rc_GetDiagnosis";    public GetDiagnosisProcedure(DataSource dataSource) {        setDataSource(dataSource);        setSql(SQL);        declareParameter(new SqlParameter(DIAGNOSIS_ID, Types.BIGINT));        declareParameter(new SqlReturnResultSet(REFCUR, new DiagnosisExtractor()));        compile();    }    public Diagnosis execute(Long id) {        Map<String, Object> params = new HashMap<>();        params.put(DIAGNOSIS_ID, id);        Map<String, Object> stringObjectMap = execute(params);        return (Diagnosis) stringObjectMap.get(REFCUR);    }}