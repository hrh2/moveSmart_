import React, { useState } from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import Axios from 'axios';
import '../style.css'
import{TbLanguage}from 'react-icons/tb'

const Login = () => {
     const [data, setData] = useState({
          email: '',
          password: '',
     });

     const [error, setError] = useState('');

     const handleChange = (event) => {
          const { name, value } = event.target;
          setData((prevData) => ({ ...prevData, [name]: value }));
     };

     const handleSubmit = async (event) => {
          event.preventDefault(); // prevent the default form submission behavior

          try {
               const response = await Axios.post('http://localhost:3005/api/login', data);
               const token = response.data.token;
               localStorage.setItem('token', token);
               // console.log(token);
               Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
               window.location = "/";
          } catch (error) {
               console.error(error);
               if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    setError(error.response.data.message);
               } else {
                    setError('An unexpected error occurred. Please try again later.');
               }
          }
     };

     return (

          <div className="container-fluid  vh-100 w-100 ">
               <div className='row h-100'>
               <div className="col rightdiv">
                    <div class="btn-group position-absolute top-0 start-0">
                         <button type="button" class="btn  dropdown-toggle btn1" data-bs-toggle="dropdown" aria-expanded="false">
                              <TbLanguage size='1.2em' className="lang" />
                         </button>
                         <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="hrh">English(US)</a></li>
                              <li><a class="dropdown-item" href="hrh">English(UK)</a></li>
                              <li><a class="dropdown-item" href="hrh">French</a></li>
                              <li><a class="dropdown-item" href="hrh">Latin</a></li>
                         </ul>
                    </div>
                    <div className="p-5 text-center">
                         <h1 className="text-center mb-4 fw-bold">Login</h1>
                         <Form onSubmit={handleSubmit} className="justify-content-center container bg-white py-4 rounded-5">
                              
                              <Form.Group controlId="formBasicEmail">
                                   <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        value={data.email}
                                        className="border-0 border-bottom rounded-0 no-outline p-4"
                                        onChange={handleChange}
                                        required />
                              </Form.Group>

                              <Form.Group controlId="formBasicPassword">
                                   <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={data.password}
                                        onChange={handleChange}
                                        className="border-0 border-bottom rounded-0 no-outline p-4"
                                        required />

                              </Form.Group>
                              <div className='row justify-content-center'>
                                   <Button variant="primary" type="submit" className="w-50 mt-4">
                                        Login
                                   </Button>
                              </div>

                         </Form>

                         {/* <button type="button" class="btn btn-outline-secondary btn-sm mt-2 mx-auto">continue with <FcGoogle /></button> */}

                         <p>New to MoveSmart  <a href="/signup" class="link-info">Sign up</a></p>
                    </div>
               </div>
                    {error && <Alert variant="danger">{error}</Alert>}
               <div className="col-sm-7 bg-danger rounded-end rounded-5 leftdiv2">
               </div>
               </div>
          </div>         
     );
};

export default Login;

