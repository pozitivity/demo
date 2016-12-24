package ru.tatyana.demo.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import ru.tatyana.demo.entity.Patient;
import ru.tatyana.demo.procedure.patient.GetListPatientsProcedure;

import javax.sql.DataSource;
import java.util.List;

/**
 * Created by tatiana.gorbunova on 30.11.2016.
 */
@Repository
@Transactional
public class PatientRepository {

    private GetListPatientsProcedure getListPatientsProcedure;

    @Autowired
    public void initialise(DataSource dataSource) {
        getListPatientsProcedure = new GetListPatientsProcedure(dataSource);
    }

    @Transactional
    public List<Patient> getPatients(Integer offset, Integer pageSize) {
        return getListPatientsProcedure.execute(offset, pageSize);
    }
}
