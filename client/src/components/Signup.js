import React,{ useState } from "react";
import { Form, Alert,Image } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { TbLanguage } from "react-icons/tb"
import Axios from "axios";
import 'bootstrap'
import './style.css'

const Signup = () => {
     // const [file, setFile] = useState(null);
     const [data, setData] = useState({
          firstName: '',
          lastName: '',
          email: '',
          phone:null,
          username: '',
          password: '',
          image:null
     });
     const [image,setImage]=useState(null)
    
     const [error, setError] = useState('');
     const handleChange = ({ currentTarget: input }) => {
          setData({ ...data, [input.name]: input.value });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               const response = await Axios.post('http://localhost:3005/api/user', data);
               const token = response.data.token;
               localStorage.setItem('token', token);
               Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
               window.location = "/";
          } catch (error) {
               console.error(error);
               if (
                    error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
               ) {
                    setError(error.response.data.message);
               }
          }
     };


     function convertToBase64(file) {
          let reader = new FileReader();
          reader.readAsDataURL(file.target.files[0]);
          reader.onload = (result) => {
               console.log(reader.result);
               setData({ ...data,image:reader.result});
               setImage(reader.result); 
          }
          reader.onerror = () => { console.log(reader.result); }
     }


     const handleReset = () => {
          setData({
               firstName: '',
               lastName: '',
               email: '',
               phone: null,
               username: '',
               password: '',
               image: null
          });
          setImage(null)
     };


     


     return (
        <div className="container-fluid row">
               <div className="col-sm-7 bg-danger rounded-start rounded-5 leftdiv1">
               
          </div>
               <div className="col rightdiv">
                    <div class="btn-group position-absolute top-0 end-0">
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
                         <h1>Sign Up</h1>
                         {error && <Alert variant="danger">{error}</Alert>}
                         <div class="">
                                        {image === "" || image === null ? "" : <Image src={image} width={100} height={100} roundedCircle fluid />} 
                                   </div>
                         <Form onSubmit={handleSubmit} onReset={handleReset}>
                              <Form.Group controlId="firstName">

                                   <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={data.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        className="border-0 border-bottom rounded-0 no-outline pt-4"
                                        required
                                   />
                              </Form.Group>
                              <Form.Group controlId="lastName">
                                   <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={data.lastName}
                                        onChange={handleChange}
                                        className="border-0 border-bottom rounded-0 no-outline pt-4"
                                        placeholder="Last Name"
                                        required
                                   />
                              </Form.Group>
                              <Form.Group controlId="email">
                                   <Form.Control
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="border-0 border-bottom rounded-0 no-outline pt-4"
                                        required
                                   />
                              </Form.Group>
                              <Form.Group controlId="phone">
                                   <Form.Control
                                        type="tel"
                                        name="phone"
                                        value={data.phone}
                                        onChange={handleChange}
                                        className="border-0 border-bottom rounded-0 no-outline pt-4"
                                        placeholder="Phone Number"
                                        required
                                   />
                              </Form.Group>
                              <Form.Group controlId="username">
                                   <Form.Control
                                        type="text"
                                        name="username"
                                        value={data.username}
                                        onChange={handleChange}
                                        className="border-0 border-bottom rounded-0 no-outline pt-4"
                                        placeholder="Username"
                                        required
                                   />
                              </Form.Group>
                              <Form.Group controlId="password">
                                   <Form.Control
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        onChange={handleChange}
                                        className="border-0 border-bottom rounded-0 no-outline pt-4"
                                        placeholder="Password"
                                        required
                                   />
                              </Form.Group>
                              <div class="mb-3">
                                   <label for="profile-pic" class="form-label">Your Profile Picture</label>
                                   <input class="form-control" type="file" accept="image/" id="profile-pic" onChange={convertToBase64}></input>
                              </div>
                              <div class="btn-group mt-3" role="group" aria-label="Basic example">
                                   <button variant="primary" type="submit" class="btn btn-primary">Sign Up</button>
                                   <button variant="secondary" type="reset" class="btn btn-outline-secondary">reset</button>
                              </div>
                         </Form>
                         <button type="button" class="btn btn-outline-secondary btn-sm mt-2 mx-auto">continue with <FcGoogle/></button>
                         <p>Have an Account? <a href="/login" class="link-info">log in</a></p>
                   </div>
               </div>

        </div>
     );
};

export default Signup;
