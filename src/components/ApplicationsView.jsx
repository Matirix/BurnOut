import React, { useState, useEffect } from "react";
import * as DataInterface from './DataInterface'

function ApplicationsView() {

  const [applicationData, setApplicationData] = useState([]);

  const userID = DataInterface.getUserID();

  // useEffect(() => {
  //    DataInterface.getApplications(userID)
  //   //  console.log("test");
  //   //  console.log(data);
  //   // setApplicationData(DataInterface.getApplications(userID))
  // }, [applicationData]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await DataInterface.getApplications(userID);
      setApplicationData(data);
    };
    fetchData();
  }, [userID]);

  // console.log("test" + applicationData[0].comments)

  // console.log(applicationData.jobPosition);

  


  const personPost = [
    {
      id: 1,
      name: 'Micky Mouse',
      pic: '../images/mickyMouse.png',
      comment: '50th application anniversary! yaayy... end me.',
      applications: '50',
      rejections: '4',
      datetime: '2 hours ago',
    },
  ];

  const [response, setResponse] = useState("");
  const [responses, setResponses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponses([...responses, response]);
    setResponse("");
  };

  const handleChange = (e) => {
    setResponse(e.target.value);
  };

  return (
<div className="rounded-lg shadow p-10 max-h-screen bg-beige">
  {applicationData.map(data => (
    <div key={data.id} className="flex items-center mb-4 ">
      <img src={personPost[0].pic} alt="Profile" className="w-12 h-12 rounded-full mr-4"/>
      <div>
        {/* <h3 className="font-bold">{personPost[0].name}</h3> */}
        <p className="text-gray-600 mb-2">
          Company Name: <span className="ml-10 font-saira"></span>{data.companyName}
        </p>
        <p className="text-gray-600 mb-2">
          Date Applied: <span className="ml-12"></span>{new Date(data.dateApplied*1000).toLocaleString()}
        </p>
        <p className="text-gray-600 mb-2">
          Applications Status: <span className="ml-10"></span>{data.applicationStatus}
        </p>
        <p className="text-gray-600 mb-2">
          Job Position: <span className="ml-10"></span>{data.jobPosition}
        </p>
        <p className="text-gray-600 mb-0">
          Comments: <span className="ml-10"></span>{data.comments}
        </p>
        {/* <hr className="h-2"></hr> */}
      </div>
    </div>
    
      ))}


      




  {/* <div className="flex items-center mb-2">
    <img
      src={personPost[0].pic}
      alt="Profile"
      className="w-12 h-12 rounded-full mr-4"
    />
    <div>
      <h3 className="font-bold">{personPost[0].name}</h3>
      <p className="text-gray-600">
        Applications: {personPost[0].applications}
      </p>
      <p className="text-gray-600">
        Rejections: {personPost[0].rejections}
      </p>
    </div>
  </div> */}
  
  {/* <div className="mb-4">
    <p className="text-gray-700">{personPost[0].comment}</p>
  </div> */}


  {/* <div className="mb-4">
    {responses.map((r, index) => (
      <div key={index} className="flex items-start mb-4">
        <img
          src={personPost[0].pic}
          alt="Profile"
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <h3 className="font-bold">John Doe</h3>
          <p className="text-gray-600">@johndoe</p>
          <p className="text-gray-700">{r}</p>
        </div>
      </div>
    ))}
  </div> */}
  {/* <form onSubmit={handleSubmit}>
    <textarea
      placeholder="Post your reply"
      value={response}
      onChange={handleChange}
      className="w-full p-2 border border-gray-400 rounded-lg mb-4"
    ></textarea>
    <button type="submit" className="applicationsButton">
      POST
    </button>
  </form> */}
</div>
  );
}

export default ApplicationsView;