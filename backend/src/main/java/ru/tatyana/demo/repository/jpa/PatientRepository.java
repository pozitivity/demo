package ru.tatyana.demo.repository.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;
import ru.tatyana.demo.entity.Patient;

import javax.persistence.QueryHint;
import java.util.List;

public interface PatientRepository extends JpaRepository<Patient, Long> {

    @Query("select p from Patient p")
    List<Patient> getPatients();

    @Query("select p from Patient p where p.diagnosis = ?1")
    List<Patient> getPatientsByDiagnosis(Long diagnosis_id);

    @Query("select distinct p.diagnosisId from Patient p")
    List<Long> getListAvailablesDiagnoses();

    @Query("select count(p) from Patient p where p.diagnosisId = ?1")
    Long getCountPatientsByDiagnosis(Long diagnosis_id);
}
