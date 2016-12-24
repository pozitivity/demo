package ru.tatyana.demo.service;

import ru.tatyana.demo.entity.Patient;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by tatiana.gorbunova on 24.12.2016.
 */
public interface PatientService {
    List<Patient> getPatients(Integer offset, Integer pageSize);

    List<Patient> getPatientsByDiagnosis(Long diagnosisId);

    Long getCountPatientsByDiagnosis(Long diagnosisId);

    List<Long> getListAvailableDiagnoses();

    Timestamp getMinDatein();

    Timestamp getMaxDatein();

    Long getPatientsWithSameDatein(Timestamp min, Timestamp max);
}
