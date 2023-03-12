import React, { useState, useEffect } from 'react';
import '../profile.css';
import * as DataInterface from './DataInterface'


function ProfileView() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [communityID, setCommunityID] = useState('');
  const [photoUrl, setPhotoUrl] = useState(null);
  const [isUsernameEditable, setIsUsernameEditable] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [isCommunityIDEditable, setIsCommunityIDEditable] = useState(false);

  const handleUserUpdate = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      userName: username,
      communityID: communityID,
      image: photoUrl
    }
    // setIsEditable(false);
    setIsUsernameEditable(false);
    setIsEmailEditable(false);
    setIsCommunityIDEditable(false);
    DataInterface.updateUser(userData)
    getUserInfo();
  };

  const getUserInfo = async () => {
    const data = await DataInterface.getUser();
    console.log(data)
    setUsername(data.userName)
    setEmail(data.email)
    setCommunityID(data.communityID)
    DataInterface.getUserImage().then((url) => {
      setPhotoUrl(url);
    });
  }

const handleUpload = () => {
  const file = document.querySelector('input[type="file"]').files[0];
  DataInterface.uploadUserImage(file).then((snap) => {
    DataInterface.getUserImage().then((url) => {
      console.log(url);
      setPhotoUrl(url);
    }) 
  })
  .catch((error) => {
    console.error('Error uploading file:', error);
  });
};
  
  useEffect(() => {
    getUserInfo()
  }, []);

  return (
    <div className="profile">
      <h2>Select image</h2>
      <input type="file" name="file" onChange={(e) => setPhotoUrl(e.target.value)} />
      {photoUrl && <img src={photoUrl} alt="Profile" /> }
      <button className="buttons" type="button" onClick={handleUpload}>Upload</button>

      <h2>UserName</h2>
      <input type="text" id="name-input" className="profile-form" placeholder="Enter your full name" value={username} disabled={!isUsernameEditable} onChange={(e) => setUsername(e.target.value)}></input>
      {isUsernameEditable ? (
        <div>
          <button className="name-save" type="save" onClick={handleUserUpdate}>Save</button>
          <button className="name-cancel" type="cancel" onClick={() => setIsUsernameEditable(false)}>Cancel</button>
        </div>
      ) : (
        <button className="name-edit" type="edit" onClick={() => setIsUsernameEditable(true)}>Edit</button>
      )}
      <h2>Email</h2>
      <input type="text" id="email-input" className="profile-form" placeholder="Enter your email" value={email} disabled={!isEmailEditable} onChange={(e) => setEmail(e.target.value)}></input>
      {isEmailEditable ? (
        <div>
          <button className="email-save" type="save" onClick={handleUserUpdate}>Save</button>
          <button className="email-cancel" type="cancel" onClick={() => setIsEmailEditable(false)}>Cancel</button>
        </div>
      ) : (
        <button className="email-edit" type="edit" onClick={() => setIsEmailEditable(true)}>Edit</button>
      )}
      <h2>Community ID</h2>
      <input type="text" id="communityID-input" className="profile-form" placeholder="Enter your community ID" value={communityID} disabled={!isCommunityIDEditable} onChange={(e) => setCommunityID(e.target.value)}></input>
      {isCommunityIDEditable ? (
        <div>
          <button className="communityID-save" type="save" onClick={handleUserUpdate}>Save</button>
          <button className="communityID-cancel" type="cancel" onClick={() => setIsCommunityIDEditable(false)}>Cancel</button>
        </div>
      ) : (
        <button className="communityID-edit" type="edit" onClick={() => setIsCommunityIDEditable(true)}>Edit</button>
      )}
     </div>
     
  )
}

export default ProfileView
