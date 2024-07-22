package com.medihelp.medihelp.entity;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
public class User extends AbstractEntity {

    @NotBlank(message = "Name is required")
    @Size(min = 5, max = 16, message = "Username must be between 5 and 16 characters long")
    private String username;

    @NotBlank
    @Size(min = 8, max = 32, message = "Password must be between 8 and 32 characters long")
    private String password;

    public User(String username, String password){
        this.username = username;
        this.password = password;
    }

    public User(){};

    public @NotBlank(message = "Name is required") @Size(min = 5, max = 16, message = "Username must be between 5 and 16 characters long") String getUsername() {
        return username;
    }

    public void setUsername(@NotBlank(message = "Name is required") @Size(min = 5, max = 16, message = "Username must be between 5 and 16 characters long") String username) {
        this.username = username;
    }

    public @NotBlank @Size(min = 8, max = 32, message = "Password must be between 8 and 32 characters long") String getPassword() {
        return password;
    }

    public void setPassword(@NotBlank @Size(min = 8, max = 32, message = "Password must be between 8 and 32 characters long") String password) {
        this.password = password;
    }
}
