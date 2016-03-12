package ru.tatyana.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.domain.Persistable;

import javax.persistence.*;
/**
 * Created by Tatyana on 12.03.2016.
 */
@Entity
@Table(name = "diagnosis")
public class Diagnosis {
    private static final String SEQUENCE = "diagnosis_seq";

    private Long id;
    private String code;
    private String name;

    @Id
    @SequenceGenerator(initialValue = 1, allocationSize = 1, name = SEQUENCE, sequenceName = SEQUENCE)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = SEQUENCE)
    @Column(columnDefinition = "bigserial", nullable = false)
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    @Column(unique = true, nullable = false)
    public String getCode() { return code; }

    public void setCode(String code) { this.code = code; }

    @Column(nullable = false, columnDefinition = "text")
    public String getName() { return name; }

    public void setName(String name) { this.name = name; }
}
