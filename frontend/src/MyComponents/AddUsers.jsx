import React, { useState } from "react";
import { Form, FormGroup, Input, Button, Container } from "reactstrap";
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddUser = () => {
  const navigate = useNavigate();  

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleUserSubmit = async (e) => {
    e.preventDefault();
     if (!navigator.onLine) {
      toast.error("Please enable Wi-Fi or Mobile Data", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    const formData = {
      newName: newName,
      newEmail: newEmail,
      newPhone: newPhone,
    };
    try {
      
      const response = await Axios.post("http://apis.mindfulassignment.online/registers/newUser", formData);
      console.log(response.data);
      if(response.data === "Done"){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'User Added Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          navigate("/dashboard");
      }
      else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something Went Wrong!!! Try Again.',
            showConfirmButton: false,
            timer: 1500
          })
      }
    } catch (error) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something Went Wrong!!! Try Again.',
            showConfirmButton: false,
            timer: 1500
          })
    }
  };
  const handleCancelClick = () => {
    navigate("/dashboard");
  };
  return (
    <div style={{ margin: 10, border: "1px solid #ccc", padding: "10px", borderRadius: 50, width: 600, marginLeft: 400 }}>
      <ToastContainer />
      <Form style={{ margin: 10 }} onSubmit={handleUserSubmit}>
        <h5 className="text-center">Add User</h5>
        <FormGroup>
          <label htmlFor="userName">UserName</label>
          <Input
            type="text"
            placeholder="Enter here"
            id="userName"
            name="userName"
            style={{ borderColor: "grey" }}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="userPhone">User Phone</label>
          <Input
            type="phone"
            placeholder="Enter here"
            id="userPhone"
            style={{ borderColor: "grey" }}
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="userEmail">User Email</label>
          <Input
            type="email"
            placeholder="Enter here"
            id="userEmail"
            style={{ borderColor: "grey" }}
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </FormGroup>
        <Container className="text-center">
          <Button className="btn btn-success" type="submit">
            SAVE
          </Button>
          <Button className="btn btn-warning" style={{ margin: 5 }} onClick={handleCancelClick}>
            CANCEL
          </Button>
        </Container>
      </Form>
    </div>
  );
};

export default AddUser;
