package ru.tatyana.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ru.tatyana.demo.entity.Patient;

import java.util.List;

/**
 * Created by Tatyana on 12.03.2016.
 */
public interface PatientRepository extends JpaRepository<Patient, Long> {
    @Query("select p from Patient p")
    public List<Patient> getPatients();

    @Query("select p from Patient p where p.diagnosis = ?1")
    public List<Patient> getPatientsByDiagnosis(Long diagnosis_id);
}
