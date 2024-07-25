
package com.medihelp.medihelp.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {
    @GetMapping("login")
    @ResponseBody
    public String loginGreeting(){
        return "<html>" +
                "<body>" +
                "<form method='POST' action=/'login'>" +
                "input type='text' name='username' placeholder='Username'/>" +
                "input type='password' name='password' placeholder='password'/>" +
                "input type='submit' value='Login'>" +
                "</form>" +
                "</body>" +
                "</html>";
    }
    @PostMapping("/login")
    @ResponseBody
    public String handleLogin(@RequestParam String username, @RequestParam String password) {
        if (authenticate(username,password)) {
            return "Login successful.";
        } else {
            return "Login failed. Try again";
        }
    }
    private boolean authenticate(String username, String password) {
        return "admin".equals(username) && "password".equals(password);
    }
}
