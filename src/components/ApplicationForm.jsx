import React from 'react'
import * as DataInterface from './DataInterface'
import {useState, useEffect} from 'react';
import { JobPositions } from './DataInterface';


function ApplicationForm() {

  //Date Variable
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [dateApplied, setDateApplied] = useState("");
  const [applicationStatus, setApplicationStatus] = useState("");
  const [comments, setComments] = useState("");

  const { v4: uuidv4 } = require('uuid');

  const jobPosition = JobPositions;

  //function to set the days
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(<option key={i} value={i}>{i}</option>);
  }

  //function to set the months
  const months = [
    <option key="01" value="01">January</option>,
    <option key="02" value="02">February</option>,
    <option key="03" value="03">March</option>,
    <option key="04" value="04">April</option>,
    <option key="05" value="05">May</option>,
    <option key="06" value="06">June</option>,
    <option key="07" value="07">July</option>,
    <option key="08" value="08">August</option>,
    <option key="09" value="09">September</option>,
    <option key="10" value="10">October</option>,
    <option key="11" value="11">November</option>,
    <option key="12" value="12">December</option>
  ];

  //function to set the years
  const years = [];
  for (let i = 1900; i <= new Date().getFullYear(); i++) {
    years.push(<option key={i} value={i}>{i}</option>);
  }

  const statusOptions = [
    { value: 'applied', label: 'Applied' },
    { value: 'interview-invitation', label: 'Interview Invitation' },
    { value: 'interviewed', label: 'Interviewed' },
    { value: 'offered', label: 'Offered' },
    { value: 'accepted', label: 'Accepted' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date(`${year}-${month}-${day}`);
    const formattedDate = date.toISOString().substring(0,10);

    setDateApplied(formattedDate);
    const randomNumber = Math.round(Math.random() * 100);
    const communityID = uuidv4();

    const applicationData = {
      companyName: companyName,
      dateApplied: dateApplied,
      applicationStatus: applicationStatus,
      jobPosition: position,
      comments: comments,
      communityID: communityID
    }
    
    DataInterface.createApplication(applicationData);

    // useEffect(() => {
    //   DataInterface.createApplication(applicationData);
    // }, [])

    // console.log(`Submitted: ${companyName} ${position} ${dateApplied} ${applicationStatus} ${comments} ${day} ${month} ${year}`)
    
  }

  return (
    // Form
    <form onSubmit={handleSubmit} className="m-3 h-screen flex flex-col">
      <div className="form-row">
        <label htmlFor="companyName" className="visually-hidden"></label>
          <input className='p-3' type="text" id="companyName" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)}  style={{height: "50px", backgroundColor: "#C1A1D3"}} />
      </div>
        {/* Select Position */}
      <div className="rounded-lg">
        <label htmlFor="position" className="visually-hidden"></label>
        <select className='rounded-lg p-3' id="position" value={position} onChange={(e) => setPosition(e.target.value)} style={{height: "50px", backgroundColor: "#C1A1D3"}}>
          <option className='' value="" >Position applied for:</option>
          {Object.values(jobPosition).map((option) =>(
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>


      <div className="date-row gap-3 m-2">
        <label htmlFor="date" style={{color: 'black'}}>Date Applied:</label>
        <div>
          <select className='rounded-lg p-1' id="day" value={day} onChange={(e) => setDay(e.target.value)} style={{backgroundColor: "#C1A1D3", marginRight: "5px"}}>
            {days}
          </select>
          <select className='rounded-lg p-1' id="month" value={month < 10 ? "0" + month : month} onChange={(e) => setMonth(e.target.value)} style={{backgroundColor: "#C1A1D3", marginRight: "5px"}}>
            {months}
          </select>
          <select className='rounded-lg p-1' id="year" value={year} onChange={(e) => setYear(e.target.value)} style={{backgroundColor: "#C1A1D3", marginRight: "5px"}}>
            {years}
          </select>
        </div>
      </div>


      <div className="form-row">
        <select className='rounded-lg p-3' id="applicationStatus" value={position} onChange={(e) => setPosition(e.target.value)} style={{height: "50px", backgroundColor: "#C1A1D3"}}>
          <option className='rounded-lg' value="">Choose Application Status</option>
          {statusOptions.map((option) =>(
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>


      <div className="form-row">
        <label htmlFor="comments" className="visually-hidden"></label>
          <input type="text" id="comments" placeholder="Comments" value={comments} onChange={(e) => setComments(e.target.value)} style={{height: "200px", backgroundColor: "#C1A1D3"}} />
      </div>


      <div className=" flex justify-end gap-4">
        <button className='bg-lavendar p-2 rounded-lg' type="button">Cancel</button>
        <button className='bg-lavendar p-2 rounded-lg' type="submit">Submit</button>
      </div>
    </form>
  );
  
}

export default ApplicationForm