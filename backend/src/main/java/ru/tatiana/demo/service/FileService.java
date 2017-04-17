package ru.tatiana.demo.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;

/**
 * Created by tatiana.gorbunova on 16.04.2017.
 */
public interface FileService {

    String getExtension(String fullName);

    String getName(String fullName);

    File saveTempFile(MultipartFile file);

    ArrayList<String> getHeaders(MultipartFile file);
}
