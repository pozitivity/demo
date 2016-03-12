package ru.tatyana.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ru.tatyana.demo.entity.Diagnosis;

import java.util.List;

/**
 * Created by Tatyana on 12.03.2016.
 */
public interface DiagnosisRepository extends JpaRepository<Diagnosis, Long> {
    @Query("select d from Diagnosis d")
    public List<Diagnosis> getDiagnoses();
}
