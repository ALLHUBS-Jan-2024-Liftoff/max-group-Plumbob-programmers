package com.medihelp.medihelp.controller;
import com.medihelp.medihelp.model.LoginDTO;
import com.medihelp.medihelp.model.User;
import jakarta.validation.Valid;
import com.medihelp.medihelp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody @Valid User user, Errors errors) {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body("Validation errors occurred: " + errors.getAllErrors().toString());
        }

        String token = userService.registerUser(user.getUsername(), user.getPassword(), user.getEmail());
        return ResponseEntity.ok(token);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO login) {
        String token = userService.loginUser(login.getUsername(), login.getPassword());
        return ResponseEntity.ok(token);
    }
}
