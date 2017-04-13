package ru.tatiana.demo.procedure.patient;

import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.SqlReturnResultSet;
import org.springframework.jdbc.object.StoredProcedure;
import ru.tatiana.demo.model.PatientModel;
import ru.tatiana.demo.procedure.extractor.patient.PatientListExtractor;

import javax.sql.DataSource;
import java.sql.Types;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by tatiana.gorbunova on 30.11.2016.
 */
public class GetListPatientsProcedure extends StoredProcedure {

    private static final String SQL = "\"get_patients\"";

    private static final String OFFSET = "_offset";
    private static final String PAGE_SIZE = "_page_size";
    private static final String REFCUR = "rc_GetPatients";

    public GetListPatientsProcedure(DataSource dataSource) {
        setDataSource(dataSource);
        setSql(SQL);
        declareParameter(new SqlParameter(OFFSET, Types.INTEGER));
        declareParameter(new SqlParameter(PAGE_SIZE, Types.INTEGER));
        declareParameter(new SqlReturnResultSet(REFCUR, new PatientListExtractor()));
        compile();
    }

    public List<PatientModel> execute(Integer offset, Integer pageSize) {
        Map<String, Object> params = new HashMap<>();
        params.put(OFFSET, offset);
        params.put(PAGE_SIZE, pageSize);
        Map<String, Object> stringObjectMap = execute(params);
        return (List<PatientModel>) stringObjectMap.get(REFCUR);
    }
}
