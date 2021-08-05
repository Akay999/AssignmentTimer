import './App.css';
import React, { useState } from 'react';
import BtnComp from './components/ButtonComponent';
import DisplayComp from './components/DisplayComponent';
import pencil from './SVGIcons/pencil.svg';

function App() {
  const [time, setTime] = useState({s: 0, m: 5});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(4);
  const [DisColor, setDiscolor] = useState("#6BB33F");

  const pause = () => {
    clearInterval(interv);
    setStatus(2);
  }

  const cancel = () => {
    setStatus(4);
    clearInterval(interv);
    setTime({s:0, m : 5});
  }

  const stop = () => {
    clearInterval(interv);
    setDiscolor("#B33F3F");
    setStatus(4);
  }

  const start = () => {
    setDiscolor("#6BB33F");
    setStatus(1);
    run();
    setInterv(setInterval(run, 1000));
  }

  
  var UpdatedS = time.s, Updatedm = time.m;

  const run = () => {
    if(UpdatedS === 0){
      Updatedm--;
      UpdatedS = 60;
    }
    if(Updatedm === 0){
      setDiscolor("#B33F3F");
      return setTime({s: 0, m : 0});  
    }
    UpdatedS--;
    return setTime({s: UpdatedS, m : Updatedm});
  }

  return (
    <div className="main-container">
      <main className='TimerContainer'>
         <h3> <span>Timer</span> <img src={pencil} alt='Pencil Icon' width={30}/> </h3>
         <p>The timer goes of Here</p>
          <DisplayComp time={time} color={DisColor} />
         <div className='Btn-Container'>
          <BtnComp type={status} start={start} pause={pause} />
          <BtnComp type={0} cancel={cancel} />
          {(status !== 4) ? <BtnComp type={3} stop={stop} /> : ""}
         </div>

         <span className='Subheading'> About This timer : </span>  
         <ul>
           <li>Counting down from 5:00 </li>
           <li>stop will set the default set saving the time </li>
           <li>pause will just freeze the time not tampering with the state </li>
           <li>cancel will reset the time and state</li>
           <li>Visible Only to host </li>
         </ul>
      </main>
    </div>
  );
}

export default App;
