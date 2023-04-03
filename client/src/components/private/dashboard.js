import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const StationForm = () => {
     const [name, setName] = useState('');
     const [location, setLocation] = useState('');
     const [destinationName, setDestinationName] = useState('');
     const [cars, setCars] = useState([]);
     const [carName, setCarName] = useState('');
     const [carTime, setCarTime] = useState('');
     const [carSize, setCarSize] = useState(0);
     const [cost, setCost] = useState(0);

     const handleSubmit = async (event) => {
          event.preventDefault();
          try {
               const response = await axios.post('http://localhost:3005/api/book', {
                    name,
                    location,
                    destination: {
                         name: destinationName,
                         cars: cars.map((car) => ({
                              name: car.name,
                              time: car.time,
                              size: car.size,
                         })),
                         cost,
                    },
               });
               console.log(response.data);
               setName('');
               setLocation('');
               setDestinationName('');
               setCars([]);
               setCarName('');
               setCarTime('');
               setCarSize(0);
               setCost(0);
          } catch (error) {
               console.error(error);
          }
     };

     const handleAddCar = () => {
          const newCar = { name: carName, time: carTime, size: carSize };
          setCars([...cars, newCar]);
          setCarName('');
          setCarTime('');
          setCarSize(0);
     };

     return (
         <div className='container-fluid px-3 row'>
               <div className='bg-primary container-fluid mx-1 p-1 rounded row'>
                    <div className='row '>
                         <div className='col container'>
                              <h1 className='h3 bold '>Smart<span className='h3 fw-bold text-warning'>MOVE</span></h1>
                         </div>
                         <div className='col container'>
                             
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
           <div className='card col p-2 my-3'>
                    <Form onSubmit={handleSubmit} className="justify-content-center container bg-white py-4 rounded-5">
                         <Form.Group controlId="formBasicEmail">
                              <Form.Control
                                   type="text"
                                   id="name"
                                   placeholder="Station Name"
                                   name="email"
                                   value={name}
                                   className="border-0 border-bottom rounded-0 no-outline p-4"
                                   onChange={(event) => setName(event.target.value)}
                                   required />
                         </Form.Group>
                         <Form.Group>
                              <Form.Control
                                   type="text"
                                   id="location"
                                   placeholder='Station Location'
                                   className="border-0 border-bottom rounded-0 no-outline p-4"
                                   value={location}
                                   onChange={(event) => setLocation(event.target.value)}
                              />
                         </Form.Group>
                         <Form.Group>
                              <Form.Control
                                   type="text"
                                   id="destinationName"
                                   placeholder='Destination Available in the station'
                                   value={destinationName}
                                   onChange={(event) => setDestinationName(event.target.value)}
                                   className="border-0 border-bottom rounded-0 no-outline p-4"
                              />
                         </Form.Group>
                         <Form.Control
                              type="number"
                              id="cost"
                              placeholder='The price of Journey'
                              value={cost}
                              onChange={(event) => setCost(Number(event.target.value))}
                              className="border-0 border-bottom rounded-0 no-outline p-4"
                         />
                         <div className='card p-2 my-2'>
                              <Form.Group>
                                   <Form.Control
                                        type="text"
                                        id="carName"
                                        placeholder='The plack of the Car'
                                        value={carName}
                                        onChange={(event) => setCarName(event.target.value)}
                                        className="border-0 border-bottom rounded-0 no-outline p-4"
                                   />
                              </Form.Group>
                              <Form.Group>
                                   <Form.Control
                                        type="text"
                                        id="carTime"
                                        placeholder='Working Time of a Car'
                                        value={carTime}
                                        onChange={(event) => setCarTime(event.target.value)}
                                        className="border-0 border-bottom rounded-0 no-outline p-4"

                                   />
                              </Form.Group>
                              <Form.Group>
                                   <label htmlFor="carSize">Car Size:</label>
                                   <Form.Control
                                        type="number"
                                        id="carSize"
                                        placeholder='Available number of sits'
                                        value={carSize}
                                        onChange={(event) => setCarSize(Number(event.target.value))}
                                        className="border-0 border-bottom rounded-0 no-outline p-4"
                                   />
                              </Form.Group>
                              
                                   <Button type="button" onClick={handleAddCar}>
                                        Add Car
                                   </Button>
                             
                              {cars.length === 0 && destinationName && <Alert variant="danger">{destinationName}</Alert>}
                              <div>
                                   {cars.map((car, index) => (
                                        <div key={index}>
                                             <p>{car.name}</p>
                                             <p>{car.time}</p>
                                             <p>{car.size}</p>
                                        </div>
                                   ))}
                              </div>
                         </div>
                         <div>
                              <Button type="submit" variant="primary" className="w-50 mt-4">Submit</Button>
                         </div>
                    </Form> 
           </div>
           <div className='col'>
                    <div className="container-fluid">
                         <h1>Welcome to the Admin Dashboard</h1>
                         <div className="row">
                              <div className="col-3">
                                   <div className="card">
                                        <div className="card-body">
                                             <h5 className="card-title">Users</h5>
                                             <p className="card-text">Manage and view user accounts.</p>
                                             <a href="/admin/users" className="btn btn-primary">Go to Users</a>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-3">
                                   <div className="card">
                                        <div className="card-body">
                                             <h5 className="card-title">Products</h5>
                                             <p className="card-text">Manage and view products.</p>
                                             <a href="/admin/products" className="btn btn-primary">Go to Products</a>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-3">
                                   <div className="card">
                                        <div className="card-body">
                                             <h5 className="card-title">Orders</h5>
                                             <p className="card-text">View and manage customer orders.</p>
                                             <a href="/admin/orders" className="btn btn-primary">Go to Orders</a>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-3">
                                   <div className="card">
                                        <div className="card-body">
                                             <h5 className="card-title">Reports</h5>
                                             <p className="card-text">View sales and revenue reports.</p>
                                             <a href="/admin/reports" className="btn btn-primary">Go to Reports</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
           </div>
         </div>
     );
};

export default StationForm;
