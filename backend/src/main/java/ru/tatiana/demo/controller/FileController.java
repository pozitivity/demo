package ru.tatiana.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import ru.tatiana.demo.service.FileService;

import java.io.IOException;
import java.util.ArrayList;

/**
 * Created by tatiana.gorbunova on 16.04.2017.
 */

@RestController
@RequestMapping(value = {"api/file"})
public class FileController {

    @Autowired
    FileService fileService;

    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    public ArrayList<String> upload(@RequestParam("file")MultipartFile file) throws IOException {
        return fileService.getHeaders(file);
    }
}
