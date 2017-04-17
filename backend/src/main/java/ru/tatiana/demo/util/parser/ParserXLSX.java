package ru.tatiana.demo.util.parser;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;

/**
 * Created by tatiana.gorbunova on 15.04.2017.
 */

@Component
public class ParserXLSX implements Parser {

    public ParserXLSX() {

    }

    @Override
    public String getContent(MultipartFile file) {
        String content = "";
        return content;
    }

    @Override
    public ArrayList<String> getHeaders(MultipartFile file) {
        ArrayList<String> headers = new ArrayList<>();

        XSSFWorkbook book = null;
        try {
            book = new XSSFWorkbook(file.getInputStream());
        } catch(IOException e) {
            throw new RuntimeException("Ошибка чтения файла");
        }
        return headers;
    }
}
