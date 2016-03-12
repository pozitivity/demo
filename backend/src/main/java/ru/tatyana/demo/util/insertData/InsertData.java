package ru.tatyana.demo.util.insertData;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * Created by Tatyana on 12.03.2016.
 */
public class InsertData {

    private final String FILE_DIAGNOSES_MKB_10_TXT = ".\\src\\main\\resources\\sql\\spr_mkb10.txt";
    private final String TABLE_NAME = "diagnosis";
    private final String TABLE_FIELDS = " (id, code, name)";
    private final String UNIQUE_FIELD = "code";
    private final String FILE_DIAGNOSES_MKB_10_SQL = ".\\src\\main\\resources\\data.sql";
    /*
    * private final String FILE_DIAGNOSES_MKB_10_TXT = ".\\src\\main\\resources\\sql\\main.txt";
    *     private final String TABLE_NAME = "patient";
     */

    public void readDataFromFile() {
        try {
            BufferedReader buffered_reader = new BufferedReader(new InputStreamReader(new FileInputStream(FILE_DIAGNOSES_MKB_10_TXT), "utf-8"));
            BufferedWriter buffered_writer = null;
            if (Files.exists(Paths.get(FILE_DIAGNOSES_MKB_10_SQL))) {
                buffered_writer = new BufferedWriter(new FileWriter(FILE_DIAGNOSES_MKB_10_SQL, true));
            } else {
                buffered_writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(FILE_DIAGNOSES_MKB_10_SQL), "utf-8"));
            }
            String lineread, linewrite;
            while ((lineread = buffered_reader.readLine()) != null) {
                lineread = lineread.replaceAll("[\uFEFF-\uFFFF]", "");
                String[] rec = lineread.split(";");
                int id = new Integer(rec[0]).intValue();
                String code = rec[1];
                String name = rec[2];
                linewrite = "INSERT INTO " + TABLE_NAME + TABLE_FIELDS + "SELECT " + id + ", \"" + code + "\", " + "\"" + name + "\"" +
                        " WHERE NOT EXISTS (SELECT id FROM " + TABLE_NAME + " WHERE " + UNIQUE_FIELD + " = \"" + code + "\");";
                buffered_writer.newLine();
                buffered_writer.write(linewrite);
            }
            buffered_reader.close();
            buffered_writer.close();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
