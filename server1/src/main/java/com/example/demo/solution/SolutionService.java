package com.example.demo.solution;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Component
public class SolutionService {

    private final SolutionRepository solutionRepository;

    @Autowired
    public SolutionService(SolutionRepository solutionRepository) {
        this.solutionRepository = solutionRepository;
    }

    @GetMapping
    public List<Solution> getSolutions() {
//        Solution test = new Solution("Data Management");
//        test.addFeature("Make Purchases", "Allow users to make transactions");
//        test.addFeature("Manage Finance", "Personalized insights");
        return solutionRepository.findAll();
    }

}
