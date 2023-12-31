package com.assignment.mgurukul.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.assignment.mgurukul.MyUsers.newUsers;

public interface newUserRepository extends MongoRepository<newUsers,String> {
    
}
