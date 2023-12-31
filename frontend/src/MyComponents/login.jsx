import React from "react";
import Img from '../img/key_2170153.png';
import Img2 from '../img/login_95461.png';
import { Form, FormGroup, Container, Button, Input, Card, CardBody } from 'reactstrap';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
function Login() {
  
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const queryParams = {
          email: e.target.email.value,
          password: e.target.password.value,
        };
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
        try {
          const response = await Axios.get('http://apis.mindfulassignment.online/registers/findUser', {
            params: queryParams,
          });
      
          if (response.data === "Done") {
           
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Logged in Successfully',
              showConfirmButton: false,
              timer: 1500
            })
            navigate('/dashboard'); 
          } else {
           
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
      
    return (
        <div style={{marginLeft:450,marginTop:20}}>
          <ToastContainer></ToastContainer>
            <Container>
                <Card style={{width:400,borderRadius:20,height:450,border:"1px solid #ccc"}}>
                    <CardBody>
                        <div className="text-center">
                            <img className="img-fluid" src={Img} alt="content not found" style={{height:100}} /><br></br>
                        </div>
                        <div className="text-center">
                        <img className="img-fluid" src={Img2} alt="content not found" style={{height:100,marginBottom:-20}} />
                        </div>
                        <Form onSubmit={handleLogin}>
                            <FormGroup>
                                <label> Email </label>
                                <Input type="email" placeholder="Enter Your Email" id="email" style={{ borderColor: "grey" }} />
                            </FormGroup>
                            <FormGroup>
                                <label> Password </label>
                                <Input type="password" placeholder="Enter Your password" id="password" style={{ borderColor: "grey" }} />
                            </FormGroup>
                            <Container>
                                <Button type="submit" color="primary" >Login</Button>
                            </Container>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}; 
export default Login;