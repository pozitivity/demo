package ru.tatiana.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.tatiana.demo.model.DataFile;
import ru.tatiana.demo.service.DataFileService;

import java.util.List;

/**
 * Created by Tatyana on 12.04.2017.
 */
@RestController()
@RequestMapping(value = {"api/dataFile"})
public class DataFileController {

    @Autowired
    DataFileService dataFileService;

    @RequestMapping(method = RequestMethod.GET)
    public List<DataFile> getDataFiles(@RequestParam("offset") Integer offset,
                                   @RequestParam("pageSize") Integer pageSize) {
        return dataFileService.getListDataFiles(offset, pageSize);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public DataFile getById(@PathVariable("id") Long id) {
        return dataFileService.getDataFileById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Long saveDataFile(@RequestBody DataFile file) {
        return dataFileService.saveDataFile(file.getId(), file.getContent(), file.getUsed(), file.getName());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteDataFile(@PathVariable("id") Long id) {
        dataFileService.deleteDataFile(id);
    }
}
