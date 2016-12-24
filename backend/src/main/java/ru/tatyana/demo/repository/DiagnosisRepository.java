package ru.tatyana.demo.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import ru.tatyana.demo.entity.Diagnosis;
import ru.tatyana.demo.procedure.diagnosis.GetDiagnosisProcedure;
import ru.tatyana.demo.procedure.diagnosis.GetListDiagnosesProcedure;

import javax.sql.DataSource;
import java.util.List;

/**
 * Created by tatiana.gorbunova on 24.12.2016.
 */
@Repository
@Transactional
public class DiagnosisRepository {
    private GetListDiagnosesProcedure getListDiagnosesProcedure;
    private GetDiagnosisProcedure getDiagnosisProcedure;

    @Autowired
    public void initialise(DataSource dataSource) {
        getListDiagnosesProcedure = new GetListDiagnosesProcedure(dataSource);
        getDiagnosisProcedure = new GetDiagnosisProcedure(dataSource);
    }

    @Transactional
    public List<Diagnosis> getDiagnoses(Integer offset, Integer pageSize) {
        return getListDiagnosesProcedure.execute(offset, pageSize);
    }

    @Transactional
    public Diagnosis getDiagnosisById(Long id) {
        return getDiagnosisProcedure.execute(id);
    }
}
