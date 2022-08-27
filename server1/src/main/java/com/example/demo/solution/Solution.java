package com.example.demo.solution;

import com.example.demo.feature.Feature;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Solution {

    @Id
    private int sid;
    private String title;

    @OneToMany(mappedBy = "solution")
    private List<Feature> feature;

    public Solution() {

    }
    public Solution(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Feature> getFeature() {
        return feature;
    }

    @Override
    public String toString() {
        return "Solution{" +
                "sid=" + sid +
                ", title='" + title + '\'' +
                '}';
    }
}
