package com.example.demo.addedfeatures;

import ch.qos.logback.core.encoder.EchoEncoder;
import com.example.demo.client.Client;
import com.example.demo.client.ClientController;
import com.example.demo.client.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(path = "api/v1/addedfeatures")
public class AddedfeaturesController {
    private final AddedfeaturesService addedfeaturesService;

    private final ClientRepository clientRepository;
    private final AddedfeaturesRepository addedfeaturesRepository;
    @Autowired
    public AddedfeaturesController(AddedfeaturesService addedfeaturesService, AddedfeaturesRepository addedfeaturesRepository, ClientRepository clientRepository){
        this.addedfeaturesService = addedfeaturesService;
        this.addedfeaturesRepository = addedfeaturesRepository;
        this.clientRepository = clientRepository;
    }
    @GetMapping
    public List<Addedfeatures> getAddedFeatures(){
        return addedfeaturesService.getAddedfeatures();
    }


    @PostMapping("/add")
    @CrossOrigin
    public ResponseEntity<Addedfeatures> addAddedfeatures(@RequestBody Addedfeatures newAddedfeature) {
        try {
            Client client = clientRepository.findById(newAddedfeature.getClient().getClientID()).orElseThrow(() -> new IllegalArgumentException());
            newAddedfeature.setClient(client);
            Addedfeatures savedAddedfeature =  addedfeaturesRepository.save(new Addedfeatures(newAddedfeature.getSid(), newAddedfeature.getName(),client));
            return new ResponseEntity<>(savedAddedfeature, HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
