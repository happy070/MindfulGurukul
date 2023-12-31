import React from "react";
import { CardTitle,Card,CardBody,Button } from "reactstrap";

const Home = () => {
    return (
        <div style={{margin:20, textAlign:"center" }}>
           <Card style={{ backgroundColor: "#e2e2e2", height:300 }}>
            <CardTitle style={{marginTop:10}}>
                <h4>Welcome to AddUsers App</h4>
            </CardTitle>
            <CardBody>
                <Button href="/login" style={{margin:10}}  color="primary" >Login</Button>
                <Button href="/signup" color="secondary" >SignUp</Button>
            </CardBody>
           </Card>
        </div>
    )
}
export default Home;
