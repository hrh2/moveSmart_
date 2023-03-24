import React,{useState,useEffect} from 'react';
import Axios from 'axios'
import { Alert, Container, Row, Col, Image, Button } from "react-bootstrap";

// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { CgProfile } from "react-icons/cg";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { FaBusAlt, FaUser, FaPhone, FaEnvelope, FaCar, FaInfoCircle, FaShoppingBag } from "react-icons/fa";
import { FcOvertime } from "react-icons/fc";
import { RiUserLocationFill } from "react-icons/ri"; 
import {TbMessageChatbot} from 'react-icons/tb';
import nyanza from '../img/images.jpeg'


function Home(){
     const [showProfile,setVisibility] = useState(false);
     function handleClick(){
          setVisibility(true)
     }
     function handleClose(){
          setVisibility(false)
     }
     const [user,setuser] = useState({
          username:'',
          phone:'',
          firstName:'',
          lastName:'',
     });
     const handleLogout = () => {
          localStorage.removeItem("token");
          window.location.reload();
     };
     const [money, setMoney] = useState(0);
     const [used, setUsed] = useState(0);
     const [balance, setBalance] = useState(0);
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
                    setMoney(response.data.account.money);
                    setBalance(response.data.account.balance);
                    setUsed(response.data.account.used); 
                    setuser({
                         username:response.data.username,
                         phone:response.data.phone,
                         firstName:response.data.name[0],
                         lastName:response.data.name[1],
                         email:response.data.email,
                    }); 
                    setImage(response.data.image);
                    console.log(image);
                    console.log(user.image)
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
          <body className='container-xxl row d-grid gap-2'>
               <div className='bg-primary container-xxl p-2 mx-3 rounded row'>
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
                              <button onClick={handleLogout} className='btn btn-sm  btn-info text-white '>Log out</button>
                         </div>
                    </div>
             </div>
             <div className='container-xxl row m-2'>
               <div className='container-xxl col'>
                       <div className='row'>
                              <div className='col'>
                                   <button type="button" className="btn btn-primary position-relative " onClick={handleClick}>
                                        <CgProfile className='mx-5 shadow-sm rounded-5' size='2rem' />
                                        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-white border border-light rounded-circle">
                                             <span className="visually-hidden">New alerts</span>
                                        </span>
                                   </button>
                              </div>
                              <div className='col'>
                                   <a href='/chatbot'><TbMessageChatbot size="3em" /></a>
                              </div>
                       </div>
                       <div className='row'>
                              {showProfile && <div className='col-9'>
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
                              <div className='col-3 rounded-5'>
                                   <nav className="navbar p-2  navbar-light bg-light">
                                        <ul className="navbar-nav mr-auto">
                                             <li className="nav-item">
                                                  <a href="/rentalcars" className="nav-link">
                                                       <FaCar /> Rental Cars
                                                  </a>
                                             </li>
                                             <li className="nav-item">
                                                  <a href="/aboutus" className="nav-link">
                                                       <FaInfoCircle /> About Us
                                                  </a>
                                             </li>
                                             <li className="nav-item">
                                                  <a href="/market" className="nav-link">
                                                       <FaShoppingBag /> Market
                                                  </a>
                                             </li>
                                        </ul>
                                   </nav>
                                   
                              </div>
                       </div>
               </div>
                    <div className='container-xxl col d-grid gap-2'>
                         <div className='row d-grid gap-2 shadow-sm'>
                         <p className='h4 fw-bold'>Transaction</p>
                              <div className=' row'>
                                   <span className='col w-50'>Amount</span>
                                   <span className="badge text-bg-secondary bg-opacity-75 col container w-50">$<span>{money}</span></span>                     
                              </div>
                              <div className=' row'>
                                   <span className='col w-50'>Expense</span>
                                   <span className="badge text-bg-secondary bg-opacity-75 col container w-50">$<span>{used}</span></span>
                              </div>
                              <div className=' row'>
                                   <span className='col w-50'>Balance</span>
                                   <span className="badge text-bg-secondary bg-opacity-75 col container w-50 mb-2">$<span>{balance}</span></span>
                              </div>      
                    </div>
                         <div className='row shadow-sm card text-center row'>                 
                                   <div className="card-body">
                                        <p className="card-text">Reserve a seat for your next<br></br>Journey</p>
                                   <a href="/goBook" className="btn btn-primary text-center">Book Ticket</a>
                                   </div>   
                    </div>
               </div>
             </div>
               <div className='container-xxl rounded shadow-lg mx-3 row'>
                    <h1 className='text-center text-black'>Last task</h1>
                    <div className='col'>
                         <div className='row'>
                              <FaBusAlt size='2rem' className='m-3' />
                         </div>
                         <div className='row text-center'>
                              Bus:
                         </div>
                         <span className='row'>RAF 456 B </span>
                    </div>
                    <div className='col-5'>
                         <div className='row'>
                              <RiUserLocationFill size='2rem' className='mx-2' />
                         </div>
                         <div className='row'>
                              <img src={nyanza} alt='nyanza' className="img-thumbnail"  size='5em'></img>
                         </div>
                         <div className='row'>
                              <div className='row'>
                                   
                              </div>
                              <span className='text-center fs-6'>SINGITA KWITONDA LODGE</span>
                              <span className='text-center'>Ruhengeri,RWANDA</span>
                         </div>
                    </div>
                    <div className='col card text-bg-white'>
                         <div className="card-header"><FcOvertime size='2rem' className='' /></div>
                         <div className="card-body p-1 ">
                             <div className='row'>
                              <span className='row '>Depature</span>
                                   <span className="bg-light text-bg-secondary p-2">12:00</span>
                             </div>
                             <div className='row'>
                                <span className='row'>Arrival</span>
                                   <span className="bg-light text-bg-secondary p-2">16:00</span>
                             </div>
                         </div>
                    </div>
               </div>
     </body>
     )
}
export default Home;