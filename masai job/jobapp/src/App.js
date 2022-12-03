import React, {useState,useEffect} from 'react';
import data from "./data.json";
import Dashboard from './components/Dashboard';
function App() {
  const [jobs,setJobs]=useState([]);

  useEffect(()=>{
setJobs(data);
  },[])



  return (
    <div className="App">
     <h1 className='text-4xl'>hello Mayur</h1>
     {jobs.length===0 ? (
      <p>its fetching...</p>
     ):(
      jobs.map((job) =><Dashboard job={job} key={job.id}/>)
     )}
    </div>
  );
}

export default App;
