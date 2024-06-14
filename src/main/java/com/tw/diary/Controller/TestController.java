package com.tw.diary.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("api/test")
    public String test() {
        return "안녕하세요";
    }
}
