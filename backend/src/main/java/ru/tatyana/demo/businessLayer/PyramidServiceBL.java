package ru.tatyana.demo.businessLayer;

import ru.tatyana.demo.model.Pyramid;

import java.util.List;

/**
 * Created by tatiana.gorbunova on 24.12.2016.
 */
public interface PyramidServiceBL {
    List<Pyramid> getDataByMonth();

    List<Pyramid> getDataByYear();
}
