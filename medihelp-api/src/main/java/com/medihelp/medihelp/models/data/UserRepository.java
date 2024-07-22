package com.medihelp.medihelp.models.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.medihelp.medihelp.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

}
