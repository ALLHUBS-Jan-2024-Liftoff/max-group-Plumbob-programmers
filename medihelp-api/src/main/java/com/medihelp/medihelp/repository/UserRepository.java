package com.medihelp.medihelp.repository;

import com.medihelp.medihelp.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
