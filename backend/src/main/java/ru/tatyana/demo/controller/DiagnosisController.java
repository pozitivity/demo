package ru.tatyana.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.tatyana.demo.entity.Diagnosis;
import ru.tatyana.demo.service.impl.DiagnosisServiceImpl;

import java.util.List;

@RestController
@RequestMapping(value = {"api/diagnosis"})
public class DiagnosisController {

    @Autowired
    private DiagnosisServiceImpl diagnosisServiceImpl;

    @RequestMapping(method = RequestMethod.GET)
    public List<Diagnosis> getDiagnoses(@RequestParam(required = false) Integer offset, @RequestParam(required = false) Integer pageSize) {
        return diagnosisServiceImpl.getDiagnoses(offset, pageSize);
    }
}
