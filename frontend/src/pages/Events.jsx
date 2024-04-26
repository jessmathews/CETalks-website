// Events.jsx

import React , {useState , useEffect} from 'react';
import Header from '../components/Header';

import EventData from '../components/EventData';
import Footer from '../components/Footer';

import "../styles/events.css"
import { array } from 'prop-types';
import spotlight3 from '../assets/event_posters/spotlight3.jpeg';
import detox from '../assets/event_posters/detox.jpeg';
import get_set_radio from '../assets/event_posters/get_set_radio.jpeg';
import spotlight_2018 from '../assets/event_posters/spot_light_2018.jpeg';
import spotlight_2 from '../assets/event_posters/spotlight2.jpeg';
import therenjeduppu from '../assets/event_posters/therenjeduppu.jpeg';
const Events = () => {
  // Your Events component logic

  let allEvents = [

    ['Spotlight 3' , spotlight3],
    ['Detox' , detox],
    ['Get Set Radio',get_set_radio],
    ['Spotlight 2018' , spotlight_2018],
    ['Spotlight 2' , spotlight_2],
    ['Therenjeduppu' , therenjeduppu],
    
  ]

  let latestEvent = allEvents[0]

  allEvents.splice(0,1)

  var [events, setEvents] = useState( allEvents )

  // events = events.reverse()

  

  var [ positions , setPositions] = useState( Array.from({length: events.length}, (x, i) => i )) 
  var [ currentEvent , setCurrentEvent] = useState(0);

  



  const changeEvent = ()=>{

  
    positions = [...positions]

    // let p = positions.shift()
    // positions.push(p)

    let p = positions.pop()
    positions.unshift(p);


    setPositions(positions)
    console.log(positions)
    setCurrentEvent( (currentEvent + 1)%events.length   )

  }

  return (
    <div className="events bg-dust bg-07060e" >
      <Header />
      <div className="events_container ">


       {/*  upcoming event section */}

        <div className="upcoming_events">
          <div className="events_data_heading"><h3 className='h_upcoming'>Upcoming</h3><h3 className='h_events'>EVENTS</h3></div>
          <EventData showRegisterButton={true} details = {latestEvent}/>
        </div>


        {/* past event section  */}

        <div className="past_events">

          {/*  displayed past event */}
          <div className="past_events_container">

            <div className="events_data_heading"><h3 className='h_upcoming'>Past</h3><h3 className='h_events'>EVENTS</h3></div>
            <EventData className="single_past_event" width="80%"  details= {events[currentEvent]}  />

          </div>

          {/*  past events card stack */}

          <div className="past_event_switcher">

            <div className="cards">

              {
                events.slice(0 , events.length).map((event ,index)=>{

                  return (



                    <div 
                        className="card1 card" 
                        style={{
                          // right :  ( positions[index] < 4 ) ?  (  positions.length - positions[index] ) *20 : positions[0]*20,
                          // right :   ( positions[index] > positions.length-4 )?  positions[index]*20 : 20,
                          left :     (positions[index])*(positions.length - positions[index])* 20/(events.length) ,
                          // left : ( positions[index] < 3 )? positions[index]* 20 : positions[4]*20 , 
                          // zIndex:  10  + positions[ index],  
                          zIndex : 1000 + positions.length -  positions[index] ,
                          height:  (100 - ( positions[index] )*3 > 0)? `${100 - ( positions[index])*3}%` : "0px" ,
                          
                          border : (100 - ( positions[index] )*3 > 0)? "2px solid white" : "0px"
                         
                        }}
                        

                        onClick={changeEvent}
                      >

                        <img className='object-cover' src= {event[1]} alt={`${event[0]}`} />
                    </div>
                  )
                  
                })
              }

              
            </div>

            <div className="indicator_circles">
                {
                  events.map((item , index)=>{
                    return (
                      <div className="indicator_circle"
                        style={{
                          backgroundColor: (index == currentEvent)? "yellow" : "white"
                        }} 
                      ></div>
                    )
                  })
                }

            </div>

          </div>

        </div>


      </div>

      <Footer />
    </div>
  );
};

export default Events;
