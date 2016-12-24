package ru.tatyana.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.tatyana.demo.entity.Diagnosis;
import ru.tatyana.demo.repository.DiagnosisRepository;
import ru.tatyana.demo.repository.jpa.DiagnosisRepositoryJpa;
import ru.tatyana.demo.service.DiagnosisService;

import java.util.List;

@Component
public class DiagnosisServiceImpl implements DiagnosisService {
    @Autowired
    private DiagnosisRepositoryJpa diagnosisRepositoryJpa;

    @Autowired
    private DiagnosisRepository diagnosisRepository;
// TODO: remove jpa method
//    public List<Diagnosis> getDiagnoses() {
//        return diagnosisRepositoryJpa.getDiagnoses();
//    }

    @Override
    public List<Diagnosis> getDiagnoses(Integer offset, Integer pageSize) {
        return diagnosisRepository.getDiagnoses(offset, pageSize);
    }

    @Override
    public Diagnosis getById(Long id) {
        return diagnosisRepository.getDiagnosisById(id);
    }

}
