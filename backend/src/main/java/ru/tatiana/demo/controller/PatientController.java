package ru.tatiana.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.tatiana.demo.model.Patient;
import ru.tatiana.demo.model.PatientModel;
import ru.tatiana.demo.service.impl.PatientServiceImpl;

import java.util.List;

@RestController
@RequestMapping(value = {"api/patients"})
public class PatientController {
    @Autowired
    private PatientServiceImpl patientServiceImpl;

    @RequestMapping(method = RequestMethod.GET)
    public List<PatientModel> getPatients(@RequestParam(required = false) Integer offset, @RequestParam(required = false) Integer pageSize) {
        return patientServiceImpl.getPatients(offset, pageSize);
    }

//    @RequestMapping(value = "/bydiagnosis/{diagnosis}", method = RequestMethod.GET)
//    public List<Patient> getPatientsByDiagnosis(@PathVariable("diagnosis") Long diagnosisId) {
//        return patientServiceImpl.getPatientsByDiagnosis(diagnosisId);
//    }

}