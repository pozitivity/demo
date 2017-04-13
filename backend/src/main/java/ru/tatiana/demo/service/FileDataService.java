package ru.tatiana.demo.service;

import ru.tatiana.demo.model.FileData;

import java.util.List;

/**
 * Created by Tatyana on 11.04.2017.
 */
public interface FileDataService {
    List<FileData> getListFiles(Integer offset, Integer pageSize);
    FileData getFileDataById(Long id);
    Long saveFileData(Long id, String content, Boolean used, String name);
    void deleteFileData(Long id);
}
