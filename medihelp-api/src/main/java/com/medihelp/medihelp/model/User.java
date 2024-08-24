package com.medihelp.medihelp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@Entity
public class User extends AbstractEntity {

    @NotBlank(message = "Name is required")
    @Size(min = 5, max = 16, message = "Username must be between 5 and 16 characters long")
    private String username;

    @NotBlank
    @Size(min = 8, message = "Password must be between 8 and 32 characters long")
    private String password;

    @Email(message = "Email should be valid")
    private String email;

    // Default constructor
    public User() {}

    // Parameterized constructor
    public User(String username, String password, String email) {
        this.username = username;
        this.password = password; // Store plain password here
        this.email = email;
    }

    // Getter and Setter for username
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    // Getter and Setter for password
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password; // Store plain password here
    }

    // Getter and Setter for email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}



