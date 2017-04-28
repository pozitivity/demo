package ru.tatiana.demo.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import ru.tatiana.demo.model.DataFile;

import java.util.HashMap;
import java.util.List;

/**
 * Created by Tatyana on 11.04.2017.
 */
public interface DataFileService {
    List<DataFile> getListDataFiles(Integer offset, Integer pageSize);

    DataFile getDataFileById(Long id);

    Long saveDataFile(Long id, String content, Boolean used, String name, Long size, String headers);

    void deleteDataFile(Long id);

}
