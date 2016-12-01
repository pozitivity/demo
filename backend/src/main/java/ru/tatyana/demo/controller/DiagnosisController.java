package ru.tatyana.demo.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.tatyana.demo.entity.Diagnosis;
import ru.tatyana.demo.service.DiagnosisService;

import java.util.List;

@RestController
@RequestMapping(value = {"api"})
public class DiagnosisController {
    @Autowired
    private DiagnosisService diagnosisService;

    @RequestMapping(value = "/diagnosis", method = RequestMethod.GET)
    public List<Diagnosis> getDiagnoses() {
        return diagnosisService.getDiagnoses();
    }
}
