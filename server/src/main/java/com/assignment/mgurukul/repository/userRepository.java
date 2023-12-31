package com.assignment.mgurukul.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.assignment.mgurukul.Registration.Register;

public interface userRepository extends MongoRepository<Register,String> { 
    Register findByEmailAndPassword(String email,String password);
}
