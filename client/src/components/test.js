import React, { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane,FaCopy } from 'react-icons/fa';

const Chatbot = () => {
     const handleCopyResponse = () => {
          navigator.clipboard.writeText(response);
     };
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
               setMessage(error.message)
          } finally {
               setIsLoading(false); // set loading state to false
          }
     };

     return (
          <div className="chatbot">
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                         <a className="navbar-brand" href="/">
                              Home
                         </a>
                    </div>
               </nav>

               <div className="container mt-5">
                    <div className="row justify-content-center">
                         <div className="col-md-8">
                              <div className="card">
                                   <div className="card-header bg-primary text-white">
                                        Chatbot
                                   </div>
                                   <div className="card-body">
                                        <div className="form-group">
                                             <label htmlFor="message">Message:</label>
                                             <div className="input-group mb-3">
                                                  <textarea
                                                       className="form-control"
                                                       placeholder="Enter your message"
                                                       value={message}
                                                       onChange={(e) => setMessage(e.target.value)}
                                                  ></textarea>
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
                                                       {response ? (
                                                            <div className="d-flex align-items-center">
                                                                 <div className="flex-grow-1">{response}</div>
                                                                 <div className="ms-3">
                                                                      <button className="btn btn-light" onClick={handleCopyResponse}>
                                                                           <FaCopy />
                                                                      </button>
                                                                 </div>
                                                            </div>
                                                       ) : (
                                                            <div className="text-muted">No response yet.</div>
                                                       )}
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
