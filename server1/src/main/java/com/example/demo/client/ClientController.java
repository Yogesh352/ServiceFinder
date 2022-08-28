package com.example.demo.client;


import com.example.demo.feature.FeatureService;
import com.example.demo.solution.Solution;
import com.example.demo.solution.SolutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "api/v1/client")
public class ClientController {

    private final ClientService clientService;;

    @Autowired
    public ClientController(ClientService solutionService) {
        this.clientService = solutionService;
    }
    @GetMapping
    public List<Client> getClients() {
        return clientService.getClients();
    }
    @PostMapping("/add")
    Client addClient(@RequestBody Client newClient) {
        return clientService.addClient(newClient);
    }
}