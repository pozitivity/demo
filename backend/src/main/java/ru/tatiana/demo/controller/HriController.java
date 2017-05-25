package ru.tatiana.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.tatiana.demo.model.District;
import ru.tatiana.demo.model.Indicator;
import ru.tatiana.demo.model.Score;
import ru.tatiana.demo.service.HriService;

import java.util.List;

/**
 * Created by Tatyana on 24.05.2017.
 */
@RestController
@RequestMapping("/api/hri")
public class HriController {

    @Autowired
    HriService hriService;

    @RequestMapping(value = "/districts", method = RequestMethod.GET)
    public List<District> getDistricts() {
        return hriService.getDistricts();
    }

    @RequestMapping(value = "/indicators", method = RequestMethod.GET)
    public List<Indicator> getIndicators() {
        return hriService.getIndicators();
    }

    @RequestMapping(value = "/scores", method = RequestMethod.GET)
    public List<Score> getScores() {
        return hriService.getScores();
    }
}
