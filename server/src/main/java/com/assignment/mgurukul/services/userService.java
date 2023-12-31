package com.assignment.mgurukul.services;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.mgurukul.MyUsers.newUsers;
import com.assignment.mgurukul.Registration.Register;
import com.assignment.mgurukul.repository.newUserRepository;
import com.assignment.mgurukul.repository.userRepository;

@Service
public class userService {

  @Autowired
  private userRepository repo;

  @Autowired
  private newUserRepository userRepo;

  // AddUser
  public String addUser(Register register) {
    register.setRegisterid(UUID.randomUUID().toString().split("-")[0]);
    Register R = repo.save(register);
    if (R != null) {
      return "Done";
    } else {
      return "NotDone";
    }
  }

  // find user by email and password
  public String findByEmailAndPassword(String email, String password) {
    Register user = repo.findByEmailAndPassword(email, password);
    System.out.println(user);
    if (user != null) {
      return "Done";
    } else {
      return "NotDone";
    }
  }

  // getting all user
  public List<Register> findAllRegister() {
    List<Register> users = repo.findAll();
    // Print the list of users to the console
    for (Register user : users) {
      System.out.println("User ID: " + user.getRegisterid());
      System.out.println("Name: " + user.getName());
      System.out.println("Email: " + user.getEmail());
      System.out.println("Phone: " + user.getPhone());

    }
    return users;
  }

  // saving new users into the database
  public String newUser(newUsers user) {
    user.setNewUserId(UUID.randomUUID().toString().split("-")[0]);
    newUsers U = userRepo.save(user);
    System.out.println(U);
    if (U != null) {
      return "Done";
    } else {
      return "NotDone";
    }
  }

  public List<newUsers> findAllNewUser() {
    List<newUsers> users = userRepo.findAll();
    // Print the list of users to the console
    for (newUsers user : users) {
      System.out.println("User ID: " + user.getNewUserId());
      System.out.println("Name: " + user.getNewName());
      System.out.println("Email: " + user.getNewEmail());
      System.out.println("Phone: " + user.getNewPhone());
    }
    return users;
  }

  // Edit an existing user by userId
  public String editUser(String userId, newUsers editedUser) {
    newUsers existingUser = userRepo.findById(userId).orElse(null);

    if (existingUser != null) {
      existingUser.setNewName(editedUser.getNewName());
      existingUser.setNewEmail(editedUser.getNewEmail());
      existingUser.setNewPhone(editedUser.getNewPhone());

      // Save the updated user to the database
      newUsers updatedUser = userRepo.save(existingUser);

      if (updatedUser != null) {
        return "Done";
      } else {
        return "NotDone";
      }
    } else {
      return "UserNotFound";
    }
  }

  // deleteAddedUser
  public String deleteAddedUser(String newUser) {
    userRepo.deleteById(newUser);
    return "Deleted";
  }
}
