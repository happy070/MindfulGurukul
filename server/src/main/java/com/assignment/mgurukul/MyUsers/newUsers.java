package com.assignment.mgurukul.MyUsers;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
// import org.springframework.web.bind.annotation.CrossOrigin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "AddedUsers")
@Data
@AllArgsConstructor
@NoArgsConstructor
// @CrossOrigin(origins = "*")
public class newUsers {
    @Id
    private String newUserId;
    private String newName;
    private String newEmail;
    private long newPhone;
}
