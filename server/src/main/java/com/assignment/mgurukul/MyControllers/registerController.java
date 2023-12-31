package com.assignment.mgurukul.MyControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.mgurukul.MyUsers.newUsers;
import com.assignment.mgurukul.Registration.Register;
import com.assignment.mgurukul.services.userService;

@RestController
@RequestMapping("/registers")
public class registerController {
  @Autowired
  public userService services;

  @PostMapping("/user")
  @ResponseStatus(HttpStatus.CREATED)
  public String createUser(@RequestBody Register register) {
    return services.addUser(register);
  }

  // @DeleteMapping("/{registerid}")
  // public String deleteUser(@PathVariable String registerid) {
  //   return services.deleteUser(registerid);
  // }

  @GetMapping("/findUser")
  public String findUserByEmailAndPassword(@RequestParam String email, @RequestParam String password) {
    return services.findByEmailAndPassword(email, password);
  }

  @GetMapping("/findAll")
  public List<Register> getUsers() {
    return services.findAllRegister();
  }
  @GetMapping("/findAllNewUser")
  public List<newUsers> findAllNewUsers(){
    return services.findAllNewUser();
  }
  @PostMapping("/newUser")
  @ResponseStatus(HttpStatus.CREATED)
  public String createNewUser(@RequestBody newUsers user) {
    return services.newUser(user);
  }
  @PutMapping("/editUser/{userId}")
  public String editUser(@PathVariable String userId, @RequestBody newUsers editedUser) {
    return services.editUser(userId, editedUser);
  }
  @DeleteMapping("deleteUser/{newUserId}")
  public String deleteAddedUser(@PathVariable String newUserId) {
    return services.deleteAddedUser(newUserId);
  }

}
