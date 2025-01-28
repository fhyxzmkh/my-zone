package com.backend.controller.user;

import com.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/check")
    public String check() {
        return "ok";
    }

    @PostMapping("/user/login")
    public Map<String, String> login(@RequestParam Map<String, String> data) {
        return userService.login(data.get("username"), data.get("password"));
    }

    @PostMapping("/user/register")
    public Map<String, String> register(@RequestParam Map<String, String> data) {
        return userService.register(data.get("username"), data.get("password"), data.get("confirm"));
    }

}
