package com.medihelp.medihelp.models.data;

import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer>{
    User findByUsername(String username);
}
