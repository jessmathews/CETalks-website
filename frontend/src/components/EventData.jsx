import React from 'react'

export default function EventData({width, showRegisterButton , details}) {
  return (

    <div className="events_data" style= {{width : width}}>
    <div className="events_data_main">
      <div className="events_data_poster object-cover">

        <img  src={details[1]} alt={`${details[0]}`} />
      </div>
      <div className="events_data_details">
        
        <h3 className='upcoming_event_title bg-gradient-to-r from-[#E8E034] to-[#C83134] bg-clip-text text-transparent inline-block'>{details[0]}</h3>
        <p className="events_data_desc text-white">
        {`${details[2]}`}
        </p>
        {
          showRegisterButton && <button className="events_data_register rounded-md">Register</button>
        }
        
      </div>
    </div>

  </div>
   
  )
}
