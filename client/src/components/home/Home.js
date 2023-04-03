import React,{useState,useEffect} from 'react';
import Axios from 'axios'
import { Alert, Container, Row, Col, Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import {FaUser, FaPhone, FaEnvelope, FaCar, FaInfoCircle, FaShoppingBag } from "react-icons/fa";
import {TbMessageChatbot} from 'react-icons/tb';
import { FaRobot } from 'react-icons/fa';
import { RiChat1Line } from 'react-icons/ri';
import mage from '../img/images.jpg'
import mage1 from '../img/bmw(1).jpg'
import mage2 from '../img/benz(3).jpg'


function Home(){
     const [showProfile,setVisibility] = useState(false);
     function handleClick(){
          setVisibility(true)
     }
     function handleClose(){
          setVisibility(false)
     }
     const [user,setUser] = useState({
          username:'',
          phone:'',
          firstName:'',
          lastName:'',
     });
     const handleLogout = () => {
          localStorage.removeItem("token");
          window.location.reload();
     };
     const [error, setError] = useState('');
     const [image,setImage]=useState(null);

     useEffect(() => {
          const fetchUserData = async () => {
               try {
                    const token = localStorage.getItem('token');
                    if (!token) {
                         throw new Error('No token found');
                    }
                    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
                    const response = await Axios.get('http://localhost:3005/api/account');
                    console.log(response.data);
                    setUser({
                         username:response.data.username,
                         phone:response.data.phone,
                         firstName:response.data.name[0],
                         lastName:response.data.name[1],
                         email:response.data.email,
                    }); 
                    setImage(response.data.image);
               } catch (error) {
                    console.error(error);
                    if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                         setError(error.response.data.message);
                    } else {
                         setError('An unexpected error occurred. Please try again later.');
                    }
               }
          };
          fetchUserData();
     }, []);
     

     return(
          <div className='container-fluid row d-grid gap-2'>
               <div className='bg-primary container-xxl p-2 mx-3 rounded row mainBar'>
                    <div className='row '>
                         {error && <Alert variant="danger">{error}</Alert>}
                         <div className='col container'>

                         </div>
                         <div className='col container'>
                              <h1 className='h3 bold '>Smart<span className='h3 fw-bold text-warning'>MOVE</span></h1>
                         </div>
                         <div className='col-6 container'>

                         </div>
                         <div className='col container'>
                             <div className='row'>
                              <div className='col'>
                                        <button onClick={handleLogout} className='btn btn-sm  btn-info text-white '>Log out</button>
                              </div>
                              <div className='col'>
                                        <Col md={5} >
                                             <Image src={image} roundedCircle fluid onClick={handleClick} />
                                        </Col> 
                              </div>
                             </div>
                         </div>
                         
                    </div>
             </div>
               <div className='container-fluid row px-3'>
                    <div className='container-fluid col rounded w-50 text-center'>
                         <div className='container shadow-sm bg-white rounded card text-center'>
                              <a href="/onlineShop" className=" text-center"><h3> <FaShoppingBag />shopping</h3></a>
                              <div className='card-body'>
                                   <div className='col shoppingImg card p-1'>
                                        <h4 className='card-header'>Fashion</h4>
                                        <img src={mage} alt='some' className='card-img card-body' />
                                        <p>
                                             Lebron James one of the most
                                             Valuable players in NBA
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div class="container my-4">
                              <div class="card p-3 border-0 shadow-sm">
                                   <div class="row g-0 align-items-center">
                                        <div class="col-12 col-md-4 text-center">
                                             <FaCar class="display-4 text-primary mb-3 mb-md-0" />
                                        </div>
                                        <div class="col-12 col-md-8">
                                             <div class="card-body">
                                                  <h3 class="card-title mb-3">Check Out</h3>
                                                  <div class="card">
                                                       <div class="row g-0">
                                                            <div class="col-md-4">
                                                                 <Image src={mage1} className='card-img' fluid />
                                                            </div>
                                                            <div class="col-md-8">
                                                                 <div class="card-body">
                                                                      <h5 class="card-title mb-3">BMW</h5>
                                                                      <p class="card-text">
                                                                           erffgmbjmbjh vbdfbf
                                                                           fsbjfhfbsfjk
                                                                           fsddfjbfjjnd
                                                                      </p>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                    </div>
                    <div className='container-fluid col'>
                         {showProfile && <div className='container shadow-sm card my-2'>
                              <Container className="my-3">
                                   <Row>
                                        <Col md={3}>
                                             <Image src={image} roundedCircle fluid />
                                        </Col>
                                        <Col md={9}>
                                             <h2>{user.username}</h2>
                                             <p className="mb-1"><FaPhone className="me-2" /> {user.phone}</p>
                                             <p className="mb-1"><FaEnvelope className="me-2" /> {user.email}</p>
                                             <p className="mb-3"><FaUser className="me-2" /> {user.firstName} {user.lastName}</p>
                                             <Button variant="primary">
                                                  Update
                                             </Button>
                                        </Col>
                                        <button type="button " class="btn-close mx-5" aria-label="Close" onClick={handleClose}></button>
                                   </Row>
                              </Container>
                         </div>}
                         <div className='col rounded-5'>
                              <div className="container-fluid bg-light py-5">
                                   <div className="container">
                                        <div className="row align-items-center">
                                             <div className="col-lg-6 mb-4 mb-lg-0">
                                                  <h2 className="h1 mb-4">Talk to our friendly chatbot</h2>
                                                  <p className="lead mb-4">
                                                       Our chatbot is here to help you with anything you need. Whether you have questions about our products or services, or you just want to say hi, our chatbot is always ready to chat.
                                                  </p>
                                                  <a href="#" className="btn btn-primary mr-2"><RiChat1Line className="mr-2" /> Start chatting</a>
                                                  <a href="#" className="btn btn-outline-primary"><FaRobot className="mr-2" /> Learn more about our chatbot</a>
                                             </div>
                                             <div className="col-lg-6">
                                                  <img src="https://via.placeholder.com/500x350.png?text=Chatbot+image" className="img-fluid" alt="Chatbot" />
                                             </div>
                                        </div>
                                   </div>
                              </div> 

                         </div>
                         <div className='container d-grid gap-1'>
                              <div className='container shadow-sm card text-center row'>
                                   <div className="card-body">
                                        <p className="card-text">Reserve a seat for your next<br></br>Journey</p>
                                        <a href="/goBook" className="btn btn-primary text-center">Book Ticket</a>
                                   </div>
                              </div>
                         </div>
                         
                         <div className="container card p-1 border-0">
                              <div className="card-body row">
                                   <div className="col-md-4">
                                        <div className="text-center">
                                             <img src={mage2} className="card-img img-fluid" alt="Profile" />
                                        </div>
                                   </div>
                                   <div className="col-md-8">
                                        <div className="row p-2">
                                             <div className="col-md-6 mb-3 mb-md-0">
                                                  <div className="card h-100">
                                                       <div className="card-body text-center">
                                                            <i className="fas fa-route fa-3x mb-3 text-primary"></i>
                                                            <h5 className="card-title mb-0">Last Journey</h5>
                                                            <p className="card-text">1</p>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-md-6 mb-3 mb-md-0">
                                                  <div className="card h-100">
                                                       <div className="card-body text-center">
                                                            <i className="fas fa-money-bill-alt fa-3x mb-3 text-success"></i>
                                                            <h5 className="card-title mb-0">Cost of Journey</h5>
                                                            <p className="card-text">2</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="row p-2">
                                             <div className="col-md-6 mb-3 mb-md-0">
                                                  <div className="card h-100">
                                                       <div className="card-body text-center">
                                                            <i className="fas fa-shopping-cart fa-3x mb-3 text-warning"></i>
                                                            <h5 className="card-title mb-0">Shopping</h5>
                                                            <p className="card-text">3</p>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-md-6 mb-3 mb-md-0">
                                                  <div className="card h-100">
                                                       <div className="card-body text-center">
                                                            <i className="fas fa-chart-bar fa-3x mb-3 text-info"></i>
                                                            <h5 className="card-title mb-0">Expenditure</h5>
                                                            <p className="card-text">4</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="row p-2">
                                             <div className="row p-3 card">
                                                  <div className="col">
                                                       <h5>My Cart</h5>
                                                  </div>
                                                  <div className="col text-end">
                                                       <h5>Items: </h5>
                                                  </div>
                                             </div>
                                             <div className="row border-0 card">
                                                  {/* Cart items go here */}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="text-center mt-3">
                                   <a href="/rentingCars" className="btn btn-lg btn-primary">
                                        Check Records
                                   </a>
                              </div>
                         </div>

                    </div>
               </div> 
             <div>
          </div>       
               <footer class="bg-dark py-5">
                    <div class="container">
                         <div class="row">
                              <div class="col-12 col-md-4 mb-4">
                                   <h5 class="text-white mb-3">About Us</h5>
                                   <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lacinia est. Nullam vestibulum quam at turpis blandit, sed tempor arcu aliquet.</p>
                              </div>
                              <div class="col-12 col-md-4 mb-4">
                                   <h5 class="text-white mb-3">Contact Us</h5>
                                   <ul class="list-unstyled text-muted">
                                        <li><i class="bi bi-geo-alt me-2"></i>123 Main St, New York, NY 10001</li>
                                        <li><i class="bi bi-envelope me-2"></i>example@example.com</li>
                                        <li><i class="bi bi-phone me-2"></i>(123) 456-7890</li>
                                   </ul>
                              </div>
                              <div class="col-12 col-md-4 mb-4">
                                   <h5 class="text-white mb-3">Follow Us</h5>
                                   <ul class="list-unstyled d-flex">
                                        <li class="me-3"><a href="#"><i class="bi bi-facebook"></i></a></li>
                                        <li class="me-3"><a href="#"><i class="bi bi-twitter"></i></a></li>
                                        <li class="me-3"><a href="#"><i class="bi bi-instagram"></i></a></li>
                                   </ul>
                              </div>
                         </div>
                         <div class="row">
                              <div class="col-12">
                                   <hr class="bg-light" />
                              </div>
                              <div class="col-12 col-md-6 mb-4 mb-md-0">
                                   <small class="text-muted">&copy; 2023 Your Company. All rights reserved.</small>
                              </div>
                              <div class="col-12 col-md-6">
                                   <ul class="list-unstyled d-flex justify-content-md-end">
                                        <li class="me-3"><a href="#">Privacy Policy</a></li>
                                        <li class="me-3"><a href="#">Terms of Use</a></li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </footer>

     </div>
     )
}
export default Home;