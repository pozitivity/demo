package ru.tatyana.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.tatyana.demo.entity.Patient;
import ru.tatyana.demo.repository.PatientRepositoryJpa;

import java.sql.Timestamp;
import java.util.List;

@Component
public class PatientService {
    @Autowired
    private PatientRepositoryJpa patientRepositoryJpa;

    public List<Patient> getPatients() {
        return patientRepositoryJpa.getPatients();
    }

    public List<Patient> getPatientsByDiagnosis(Long diagnosis_id) {
        return patientRepositoryJpa.getPatientsByDiagnosis(diagnosis_id);
    }

    public Long getCountPatientsByDiagnosis(Long diagnosis_id) {
        return patientRepositoryJpa.getCountPatientsByDiagnosis(diagnosis_id);
    }

    public List<Long> getListAvailableDiagnoses() {
        return patientRepositoryJpa.getListAvailablesDiagnoses();
    }

    public Timestamp getMinDatein() {
        return patientRepositoryJpa.getMinDatein();
    }

    public Timestamp getMaxDatein() {
        return patientRepositoryJpa.getMaxDatein();
    }

    public Long getPatientsWithSameDatein(Timestamp min, Timestamp max) {
        return patientRepositoryJpa.getCountPatientsWithSameDatein(min, max);
    }
}
