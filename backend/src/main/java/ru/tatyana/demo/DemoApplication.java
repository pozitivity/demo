package ru.tatyana.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import ru.tatyana.demo.util.insertData.InsertData;
/**
 * Created by Tatyana on 12.03.2016.
 */
@SpringBootApplication
public class DemoApplication {
    public static void main(String args[]) {
        SpringApplication.run(DemoApplication.class, args);

        /*InsertData iD = new InsertData();
        iD.readDataFromFile();*/
    }
}
