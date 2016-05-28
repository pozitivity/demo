package ru.tatyana.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "patient")
public class Patient {
    private static final String SEQUENCE = "patient_seq";

    private Long id;
    private Timestamp birthday;
    private Timestamp datein;
    private Diagnosis diagnosis;
    private Long diagnosisId;

    @Id
    @SequenceGenerator(initialValue = 1, allocationSize = 1, name = SEQUENCE, sequenceName = SEQUENCE)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = SEQUENCE)
    @Column(columnDefinition = "bigserial", nullable = false)
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    @Column(nullable = false, name = "date_birthday")
    public Timestamp getBirthday() { return birthday; }

    public void setBirthday(Timestamp birthday) { this.birthday = birthday; }

    @Column(nullable = false, name = "date_in")
    public Timestamp getDatein() { return datein; }

    public void setDatein(Timestamp datein) { this.datein = datein; }

    @JsonIgnore
    @ManyToOne(optional = true, fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @JoinColumn(name = "diagnosis_id", columnDefinition = "bigint", updatable = false, insertable = false)
    public Diagnosis getDiagnosis() { return diagnosis; }

    public void setDiagnosis(Diagnosis diagnosis) { this.diagnosis = diagnosis; }

    @Column(nullable = false, name = "diagnosis_id", columnDefinition = "bigint")
    public Long getDiagnosisId() { return diagnosisId; }

    public void setDiagnosisId(Long diagnosisId) { this.diagnosisId = diagnosisId; }

}
