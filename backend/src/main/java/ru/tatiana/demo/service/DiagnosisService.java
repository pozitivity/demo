package ru.tatiana.demo.service;

import ru.tatiana.demo.model.Diagnosis;

import java.util.List;

/**
 * Created by tatiana.gorbunova on 24.12.2016.
 */
public interface DiagnosisService {

    List<Diagnosis> getDiagnoses(Integer offset, Integer pageSize);

    Diagnosis getById(Long id);
}
