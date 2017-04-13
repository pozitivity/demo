package ru.tatiana.demo.businessLayer;

import ru.tatiana.demo.model.BarChart;

import java.util.List;

/**
 * Created by tatiana.gorbunova on 24.12.2016.
 */
public interface BarChartServiceBL {
    List<BarChart> getDataByMonth();

    List<BarChart> getDataByYear();
}
