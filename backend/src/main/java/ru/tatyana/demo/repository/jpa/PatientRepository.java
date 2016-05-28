package ru.tatyana.demo.repository.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;
import ru.tatyana.demo.entity.Patient;

import javax.persistence.QueryHint;
import java.sql.Timestamp;
import java.util.List;

public interface PatientRepository extends JpaRepository<Patient, Long> {

    // get all patients
    @Query("select p from Patient p")
    List<Patient> getPatients();

    // get patients with same diagnosis
    @Query("select p from Patient p where p.diagnosis = ?1")
    List<Patient> getPatientsByDiagnosis(Long diagnosis_id);

    // get diagnoses, which are
    @Query("select distinct p.diagnosisId from Patient p")
    List<Long> getListAvailablesDiagnoses();

    // get count of patients with same diagnosis
    @Query("select count(p) from Patient p where p.diagnosisId = ?1")
    Long getCountPatientsByDiagnosis(Long diagnosis_id);

    // get min datein
    @Query("select min(p.datein) from Patient p")
    Timestamp getMinDatein();

    // get max datein
    @Query("select max(p.datein) from Patient p")
    Timestamp getMaxDatein();

    // get count of patients with same date of datein
    @Query("select count(p) from Patient p where p.datein >= ?1 and p.datein <= ?2")
    Long getCountPatientsWithSameDatein(Timestamp min, Timestamp max);
}
