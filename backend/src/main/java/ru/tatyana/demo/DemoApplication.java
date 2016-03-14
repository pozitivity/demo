package ru.tatyana.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import ru.tatyana.demo.util.convertData.ConvertData;

/**
 * Created by Tatyana on 12.03.2016.
 */
@SpringBootApplication
public class DemoApplication {
    public static void main(String args[]) {

        /*ConvertData iD = new ConvertData();
        iD.readDataFromFile();*/

        SpringApplication.run(DemoApplication.class, args);
    }
}
