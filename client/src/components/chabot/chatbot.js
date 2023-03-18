import React, { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane } from 'react-icons/fa';

const Chatbot = () => {
     const [message, setMessage] = useState('');
     const [response, setResponse] = useState('');
     const [isLoading, setIsLoading] = useState(false);

     const handleSendMessage = async () => {
          try {
               setIsLoading(true); // set loading state to true
               const { data } = await axios.post('http://localhost:3005/api/chatbot', { message });
               setResponse(data);
               setMessage('');
          } catch (error) {
               console.log(error);
          } finally {
               setIsLoading(false); // set loading state to false
          }
     };

     return (
          <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                         <a className="navbar-brand" href="/">Home</a>
                    </div>
               </nav>

               <div className="container mt-5">
                    <div className="row justify-content-center">
                         <div className="col-md-6 col-lg-4">
                              <div className="card">
                                   <div className="card-header bg-primary text-white">
                                        Chatbot
                                   </div>
                                   <div className="card-body">
                                        <div className="form-group">
                                             <label htmlFor="message">Message:</label>
                                             <div className="input-group mb-3">
                                                  <input
                                                       type="text"
                                                       className="form-control"
                                                       placeholder="Enter your message"
                                                       value={message}
                                                       onChange={(e) => setMessage(e.target.value)}
                                                  />
                                                  <div className="input-group-append">
                                                       <button
                                                            className="btn btn-primary m-2"
                                                            type="button"
                                                            onClick={handleSendMessage}
                                                            disabled={isLoading} // disable button while loading
                                                       >
                                                            {isLoading ? (
                                                                 <div className="spinner-border text-light" role="status">
                                                                      <span className="visually-hidden">Loading...</span>
                                                                 </div>
                                                            ) : (
                                                                 <FaPaperPlane />
                                                            )}
                                                       </button>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="form-group">
                                             <label htmlFor="response">Response:</label>
                                             <div className="card">
                                                  <div className="card-body">
                                                       {response}
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Chatbot;
