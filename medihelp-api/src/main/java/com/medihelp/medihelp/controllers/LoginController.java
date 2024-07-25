package com.medihelp.medihelp.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class LoginController {
    @GetMapping("login")
    @ResponseBody
    public String loginGreeting(){
        return "<html>" +
                "<body>" +
                "<form>" +
                "input type='text' name='username'>" +
                "input type='text' password='password'>" +
                "input type='submit' value='Login'>" +
                "</form>" +
                "</body>" +
                "</html>";
    }
}

