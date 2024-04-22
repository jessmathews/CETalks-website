// Events.jsx

import React , {useState , useEffect} from 'react';
import Header from '../components/Header';

import EventData from '../components/EventData';
import Footer from '../components/Footer';

import "../styles/events.css"


const Events = () => {
  // Your Events component logic

  var [events, setEvents] = useState( [
    ['event1' , 'https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699'],
    ['event2', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'],
    ['event3' , 'https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff'],

    ["event4" , "https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0"] ,
    ["event5" , "https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0"]
  ])

  // events = events.reverse()

  

  var [ positions , setPositions] = useState( Array.from({length: events.length}, (x, i) => i ))



  const changeEvent = ()=>{

  
    positions = [...positions]
    let p = positions.shift()
    positions.push(p)


    setPositions(positions)
    console.log(positions)

  }

  return (
    <div className="events" >
      <Header />
      <div className="events_container">


       {/*  upcoming event section */}

        <div className="upcoming_events">
          <div className="events_data_heading"><h3 className='h_upcoming'>Upcoming</h3><h3 className='h_events'>EVENTS</h3></div>
          <EventData showRegisterButton={true} details = {[ 'RJ HUNT' ]}/>
        </div>


        {/* past event section  */}

        <div className="past_events">

          {/*  displayed past event */}
          <div className="past_events_container">

            <div className="events_data_heading"><h3 className='h_upcoming'>Past</h3><h3 className='h_events'>EVENTS</h3></div>
            <EventData className="single_past_event" width="80%"  details= {events[0 ]} />

          </div>

          {/*  past events card stack */}

          <div className="past_event_switcher">

            <div className="cards">

              {
                events.slice(0 , events.length).reverse().map((event ,index)=>{

                  return (

                    <div 
                        className="card1 card" 
                        style={{
                          right :  positions[index]*20 ,
                          zIndex: 1000+positions[ index],  
                          height: `${85 + ( positions[index])*3}%`,
                         
                        }}

                        onClick={changeEvent}
                        >{ event[0]}

                        {/* <img src= { events[ positions[index] ][1]  } alt="" /> */}
                    </div>
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
