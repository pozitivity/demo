package ru.tatiana.demo.service;

import ru.tatiana.demo.model.DataFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 * Created by Tatyana on 11.04.2017.
 */
public interface DataFileService {
    List<DataFile> getListDataFiles(Integer offset, Integer pageSize);

    DataFile getDataFileById(Long id);

    DataFile saveDataFile(Long id, String content, Boolean used, String name, Long size, String headers);

    void deleteDataFile(Long id);

    List<Map> getContentDataFileAsJson(Long id) throws IOException;

}
