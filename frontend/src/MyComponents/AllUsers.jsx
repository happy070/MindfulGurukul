import React, { useEffect, useState } from "react";
import { Container, Card, CardBody, Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"; 
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Img from '../img/NoImageFound.jpg';

function AllUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState(""); 
  const [sortedUsers, setSortedUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  
  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedData = await axios.get("http://apis.mindfulassignment.online/registers/findAllNewUser");
      const sortedData = sortUsersByOption(fetchedData.data, sortBy); 
      setUsers(fetchedData.data);
      setSortedUsers(sortedData);
      setLoading(false);
    };
    fetchUsers();
  }, [sortBy]);

  useEffect(() => {
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
    const fetchUsers = async () => {
      const fetchedData = await axios.get("http://apis.mindfulassignment.online/registers/findAllNewUser");
      console.log("fetched data", fetchedData.data);
      setUsers(fetchedData.data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const sortUsersByOption = (data, option) => {
    let sortedData = [...data];
    switch (option) {
      case "A-Z":
        sortedData.sort((a, b) => a.newName.localeCompare(b.newName));
        break;
      case "Z-A":
        sortedData.sort((a, b) => b.newName.localeCompare(a.newName));
        break;
      case "Last modified":
        sortedData.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
        break;
      case "Last inserted":
        sortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      default:
      
        break;
    }
    return sortedData;
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://apis.mindfulassignment.online/registers/deleteUser/${userId}`);
      if (response.data === "Deleted") {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User Deleted Successfully',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
         
          window.location.reload();
        });
      }
      navigate("/dashboard")
      
    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Something went Wrong!!!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  return (
    <Container>
      <div style={{backgroundColor:"#e2e2e2"}}>
         <h2 className="text-left" style={{marginLeft:35}} >Added Users</h2>
      </div>
      <div style={{ maxHeight: '400px', overflowY: 'scroll', marginBottom: 5 }}>
      <ToastContainer></ToastContainer>
        <select style={{ margin: 10, marginLeft: 35 }} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">-- Select Sorting Option --</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Last modified">Last modified</option>
          <option value="Last inserted">Last inserted</option>
        </select>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : sortedUsers.length === 0 ? (
          <div className="text-center">
            <img style={{height:300}} src={Img} alt="No Data Found" />
            <p>No Data Found</p>
          </div>
        ) : (
          <ul>
            {sortedUsers.map((user) => (
              <Card key={user.newUserId} style={{ marginBottom: 10 }}>
                <CardBody>
                  <strong>Name:</strong> {user.newName}<br />
                  <strong>Email:</strong> {user.newEmail}<br />
                  <strong>Phone:</strong> {user.newPhone}<br />
                </CardBody>
                <div>
                  <a href={`/edit/${user.newUserId}`} style={{ textDecoration: 'none', margin: 10 }} className="btn btn-warning" role="button">
                    Edit Details
                  </a>
                  <Button onClick={() => handleDeleteUser(user.newUserId)} color="danger">Delete</Button>
                </div>
              </Card>
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
}

export default AllUsers;
