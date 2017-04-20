package ru.tatiana.demo.service.impl;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import ru.tatiana.demo.service.FileService;
import ru.tatiana.demo.util.parser.Parser;
import ru.tatiana.demo.util.parser.ParserCSV;
import ru.tatiana.demo.util.parser.ParserXLS;
import ru.tatiana.demo.util.parser.ParserXLSX;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

/**
 * Created by tatiana.gorbunova on 16.04.2017.
 */
@Component
public class FileServiceImpl implements FileService {

    private static final String NAME_TEMP_FILE = "temp";

    Parser parser;

    @Override
    public String getExtension(String fullName) {
        return fullName.split("\\.")[1];
    }

    @Override
    public String getName(String fullName) {
        return fullName.split("\\.")[0];
    }

    @Override
    public File saveTempFile(MultipartFile file) {
        File tempFile = null;
        System.out.println(System.getProperty("user.dir"));
        String absolutePath = System.getProperty("user.dir") + "/" + file.getOriginalFilename();
        try {
            tempFile = File.createTempFile(NAME_TEMP_FILE, "." + getExtension(file.getOriginalFilename()), new File("D:/"));
        } catch(IOException e) {
            throw new RuntimeException("Ошибка при сохранении временного файла");
        }
        return tempFile;
    }

    @Override
    public ArrayList<String> getHeaders(MultipartFile file) {
        ArrayList<String> headers = new ArrayList<>();
        switch(getExtension(file.getOriginalFilename()).toUpperCase()) {
            case Parser.CSV:
                parser = new ParserCSV();
                headers = parser.getHeaders(file);
                break;
            case Parser.XLS:
                parser = new ParserXLS();
                headers = parser.getHeaders(file);
                break;
            case Parser.XLSX:
                parser = new ParserXLSX();
                headers = parser.getHeaders(file);
                break;
        }
        saveTempFile(file);
        return headers;
    }
}
