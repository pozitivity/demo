package ru.tatiana.demo.model;

/**
 * Created by Tatyana on 24.05.2017.
 */
public class District {
    Long id;
    String name;

    public District() {}

    public District(Long id, String name) {
        this.id = id;
        this.name = name;
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
}
