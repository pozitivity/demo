package ru.tatyana.demo.repository.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ru.tatyana.demo.entity.Diagnosis;

import java.util.List;

public interface DiagnosisRepositoryJpa extends JpaRepository<Diagnosis, Long> {
    @Query("select d from Diagnosis d")
    List<Diagnosis> getDiagnoses();

    @Query("select d from Diagnosis d where d.id = ?1")
    Diagnosis getById(Long id);
}
