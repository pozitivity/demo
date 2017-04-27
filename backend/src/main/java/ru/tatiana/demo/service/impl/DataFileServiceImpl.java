package ru.tatiana.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.tatiana.demo.model.DataFile;
import ru.tatiana.demo.repository.FileDataRepository;
import ru.tatiana.demo.service.DataFileService;

import java.util.List;

/**
 * Created by Tatyana on 11.04.2017.
 */
@Component
public class DataFileServiceImpl implements DataFileService {

    @Autowired
    private FileDataRepository fileDataRepository;

    @Override
    public List<DataFile> getListDataFiles(Integer offset, Integer pageSize) {
        return fileDataRepository.getListFileData(offset, pageSize);
    }

    @Override
    public DataFile getDataFileById(Long id) {
        return fileDataRepository.getFileDataById(id);
    }

    @Override
    public Long saveDataFile(Long id, String content, Boolean used, String name, Long size) {
        return fileDataRepository.saveFileData(id, content, used, name, size);
    }

    @Override
    public void deleteDataFile(Long id) {
        fileDataRepository.deleteSaveFile(id);
    }

//    @Override
//    public void parseFile(MultipartFile file) {
//        DataFile dataFile = new DataFile();
//        dataFile.setName(file.getOriginalFilename());
//
//        switch(getExtension(file.getOriginalFilename()).toUpperCase()) {
//            case Parser.CSV:
//                parser = new ParserCSV();
//                parser.getContent(file);
//                break;
//            case Parser.XLS:
//                parser = new ParserXLS();
//                parser.getContent(file);
//                break;
//            case Parser.XLSX:
//                parser = new ParserXLSX();
//                parser.getContent(file);
//                break;
//            default: break;
//        }
//    }

}
