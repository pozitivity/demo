package ru.tatiana.demo.model;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by Tatyana on 11.04.2017.
 */
public class DataFile {

    private Long id;
    private String name;
    private String content;
    private Boolean used;
    private Timestamp create;
    private Long size;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Boolean getUsed() {
        return used;
    }

    public void setUsed(Boolean used) {
        this.used = used;
    }

    public Timestamp getCreate() {
        return create;
    }

    public void setCreate(Timestamp create) {
        this.create = create;
    }

    public Long getSize() {
        return size;
    }

    public void setSize(Long size) {
        this.size = size;
    }
}
