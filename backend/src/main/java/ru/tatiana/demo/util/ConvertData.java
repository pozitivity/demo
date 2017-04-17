package ru.tatiana.demo.util;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * Created by Tatyana on 12.03.2016.
 */
public class ConvertData {

   /* private final String FILE_DIAGNOSES_MKB_10_TXT = ".\\src\\main\\resources\\sql\\spr_mkb10.txt";
    private final String TABLE_NAME = "diagnosis";
    private final String TABLE_FIELDS = " (id, code, name)";
    private final String UNIQUE_FIELD = "code";
    private final String FILE_DIAGNOSES_MKB_10_SQL = ".\\src\\main\\resources\\data.sql";*/
    private final String FILE_MAIN_TXT = ".\\src\\main\\resources\\sql\\PATIENTS.txt";
    private final String FILE_MAIN_SQL = ".\\\\src\\\\main\\\\resources\\\\data.sql";
    private final String FILE_WITH_RESULT = ".\\\\src\\\\main\\\\resources\\\\result.txt";

    public void readDataFromFile() {
        /*try {
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
                linewrite = "INSERT INTO " + TABLE_NAME + TABLE_FIELDS + " SELECT " + id + ", \'" + code + "\', " + "\'" + name + "\'" +
                        " WHERE NOT EXISTS (SELECT id FROM " + TABLE_NAME + " WHERE " + UNIQUE_FIELD + " = \'" + code + "\');";
                buffered_writer.newLine();
                buffered_writer.write(linewrite);
            }
            buffered_reader.close();
            buffered_writer.close();
        } catch(Exception e) {
            e.printStackTrace();
        }*/
        try {
            BufferedReader buffered_reader = new BufferedReader(new InputStreamReader(new FileInputStream(FILE_MAIN_TXT), "utf-8"));
            BufferedWriter buffered_writer = null;
            if (Files.exists(Paths.get(FILE_MAIN_TXT))) {
                buffered_writer = new BufferedWriter(new FileWriter(FILE_MAIN_SQL, true));
            } else {
                buffered_writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(FILE_MAIN_SQL), "utf-8"));
            }
            String lineread, linewrite;
            while ((lineread = buffered_reader.readLine()) != null) {
                lineread = lineread.replaceAll("[\uFEFF-\uFFFF]", "");
                String[] rec = lineread.split(";");
                int id = new Integer(rec[0]).intValue();
                System.out.println(id);
                String dateBirth = rec[1];
                String dateIn = rec[2];
                String code = rec[3];
                linewrite = "WITH dgn AS (SELECT id FROM diagnosis WHERE code = \'" + code + "\')" +
                        " INSERT INTO patient(id, date_birthday, date_in, diagnosis_id) SELECT " + id + ", TIMESTAMP \'" + dateBirth + "\', " + "TIMESTAMP \'" + dateIn + "\', id FROM dgn;";
                buffered_writer.write(linewrite);
                buffered_writer.newLine();
            }
            buffered_reader.close();
            buffered_writer.close();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }

//    public void writeToTxtFile(List<ResultModel> result, String nameMethod) {
//        try {
//            BufferedWriter buffered_writer = null;
//            if (Files.exists(Paths.get(FILE_WITH_RESULT))) {
//                buffered_writer = new BufferedWriter(new FileWriter(FILE_WITH_RESULT, true));
//            } else {
//                buffered_writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(FILE_WITH_RESULT), "utf-8"));
//            }
//            buffered_writer.write(nameMethod);
//            buffered_writer.newLine();
//            for (ResultModel resultModel: result) {
//                buffered_writer.write(resultModel.getIteration().toString() + " " + resultModel.getInterval().toString());
//                buffered_writer.newLine();
//            }
//        } catch(Exception e) {
//            e.printStackTrace();
//        }
//    }
}
