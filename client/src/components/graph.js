// import React, { useState, useEffect } from 'react';
// import Axios from 'axios'
// import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'
// import '../style.css'

// function Graph(){

//      const tasks = [
//      ];
//      const TaskChart = ({ tasks }) => {
//           const data = tasks.map(task => ({
//                x: task.departed,
//                y: parseInt(task.cost.slice(1)), // Remove the "$" sign and convert to number
//           }));
//           return (
//                <VictoryChart height={250} padding={{ top: 20, bottom: 50, left: 70, right: 50 }}>
//                     <VictoryAxis
//                          dependentAxis
//                          tickFormat={(y) => `$${y}`}
//                          style={{
//                               tickLabels: {
//                                    fontSize: 10,
//                                    padding: 3,
//                               },
//                          }}
//                     />
//                     <VictoryAxis
//                          tickFormat={(x) => x}
//                          style={{
//                               tickLabels: {
//                                    fontSize: 10,
//                                    padding: 5,
//                               },
//                          }}
//                     />
//                     <VictoryLine data={data} x="x" y="y" />
//                </VictoryChart>
//           );
//      };
//      return(
//           <TaskChart tasks={tasks} />
//      )
// }

// export default Graph;