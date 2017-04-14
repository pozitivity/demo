package ru.tatiana.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import ru.tatiana.demo.repository.FileDataRepository;
import ru.tatiana.demo.service.FileDataService;
import ru.tatiana.demo.model.FileData;
import ru.tatiana.demo.util.convertData.ParseFile;

import java.io.IOException;
import java.util.List;

/**
 * Created by Tatyana on 11.04.2017.
 */
@Component
public class FileDataServiceImpl implements FileDataService {

    @Autowired
    FileDataRepository fileDataRepository;

    @Autowired
    ParseFile parseFile;

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

    @Override
    public void parseFile(MultipartFile file) {
        FileData fileData = new FileData();
        fileData.setName(file.getName());
        try {
            parseFile.getContent(file.getInputStream());
        } catch(IOException e) {
            throw new RuntimeException(e);
        }
    }
}
