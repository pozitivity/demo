package ru.tatyana.demo.businessLayer;

import ru.tatyana.demo.model.BarChart;

import java.util.List;

/**
 * Created by tatiana.gorbunova on 24.12.2016.
 */
public interface BarChartServiceBL {
    List<BarChart> getDataByMonth();

    List<BarChart> getDataByYear();
}
