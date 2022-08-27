package com.example.demo.feature;

import com.example.demo.solution.Solution;

import javax.persistence.*;

@Entity
@Table
public class Feature {

    @Id
    private int fid;
    private String name;
    private String description;

    @ManyToOne
    @JoinColumn(name = "sid", nullable = false)
    private Solution solution;

    public Feature() {
    }

    public Feature(int fid, String name, String description) {
        this.fid = fid;
        this.name = name;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
