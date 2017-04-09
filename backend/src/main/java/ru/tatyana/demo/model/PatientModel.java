package ru.tatyana.demo.model;

import java.sql.Timestamp;

/**
 * Created by tatiana.gorbunova on 09.04.2017.
 */
public class PatientModel {
    private Long id;
    private String diagnosis;
    private Timestamp birthday;
    private Timestamp datein;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

    public Timestamp getBirthday() {
        return birthday;
    }

    public void setBirthday(Timestamp birthday) {
        this.birthday = birthday;
    }

    public Timestamp getDatein() {
        return datein;
    }

    public void setDatein(Timestamp datein) {
        this.datein = datein;
    }
}
