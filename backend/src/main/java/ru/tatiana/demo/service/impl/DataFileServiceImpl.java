package ru.tatiana.demo.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.tatiana.demo.model.DataFile;
import ru.tatiana.demo.repository.DataFileRepository;
import ru.tatiana.demo.service.DataFileService;

import java.util.HashMap;
import java.util.List;

/**
 * Created by Tatyana on 11.04.2017.
 */
@Component
public class DataFileServiceImpl implements DataFileService {

    @Autowired
    private DataFileRepository dataFileRepository;

    @Override
    public List<DataFile> getListDataFiles(Integer offset, Integer pageSize) {
        return dataFileRepository.getListDataFile(offset, pageSize);
    }

    @Override
    public DataFile getDataFileById(Long id) {
        return dataFileRepository.getDataFileById(id);
    }

    @Override
    public DataFile saveDataFile(Long id, String content, Boolean used, String name, Long size, String headers) {
        return dataFileRepository.saveDataFile(id, content, used, name, size, headers);
    }

    @Override
    public void deleteDataFile(Long id) {
        dataFileRepository.deleteDataFile(id);
    }

}
