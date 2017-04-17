package ru.tatiana.demo.util.parser;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;

/**
 * Created by tatiana.gorbunova on 15.04.2017.
 */

@Component
public class ParserCSV implements Parser {

    public ParserCSV() {

    }

    @Override
    public String getContent(MultipartFile file) {
        String content = "";
        return content;
    }

    @Override
    public ArrayList<String> getHeaders(MultipartFile file) {
        ArrayList<String> headers = new ArrayList<>();
        return headers;
    }
}
