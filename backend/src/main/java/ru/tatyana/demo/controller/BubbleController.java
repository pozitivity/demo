package ru.tatyana.demo.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.tatyana.demo.businessLayer.BubbleBL;
import ru.tatyana.demo.model.Bubble;

import java.util.List;

/**
 * Created by Tatyana on 01.04.2016.
 */
@RestController()
@RequestMapping(value = {"api"})
public class BubbleController {

    @Autowired
    private BubbleBL bubbleBL;

    @RequestMapping(value = {"/bubble"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Bubble> getData() {
        return bubbleBL.getData();
    }
}
