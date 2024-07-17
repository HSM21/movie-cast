import React from 'react';


const ActorDetails = (props) => {
    const {userDetails} = props;
    const {actorId,imageURL,name,role,about} = userDetails;
    



  return (
    <div className="actorDetails">
      <li key={actorId} className='actroDetails-flex'>
            <div>
            <img src ={imageURL} className = "avatar" alt='avatar'/>
            <h4 className="actor-name">{name}</h4>
            <p className="actor-role">{role}</p>
            </div>
            <div>
              <p className="about">{about}</p>
            </div>
      </li>
    </div>
  )
}

export default ActorDetails
