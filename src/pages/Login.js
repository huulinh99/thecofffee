import React, { useState, useContext } from "react";
import { AuthContext } from "../App";
import firebase from 'firebase'
import { GoogleOutlined } from '@ant-design/icons';
import { Link, Redirect, withRouter } from 'react-router-dom'
import { Button, Col, Row, Typography } from "antd";
import '../stylesheet/Login.css';
import Axios from "axios";

const Login = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {

        e.preventDefault();
        firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(res => {
                        if (res.user) Auth.setLoggedIn(true);
                        history.push('/reports')
                    })
                    .catch(e => {
                        setErrors(e.message);
                    });
            })

    };

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        var role = '';
        firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                firebase
                    .auth()
                    .signInWithPopup(provider)
                    .then(result => {
                        firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
                            Axios.post('https://coffee-shop-api.azurewebsites.net/api/v1/Auth/Google', {
                                token: idToken,
                              })
                              .then(function (response) {                               
                                role = response.data.role;                                                         
                              })
                              .catch(function (error) {
                                console.log(error);
                              });
                        })
                        //Auth.setLoggedIn(true)
                    })
                    .catch(e => setErrors(e.message))
                    if(role === "User"){
                        return <Redirect to="/ViewCard"/>
                    } 
            })

    }
    return (

        <div className="container">
            <div className="header">
                <Link to="/">
                    <span className="title">Capstone Scoring System</span>
                </Link>
                <div className="desc">Project of SWD301</div>
            </div>
            <div className="loginContainer">
                <div style={{ marginTop: '2rem' }}>
                    <Typography.Title style={{ color: '#555', marginBottom: '0' }}>Login</Typography.Title>
                    <p>Sign in to your system</p>
                    <Row>
                        <Col>
                            <Typography.Text strong type="danger">
                                {error}
                            </Typography.Text>
                        </Col>
                    </Row>
                    <Button icon={<GoogleOutlined />} onClick={signInWithGoogle} type="primary">
                        Login with Google
                        </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;