import React, { useState } from "react";
import { Card, CardBody, Container, FormGroup, Input, Button } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Swal from "sweetalert2";
function EditUser() {
  
  const navigate = useNavigate();
  const { userId } = useParams(); 
  const [user, setUser] = useState({
    newName: "",
    newPhone: "",
    newEmail: "",
  });
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
 
  const handleUserUpdate = async () => {
    try {
     
      const response =  await axios.put(`http://apis.mindfulassignment.online/registers/editUser/${userId}`, user);
     
      if(response.data === "Done"){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Welcome Registered Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          navigate("/dashboard");          
      }
    } catch (error) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something please try again!!!',
            showConfirmButton: false,
            timer: 1500
          })
    }
  };
  return (
    <div>
      <ToastContainer />
      <Container>
        <Card>
          <CardBody>
            <h3>Edit User Details</h3>
            <FormGroup>
              <label htmlFor="userName">UserName</label>
              <Input
                type="text"
                placeholder="Enter here"
                id="userName"
                name="userName"
                style={{ borderColor: "grey" }}
                value={user.newNamw}
                onChange={(e) => setUser({ ...user, newName: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="userPhone">User Phone</label>
              <Input
                type="phone"
                placeholder="Enter here"
                id="userPhone"
                style={{ borderColor: "grey" }}
                value={user.newPhone.toString()}
                onChange={(e) => setUser({ ...user, newPhone:parseInt(e.target.value) })}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="userEmail">User Email</label>
              <Input
                type="email"
                placeholder="Enter here"
                id="userEmail"
                style={{ borderColor: "grey" }}
                value={user.newEmail}
                onChange={(e) => setUser({ ...user, newEmail: e.target.value })}
              />
            </FormGroup>
            <div>
              <Button style={{ margin: 10 }} color='success' onClick={handleUserUpdate}>
                Save
              </Button>
              <Button type="reset" className="btn btn-secondary" style={{ margin: 10 }}>Clear</Button>
            </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default EditUser;