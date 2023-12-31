package com.assignment.mgurukul.Registration;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
// import org.springframework.web.bind.annotation.CrossOrigin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "registered")
@Data
@AllArgsConstructor
@NoArgsConstructor
// @CrossOrigin(origins = "*")
public class Register {
    @Id
    private String registerid;
    private String name;
    private String email;
    private String password;
    private long phone;
    private String gender;
    private String referedby;
    private String city;
    private String state;

}
