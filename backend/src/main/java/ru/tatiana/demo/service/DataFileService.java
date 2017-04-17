package ru.tatiana.demo.service;

import ru.tatiana.demo.model.DataFile;

import java.util.List;

/**
 * Created by Tatyana on 11.04.2017.
 */
public interface DataFileService {
    List<DataFile> getListDataFiles(Integer offset, Integer pageSize);

    DataFile getDataFileById(Long id);

    Long saveDataFile(Long id, String content, Boolean used, String name);

    void deleteDataFile(Long id);

}
