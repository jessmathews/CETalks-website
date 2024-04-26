import React from 'react'

export default function EventData({width, showRegisterButton , details}) {
  return (

    <div className="events_data" style= {{width : width}}>
    <div className="events_data_main">
      <div className="events_data_poster">

        <img src={`src/assets/event_posters/${details[1]}`} alt="" />
      </div>
      <div className="events_data_details">
        <h3 className='upcoming_event_title'>{details[0]}</h3>
        <p className="events_data_desc">
          Lorem ipsum dolor sit amet consectetur. Posuere quam suspendisse sapien non nulla ultrices. Id semper malesuada adipiscing aliquam magna turpis. Turpis vestibulum diam pellentesque eu dictum. Faucibus fusce nullam nulla quis.
        </p>
        {
          showRegisterButton && <button className="events_data_register">Register</button>
        }
        
      </div>
    </div>

  </div>
   
  )
}
