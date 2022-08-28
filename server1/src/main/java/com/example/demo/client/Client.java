package com.example.demo.client;

import com.example.demo.addedfeatures.Addedfeatures;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Client {

    @Id
    private int clientID;
    private String name;
    private String industry;

    @OneToMany(
            mappedBy = "client", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Addedfeatures> addedfeatures;

    @Autowired
    public Client() {
    }

    public Client(int clientID, String name, String industry, List<Addedfeatures> addedFeatures) {
        this.clientID = clientID;
        this.name = name;
        this.industry = industry;
        this.addedfeatures = addedFeatures;
    }

    public void setAddedfeatures(List<Addedfeatures> addedfeatures) {
        this.addedfeatures = addedfeatures;
    }

    public List<Addedfeatures> getAddedfeatures() {
        return addedfeatures;
    }

    public int getClientID() {
        return clientID;
    }

    public void setClientID(int clientID) {
        this.clientID = clientID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry= industry;
    }
//    public String[] getAddedFeatures() {
//        return addedFeatures;
//    }
//
//    public void setAddedFeatures(String[] addedFeatures) {
//        this.addedFeatures= addedFeatures;
//    }
}