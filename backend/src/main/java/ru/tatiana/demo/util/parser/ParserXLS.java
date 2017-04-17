package ru.tatiana.demo.util.parser;

import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.CellReference;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;

/**
 * Created by tatiana.gorbunova on 15.04.2017.
 */

@Component
public class ParserXLS implements Parser {

    public ParserXLS() {

    }

    @Override
    public String getContent(MultipartFile file) {
        String content = "";
        return content;
    }

    @Override
    public ArrayList<String> getHeaders(MultipartFile file) {
        ArrayList<String> headers = new ArrayList<>();

        HSSFWorkbook book = null;
        try {
            book = new HSSFWorkbook(file.getInputStream());
        } catch(IOException e) {
            throw new RuntimeException("Ошибка чтения файла");
        }

        HSSFSheet sheet = book.getSheetAt(0);
        HSSFRow row  = sheet.getRow(0);

        for (int i = 0; i < row.getLastCellNum(); i++) {
                headers.add(row.getCell(i).toString());
        }


        try {
            book.close();
        } catch(IOException e) {
            throw new RuntimeException("Ошибка при закрытии файла");
        }

        return headers;
    }
}
