package ru.tatiana.demo.model;

/**
 * Created by Tatyana on 01.04.2016.
 */
public class Bubble {
    private Long id;
    private String name;
    private Long size;

    public Bubble() {}

    public Bubble(Long id, String name, Long size) {
        this.id = id;
        this.name = name;
        this.size = size;
    }

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

    public Long getSize() {
        return size;
    }

    public void setSize(Long size) {
        this.size = size;
    }
}
