package ru.tatiana.demo.util.parser;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;

/**
 * Created by Tatyana on 13.04.2017.
 */

public interface Parser {

    String CSV = "CSV";
    String XLS = "XLS";
    String XLSX = "XLSX";

    ArrayList<String> getHeaders(MultipartFile file);

    String getContent(MultipartFile file);

//    public String getContent(MultipartFile file) throws IOException {
//
//    }
//
//    public ArrayList<String> getFields(MultipartFile file) {
//
//    }
//
//    private ArrayList<String> getFieldsCSV(InputStream is) {
//
//    }
//
//    private ArrayList<String> getFieldsXLS() {
//
//    }
//
//    private String getContentCSV(MultipartFile file) {
//        String content = "";
//        return content;
//    }
//
//    private String getContentXLS(MultipartFile file) {
//        //hssf
//        String content = "";
//        HSSFWorkbook book = null;
//        try {
//            book = new HSSFWorkbook(file.getInputStream());
//        } catch(IOException e) {
//            throw new RuntimeException("Ошибка чтения файла");
//        }
//        HSSFSheet sheet = book.getSheetAt(0);
//        return content;
//    }
//
//    private String getContentXLSX(MultipartFile file) {
//        //xssf
//        String content = "";
//        XSSFWorkbook book = null;
//        try {
//            book = new XSSFWorkbook(file.getInputStream());
//        } catch(IOException e) {
//            throw new RuntimeException("Ошибка чтения файла");
//        }
//        return content;
//    }

}
