package ru.tatyana.demo.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.tatyana.demo.entity.Patient;
import ru.tatyana.demo.service.PatientService;

import java.util.List;

@RestController
@RequestMapping(value = {"api"})
public class PatientRestController {
    @Autowired
    private PatientService patientService;

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
}
