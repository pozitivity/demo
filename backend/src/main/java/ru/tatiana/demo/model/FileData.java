package ru.tatiana.demo.model;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by Tatyana on 11.04.2017.
 */
//@Entity
//@Table(name = "file")
public class FileData {

    //private static final String SEQUENCE = "file_seq";

    private Long id;
    private String name;
    private String content;
    private Boolean used;
    private Timestamp create;

    //@Id
    //@SequenceGenerator(initialValue = 1, allocationSize = 1, name = SEQUENCE, sequenceName = SEQUENCE)
    //@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = SEQUENCE)
    //@Column(columnDefinition = "bigserial", nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    //@Column(nullable = false, name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    //@Column(columnDefinition = "text", name = "content")
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    //@Column(nullable = true, name = "used")
    public Boolean getUsed() {
        return used;
    }

    public void setUsed(Boolean used) {
        this.used = used;
    }

    //@Column(nullable = false, name = "create")
    public Timestamp getCreate() {
        return create;
    }

    public void setCreate(Timestamp create) {
        this.create = create;
    }
}
