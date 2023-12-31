import React, { useState } from "react";
import Img from '../img/signup.jpg';
import { Card, CardBody, Form, FormGroup, Row, Col, Container, Input, Button, DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown } from 'reactstrap';
import Autosuggest from './AutoSuggestTextbox';
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedCity, setSelectedCity] = useState(''); 
    const [selectedState, setSelectedState] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const options = [
        { label: 'LinkedIn', value: 'LinkedIn' },
        { label: 'Friends', value: 'Friends' },
        { label: 'Job Portal', value: 'Job Portal' },
        { label: 'Others', value: 'Others' },
    ];

    const handleCheckboxChange = (value) => {
        setSelectedOption(value);
    };
    const handleCitySelect = (city) => {
        setSelectedCity(city);
    };
    const handleStateChange = (selectedState) => {
        console.log('Selected State:', selectedState);
        setSelectedState(selectedState);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            phone: e.target.phone.value,
            referedby: selectedOption,
            city: selectedCity,
            state: selectedState,
            gender: selectedGender,
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
           
            const response = await Axios.post('http://apis.mindfulassignment.online/registers/user', formData);

           
            console.log(response.data);
            if (response.data === "Done") {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Welcome Registered Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate("/login")
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please check your internet connection!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } catch (error) {
            
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Oops...',
                text: 'Please check your internet connection!',
                showConfirmButton: false,
                timer: 1500
            })
        }
    };
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Card>
                <CardBody style={{ marginTop: -15 }}>
                    <Row>
                        <Col md={4}>
                            <img className="img-fluid" style={{ width: 600, height: 400, marginLeft: 100, marginTop: 50 }} src={Img} alt="not found" />
                        </Col>
                        <Col md={8} style={{ width: 550, marginLeft: 150 }}>
                            <div style={{ margin: 10, border: "1px solid #ccc", padding: "10px", borderRadius: 50 }}>
                                <Form onSubmit={handleSubmit} style={{ margin: 10 }}>
                                    <h5 className="text-center">Signup</h5>
                                    <FormGroup>
                                        <label for="name">Name</label>
                                        <Input type="text" placeholder="Enter Your Name" id="name" name="name" style={{ borderColor: "grey" }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label for="email">Email</label>
                                        <Input type="email" placeholder="Enter Your Email" id="email" name="email" style={{ borderColor: "grey" }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label for="password">password</label>
                                        <Input type="password" placeholder="Enter Your password" id="password" name="password" style={{ borderColor: "grey" }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label for="phone">Phone</label>
                                        <Input type="number" placeholder="Enter Your Phone" id="phone" name="phone" style={{ borderColor: "grey" }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label>Gender</label><br />
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                checked={selectedGender === 'male'}
                                                onChange={() => setSelectedGender('male')}
                                            />{' '}
                                            Male
                                        </label>&nbsp;&nbsp;
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                checked={selectedGender === 'female'}
                                                onChange={() => setSelectedGender('female')}
                                            />{' '}
                                            Female
                                        </label>&nbsp;&nbsp;
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="others"
                                                checked={selectedGender === 'others'}
                                                onChange={() => setSelectedGender('others')}
                                            />{' '}
                                            Others
                                        </label>
                                    </FormGroup>
                                    <FormGroup>
                                        <label>Where did you here about us?</label><br></br>
                                        {options.map((option) => (
                                            <label key={option.value}>&nbsp;&nbsp;
                                                <input
                                                    type="checkbox"
                                                    name="referedby"
                                                    value={option.value}
                                                    checked={selectedOption === option.value}
                                                    onChange={() => handleCheckboxChange(option.value)}
                                                />&nbsp;
                                                {option.label}
                                            </label>
                                        ))}
                                    </FormGroup>
                                    <FormGroup>
                                        <UncontrolledDropdown>
                                            <DropdownToggle caret color="dark">
                                                {selectedCity || 'City'} 
                                            </DropdownToggle>
                                            <DropdownMenu dark>
                                                <DropdownItem divider />
                                                <DropdownItem onClick={() => handleCitySelect('Mumbai')}>Mumbai</DropdownItem>
                                                <DropdownItem onClick={() => handleCitySelect('Pune')}>Pune</DropdownItem>
                                                <DropdownItem onClick={() => handleCitySelect('Ahmedabad')}>Ahmedabad</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </FormGroup>
                                    <FormGroup style={{ display: 'flex', alignItems: 'center' }}>
                                        <label style={{ marginRight: '10px', marginBottom: 18 }}>State:</label>
                                        <Autosuggest onStateChange={handleStateChange} />
                                    </FormGroup>
                                    <Container style={{ marginTop: -10 }} className="text-center">
                                        <Button type="submit" className="btn btn-success">SignUp</Button>
                                        <Button type="reset" className="btn btn-warning" style={{ margin: 10 }}>Clear</Button>
                                    </Container>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}
export default Signup;
