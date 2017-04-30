package ru.tatiana.demo.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.tatiana.demo.model.DataFile;
import ru.tatiana.demo.repository.DataFileRepository;
import ru.tatiana.demo.service.DataFileService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @Override
    public List<Map> getContentDataFileAsJson(Long id) throws IOException {
        List<Map> asJson = new ArrayList<>();
        DataFile dataFile = getDataFileById(id);
        ObjectMapper oMapper = new ObjectMapper();
        List<String> headers = oMapper.readValue(dataFile.getHeaders(),
                oMapper.getTypeFactory().constructCollectionType(List.class, String.class));
        List<List<String>> content = oMapper.readValue(dataFile.getContent(),
                oMapper.getTypeFactory().constructCollectionType(List.class,
                        oMapper.getTypeFactory().constructCollectionType(List.class, String.class)));
        for (List<String> item: content) {
            Map<String, String> objectMap = new HashMap<>();
            for (int i = 0; i < item.size(); i++) {
                objectMap.put(headers.get(i), item.get(i));
            }
            asJson.add(objectMap);
        }
        return asJson;
    }
}
