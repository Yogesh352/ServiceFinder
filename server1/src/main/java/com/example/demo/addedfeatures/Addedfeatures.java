package com.example.demo.addedfeatures;

import com.example.demo.client.Client;
import com.example.demo.client.ClientRepository;
import com.example.demo.solution.Solution;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.lang.reflect.Array;

@Entity
@Table
public class Addedfeatures {
    @Id
    private int sid;



    private String name;
    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "clientID" ,nullable=false)
    @JsonBackReference
    private Client client;

//    @Autowired
//    private ClientRepository clientRepository;

    public Addedfeatures(){

    }

    public Addedfeatures(int sid, String name, Client client) {
        this.sid = sid;
        this.name = name;
        this.client = client;

    }

    public int getSid() {
        return sid;
    }

    public void setSid(int sid) {
        this.sid = sid;
    }

    public String getName (){
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



    public void setClient(Client client){

        this.client = client;
    }

    public Client getClient(){

       return client;
    }


}
