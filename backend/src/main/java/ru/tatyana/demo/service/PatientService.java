package ru.tatyana.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.tatyana.demo.entity.Patient;
import ru.tatyana.demo.repository.jpa.PatientRepository;

import java.sql.Timestamp;
import java.util.List;

@Component
public class PatientService {
    @Autowired
    private PatientRepository patientRepository;

    public List<Patient> getPatients() {
        return patientRepository.getPatients();
    }

    public List<Patient> getPatientsByDiagnosis(Long diagnosis_id) {
        return patientRepository.getPatientsByDiagnosis(diagnosis_id);
    }

    public Long getCountPatientsByDiagnosis(Long diagnosis_id) {
        return patientRepository.getCountPatientsByDiagnosis(diagnosis_id);
    }

    public List<Long> getListAvailableDiagnoses() {
        return patientRepository.getListAvailablesDiagnoses();
    }

    public Timestamp getMinDatein() {
        return patientRepository.getMinDatein();
    }

    public Timestamp getMaxDatein() {
        return patientRepository.getMaxDatein();
    }

    public Long getPatientsWithSameDatein(Timestamp min, Timestamp max) {
        return patientRepository.getCountPatientsWithSameDatein(min, max);
    }
}
