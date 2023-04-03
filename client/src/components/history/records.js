import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { FaClock, FaMapMarkerAlt, FaDollarSign} from 'react-icons/fa';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';
import { BsArrowUpRight, BsArrowDownRight } from 'react-icons/bs';
import { Container, Row, Col,Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '../style.css'




function Home() {
     const [taskLists,setTasks]=useState([])
     const [user, setUser] = useState({
          firstName: '',
     });
     const [money, setMoney] = useState(0);
     const [used, setUsed] = useState(0);
     const [balance, setBalance] = useState(0);
     const [error, setError] = useState('');
     const [image, setImage] = useState(null);

     useEffect(() => {
          const fetchUserData = async () => {
               try {
                    const token = localStorage.getItem('token');
                    if (!token) {
                         throw new Error('No token found');
                    }
                    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
                    const response = await Axios.get('http://localhost:3005/api/records');
                    console.log(response.data);
                    setMoney(response.data.account.money);
                    setBalance(response.data.account.balance);
                    setUsed(response.data.account.used);
                    setTasks(response.data.lastTask)
                   
                    setUser({
                         firstName: response.data.name[0],
                    });
                    setImage(response.data.image);
                    console.log(image);
                    console.log(user.image)
               } catch (error) {
                         setError(error.response.data.message);
               }
          };
          fetchUserData();
     },);

      const TaskChart = ({ tasks }) => {
          const data = tasks.map(task => ({
               x: task.departed,
               y: parseInt(task.cost), // Remove the "$" sign and convert to number
          }));
          return (
               <VictoryChart height={250} padding={{ top: 20, bottom: 50, left: 70, right: 50 }}>
                    <VictoryAxis
                         dependentAxis
                         tickFormat={(y) => `$${y}`}
                         style={{
                              tickLabels: {
                                   fontSize: 10,
                                   padding: 3,
                              },
                         }}
                    />
                    <VictoryAxis
                         tickFormat={(x) => x}
                         style={{
                              tickLabels: {
                                   fontSize: 10,
                                   padding: 5,
                              },
                         }}
                    />
                    <VictoryLine data={data} x="x" y="y" />
               </VictoryChart>
          );
     };
     return (
      <div className='container-fluid'>      
               <div className='bg-primary container-fluid mx-1 p-1 rounded row'>
                    <div className='row '>
                         <div className='col container'>
                              <h1 className='h3 bold '>Smart<span className='h3 fw-bold text-warning'>MOVE</span></h1>
                         </div>
                         <div className='col container'>
                              {error && <Alert variant="danger">{error}</Alert>}
                         </div>
                         <div className='col-6 container'>
                              <ul className="nav nav-tabs bg-light rounded">
                                   <li className="nav-item">
                                        <a className="nav-link active text-yellow" aria-current="page" href="/goBook">Reload</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link text-blue fw-bold" href="/">Home</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link text-blue fw-bold" href="rental">Car Rentals</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link text-blue fw-bold" href='/aboutUs'>About Us</a>
                                   </li>
                              </ul>
                         </div>
                         <div className='col container'>
                         </div>
                    </div>
               </div>
          <div className='container-fluid bg-light border-4 my-4 rounded-4 row ticketsDiv shadow-sm'>
                    {taskLists.map((tasks)=>(
                         <div className='card col-1 m-2 py-3 Ticket'>
                          <h2 className='container card-header'>moveSmart</h2>
                          <div className='container card-body row'>
                             <div className='col'>
                               <p>From:{tasks.destination}</p>
                              <p>To:{tasks.departed}</p>
                              <p>cost:{tasks.cost}</p>
                              <p>Car:{tasks.car}</p>
                              <p>time:{tasks.date}</p>
                             </div>
                             <div className='col bg-black'></div>
                          </div>
                          <div className='card-footer'>
                              <p>Valid:{tasks.isTicket}</p>
                          </div>
                         </div>  
                    ))}     
          </div>
               <div className='container-fluid row'>
                   <div className='col'>
                         <div className='row card m-2'>
                              <Container>
                                   <h2>Money Account</h2>
                                   <Row className="mt-2">
                                        <Col>
                                             <FaDollarSign size={40} color="#007bff" />
                                             <p>Amount</p>
                                             <h4>{money}</h4>
                                        </Col>
                                        <Col>
                                             <BsArrowUpRight size={40} color="#28a745" />
                                             <p>Used</p>
                                             <h4>${used.toFixed(2)}</h4>
                                        </Col>
                                        <Col>
                                             <BsArrowDownRight size={40} color="#dc3545" />
                                             <p>Balance</p>
                                             <h4>${balance.toFixed(2)}</h4>
                                        </Col>
                                   </Row>
                              </Container>
                         </div>
                         <div className='row card m-2 graph'>
                              <TaskChart tasks={taskLists} />
                         </div>
                   </div>
                    <div className="container col card ">
                         <h2>Tasks</h2>
                         <ul className="list-group TaskList">
                              {taskLists.map((task, index) => (
                                   <li className="list-group-item" key={index}>
                                        <div className="row align-items-center">
                                             <div className="col-2">
                                                  <FaMapMarkerAlt size={30} />
                                             </div>
                                             <div className="col-8">
                                                  <h4>{task.departed}</h4>
                                                  <p>
                                                       <FaDollarSign /> {task.cost}
                                                  </p>
                                             </div>
                                             <div className="col-2">
                                                  <FaClock size={30} />
                                                  <p>{task.time}</p>
                                             </div>
                                        </div>
                                   </li>
                              ))}
                         </ul>
                    </div>
               </div>
      </div>
     )
     
}

export default Home;