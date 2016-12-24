package ru.tatyana.demo.businessLayer.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.tatyana.demo.businessLayer.BubbleServiceBL;
import ru.tatyana.demo.entity.Diagnosis;
import ru.tatyana.demo.model.Bubble;
import ru.tatyana.demo.service.impl.DiagnosisServiceImpl;
import ru.tatyana.demo.service.impl.PatientServiceImpl;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Tatyana on 01.04.2016.
 */
@Component
public class BubbleServiceBLImpl implements BubbleServiceBL {

    @Autowired
    private DiagnosisServiceImpl diagnosisServiceImpl;

    @Autowired
    private PatientServiceImpl patientServiceImpl;

    public List<Bubble> getData() {
        List<Bubble> res = new ArrayList<>();
        List<Long> avDi = patientServiceImpl.getListAvailableDiagnoses();
        for (Long di: avDi) {
            Bubble bubble = new Bubble(1L, "test", 5L);
            Diagnosis diagnosis = diagnosisServiceImpl.getById(di);
            bubble.setId(diagnosis.getId());
            bubble.setName(diagnosis.getName());
            bubble.setSize(patientServiceImpl.getCountPatientsByDiagnosis(diagnosis.getId()));
            res.add(bubble);
        }

        return res;
    }
}
