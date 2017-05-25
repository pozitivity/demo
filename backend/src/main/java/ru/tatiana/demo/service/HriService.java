package ru.tatiana.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.tatiana.demo.model.District;
import ru.tatiana.demo.model.Indicator;
import ru.tatiana.demo.model.Score;
import ru.tatiana.demo.repository.HriRepository;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Tatyana on 24.05.2017.
 */
@Service
public class HriService {

    @Autowired
    HriRepository hriRepository;

    public List<District> getDistricts() {
        return hriRepository.getDistricts();
    }

    public List<Indicator> getIndicators() {
        return hriRepository.getIndicators();
    }

    public List<Score> getScores() {
        return hriRepository.getScores();
    }

}
