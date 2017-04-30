package ru.tatiana.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.tatiana.demo.model.DataFile;
import ru.tatiana.demo.service.DataFileService;

import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 * Created by Tatyana on 12.04.2017.
 */
@RestController()
@RequestMapping(value = {"api/dataFile"})
public class DataFileController {

    @Autowired
    DataFileService dataFileService;

    @RequestMapping(method = RequestMethod.GET)
    public List<DataFile> getDataFiles(@RequestParam(value = "offset", defaultValue = "0", required = false) Integer offset,
                                   @RequestParam(value = "pageSize", defaultValue = "50", required = false) Integer pageSize) {
        return dataFileService.getListDataFiles(offset, pageSize);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public DataFile getById(@PathVariable("id") Long id) {
        return dataFileService.getDataFileById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public DataFile saveDataFile(@RequestBody DataFile file) {
        return dataFileService.saveDataFile(file.getId(), file.getContent(), file.getUsed(), file.getName(), file.getSize(), file.getHeaders());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteDataFile(@PathVariable("id") Long id) {
        dataFileService.deleteDataFile(id);
    }

    @RequestMapping(value = "/asjson/{id}", method = RequestMethod.GET)
    public List<Map> getDataFileAsJson(@PathVariable("id") Long id) throws IOException {
        return dataFileService.getContentDataFileAsJson(id);
    }
}
