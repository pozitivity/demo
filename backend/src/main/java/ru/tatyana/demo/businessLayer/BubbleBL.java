package ru.tatyana.demo.businessLayer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.tatyana.demo.entity.Diagnosis;
import ru.tatyana.demo.model.Bubble;
import ru.tatyana.demo.service.DiagnosisService;
import ru.tatyana.demo.service.PatientService;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Tatyana on 01.04.2016.
 */
@Component
public class BubbleBL {

    @Autowired
    private DiagnosisService diagnosisService;

    @Autowired
    private PatientService patientService;

    public List<Bubble> getData() {
        List<Bubble> res = new ArrayList<>();
        List<Long> avDi = patientService.getListAvailableDiagnoses();
        for (Long di: avDi) {
            Bubble bubble = new Bubble(1L, "test", 5L);
            Diagnosis diagnosis = diagnosisService.getById(di);
            bubble.setId(diagnosis.getId());
            bubble.setName(diagnosis.getName());
            bubble.setSize(patientService.getCountPatientsByDiagnosis(diagnosis.getId()));
            res.add(bubble);
        }

        return res;
    }
}
