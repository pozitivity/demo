package ru.tatiana.demo.util.convertData;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;

/**
 * Created by Tatyana on 13.04.2017.
 */

@Component
public class ParseFile {

    public String getContent(InputStream is) throws IOException {
        String content = "";
        Workbook excelBook = new XSSFWorkbook(is);
        Sheet excelSheet =  excelBook.getSheetAt(0);
        Row row = excelSheet.getRow(0);
        if (row.getCell(0).getCellType() == HSSFCell.CELL_TYPE_STRING) {
            System.out.println(row.getRowNum());
        }
        return content;
    }
}
