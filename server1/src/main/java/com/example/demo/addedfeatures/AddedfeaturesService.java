package com.example.demo.addedfeatures;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Component
@CrossOrigin
public class AddedfeaturesService {
    private final AddedfeaturesRepository addedfeaturesRepository;

    @Autowired
    public AddedfeaturesService(AddedfeaturesRepository addedfeaturesRepository){
        this.addedfeaturesRepository = addedfeaturesRepository;
    }

    public List<Addedfeatures> getAddedfeatures(){
        return addedfeaturesRepository.findAll();
    }
}
