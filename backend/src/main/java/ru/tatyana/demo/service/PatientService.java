package ru.tatyana.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.tatyana.demo.entity.Patient;
import ru.tatyana.demo.repository.PatientRepository;

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
}
