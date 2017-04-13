package ru.tatiana.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.tatiana.demo.repository.FileDataRepository;
import ru.tatiana.demo.service.FileDataService;
import ru.tatiana.demo.model.FileData;

import java.util.List;

/**
 * Created by Tatyana on 11.04.2017.
 */
@Component
public class FileDataServiceImpl implements FileDataService {

    @Autowired
    FileDataRepository fileDataRepository;

    @Override
    public List<FileData> getListFiles(Integer offset, Integer pageSize) {
        return fileDataRepository.getListFileData(offset, pageSize);
    }

    @Override
    public FileData getFileDataById(Long id) {
        return fileDataRepository.getFileDataById(id);
    }

    @Override
    public Long saveFileData(Long id, String content, Boolean used, String name) {
        return fileDataRepository.saveFileData(id, content, used, name);
    }

    @Override
    public void deleteFileData(Long id) {
        fileDataRepository.deleteSaveFile(id);
    }
}
