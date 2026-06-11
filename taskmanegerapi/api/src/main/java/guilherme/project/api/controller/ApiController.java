package guilherme.project.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tools.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ApiController {
    private List<String> tasks = new ArrayList<>();
    private ObjectMapper objectMapper;

    public ApiController(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }
    @GetMapping(path = "/task")
    public ResponseEntity<String> showtasks(){
        return ResponseEntity.ok(objectMapper.writeValueAsString(tasks));
    }
    @PostMapping(path = "/task")
    public ResponseEntity<Void> createtask(@RequestBody String task){
        tasks.add(task);
        return  ResponseEntity.ok().build();
    }
    @DeleteMapping(path ="/task")
    public ResponseEntity<Void> deletetasks(){
        tasks = new ArrayList<>();
        return  ResponseEntity.ok().build();
    }
}
