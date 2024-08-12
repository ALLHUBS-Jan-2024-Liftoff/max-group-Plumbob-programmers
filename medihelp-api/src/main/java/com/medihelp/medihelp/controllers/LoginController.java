
package com.medihelp.medihelp.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@Controller
public class LoginController {
    @GetMapping("login")
    @ResponseBody
    public String loginGreeting(){
        return "Welcome back! Please enter your details.";
    }
    @PostMapping("/login") //authentication bones
    @ResponseBody
    public String handleLogin(@RequestBody LoginRequest loginRequest) {
        if (authenticate(loginRequest.getUsername(), loginRequest.getPassword())) {
            return "Login successful.";
        } else {
            return "Login failed. Try again";
        }
    }

    public static class LoginRequest {
        private String username;
        private String password;

        // Getters and setters
        public String getUsername() { return username; }
        public void setUsername(String username) { this.username = username; }

        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }
    private boolean authenticate(String username, String password) {
        //put in authentication logic
        return "admin".equals(username) && "password".equals(password);
    }
}
