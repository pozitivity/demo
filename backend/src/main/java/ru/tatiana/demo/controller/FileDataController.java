package ru.tatiana.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.tatiana.demo.service.FileDataService;
import ru.tatiana.demo.model.FileData;

import java.io.IOException;
import java.util.List;

/**
 * Created by Tatyana on 12.04.2017.
 */
@Controller
@RequestMapping(value = {"api/file"})
public class FileDataController {

    @Autowired
    FileDataService fileDataService;

    @RequestMapping(method = RequestMethod.GET)
    public List<FileData> getFiles(@RequestParam("offset") Integer offset,
                                   @RequestParam("pageSize") Integer pageSize) {
        return fileDataService.getListFiles(offset, pageSize);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public FileData getById(@PathVariable("id") Long id) {
        return fileDataService.getFileDataById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Long saveFile(@RequestBody FileData file) {
        return fileDataService.saveFileData(file.getId(), file.getContent(), file.getUsed(), file.getName());
    }

    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    public String upload(@RequestParam("file")MultipartFile file) throws IOException {
        fileDataService.parseFile(file);
        return "Done";
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteFile(@PathVariable("id") Long id) {
        fileDataService.deleteFileData(id);
    }
}
