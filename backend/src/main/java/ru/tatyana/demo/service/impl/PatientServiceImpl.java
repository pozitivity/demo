package ru.tatyana.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.tatyana.demo.entity.Patient;
import ru.tatyana.demo.model.PatientModel;
import ru.tatyana.demo.repository.PatientRepository;
import ru.tatyana.demo.repository.jpa.PatientRepositoryJpa;
import ru.tatyana.demo.service.PatientService;

import java.sql.Timestamp;
import java.util.List;

@Component
public class PatientServiceImpl implements PatientService {
    @Autowired
    private PatientRepositoryJpa patientRepositoryJpa;

    @Autowired
    private PatientRepository patientRepository;
// TODO: remove jpa method
//    public List<Patient> getPatients() {
//        return patientRepositoryJpa.getPatients();
//    }

    @Override
    public List<PatientModel> getPatients(Integer offset, Integer pageSize) {
        return patientRepository.getPatients(offset, pageSize);
    }

    @Override
    public List<Patient> getPatientsByDiagnosis(Long diagnosisId) {
        return patientRepositoryJpa.getPatientsByDiagnosis(diagnosisId);
    }

    @Override
    public Long getCountPatientsByDiagnosis(Long diagnosis_id) {
        return patientRepositoryJpa.getCountPatientsByDiagnosis(diagnosis_id);
    }

    @Override
    public List<Long> getListAvailableDiagnoses() {
        return patientRepositoryJpa.getListAvailablesDiagnoses();
    }

    @Override
    public Timestamp getMinDatein() {
        return patientRepositoryJpa.getMinDatein();
    }

    @Override
    public Timestamp getMaxDatein() {
        return patientRepositoryJpa.getMaxDatein();
    }

    @Override
    public Long getPatientsWithSameDatein(Timestamp min, Timestamp max) {
        return patientRepositoryJpa.getCountPatientsWithSameDatein(min, max);
    }
}
