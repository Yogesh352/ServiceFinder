package com.example.demo.client;

import com.example.demo.solution.Solution;
import com.example.demo.solution.SolutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Component
@CrossOrigin
public class ClientService {

    private final ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @GetMapping
    public List<Client> getClients() {
//        Solution test = new Solution("Data Management");
//        test.addFeature("Make Purchases", "Allow users to make transactions");
//        test.addFeature("Manage Finance", "Personalized insights");
        return clientRepository.findAll();
    }

    @PostMapping("/add")
    Client addClient(@RequestBody Client newClient) {
        return clientRepository.save(newClient);
    }


}
