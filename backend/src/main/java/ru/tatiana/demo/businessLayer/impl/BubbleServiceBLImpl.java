package ru.tatiana.demo.businessLayer.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.tatiana.demo.model.Diagnosis;
import ru.tatiana.demo.model.Bubble;
import ru.tatiana.demo.service.impl.DiagnosisServiceImpl;
import ru.tatiana.demo.service.impl.PatientServiceImpl;
import ru.tatiana.demo.businessLayer.BubbleServiceBL;

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
//        List<Long> avDi = patientServiceImpl.getListAvailableDiagnoses();
//        for (Long di: avDi) {
//            Bubble bubble = new Bubble(1L, "test", 5L);
//            Diagnosis diagnosis = diagnosisServiceImpl.getById(di);
//            bubble.setId(diagnosis.getId());
//            bubble.setName(diagnosis.getName());
//            bubble.setSize(patientServiceImpl.getCountPatientsByDiagnosis(diagnosis.getId()));
//            res.add(bubble);
//        }

        return res;
    }
}
