package ru.tatyana.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.tatyana.demo.entity.Patient;
import ru.tatyana.demo.model.PagingList;
import ru.tatyana.demo.repository.PatientRepository;
import ru.tatyana.demo.service.PatientService;

import java.util.List;

@RestController
@RequestMapping(value = {"api"})
public class PatientController {
    @Autowired
    private PatientService patientService;

    @Autowired
    private PatientRepository patientRepository;

    @RequestMapping(value = "/patients", method = RequestMethod.GET)
    public List<Patient> getPatients() {
        List<Patient> all = patientService.getPatients();
        List<Patient> result = all.subList(0, 100);
        return result;
    }

    @RequestMapping(value = "/patientsbydiagnosis", method = RequestMethod.GET)
    public List<Patient> getPatientsByDiagnosis(@PathVariable("diagnosis") Long diagnosis_id) {
        return patientService.getPatientsByDiagnosis(diagnosis_id);
    }

    @RequestMapping(value = "/pats", method = RequestMethod.GET)
    public List<Patient> getPats(@RequestParam(required = false) Integer offset,
                                       @RequestParam(required = false) Integer pageSize) {
        return patientRepository.getPatients(offset, pageSize);
    }
}
