package ru.tatyana.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.tatyana.demo.entity.Diagnosis;
import ru.tatyana.demo.repository.DiagnosisRepository;

import java.util.List;

/**
 * Created by Tatyana on 12.03.2016.
 */
@Component
public class DiagnosisService {
    @Autowired
    private DiagnosisRepository diagnosisRepository;

    public List<Diagnosis> getDiagnoses() { return diagnosisRepository.getDiagnoses(); }
}
