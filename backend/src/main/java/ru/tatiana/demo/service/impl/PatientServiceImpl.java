package ru.tatiana.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.tatiana.demo.model.PatientModel;
import ru.tatiana.demo.service.PatientService;
import ru.tatiana.demo.model.Patient;
import ru.tatiana.demo.repository.PatientRepository;

import java.sql.Timestamp;
import java.util.List;

@Component
public class PatientServiceImpl implements PatientService {

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

//    @Override
//    public List<PatientModel> getPatientsByDiagnosis(Long diagnosisId) {
//        //return patientRepositoryJpa.getPatientsByDiagnosis(diagnosisId);
//        return patientRepository.getPatients(0, 20);
//    }
//
//    @Override
//    public Long getCountPatientsByDiagnosis(Long diagnosis_id) {
//        return patientRepositoryJpa.getCountPatientsByDiagnosis(diagnosis_id);
//    }
//
//    @Override
//    public List<Long> getListAvailableDiagnoses() {
//        return patientRepositoryJpa.getListAvailablesDiagnoses();
//    }
//
//    @Override
//    public Timestamp getMinDatein() {
//        return patientRepositoryJpa.getMinDatein();
//    }
//
//    @Override
//    public Timestamp getMaxDatein() {
//        return patientRepositoryJpa.getMaxDatein();
//    }
//
//    @Override
//    public Long getPatientsWithSameDatein(Timestamp min, Timestamp max) {
//        return patientRepositoryJpa.getCountPatientsWithSameDatein(min, max);
//    }
}
