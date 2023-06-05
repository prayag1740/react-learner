// var React = require('react') ; // no need to use this format, babel will automatically convert to lower format;
//babel is a javascript compiler
import React from 'react';
import './index.css' ;
import { Routes , Route } from 'react-router-dom';
import Netflix from './components/Netflix';
import AmazonPrime from './components/AmazonPrime';
import TodoList from './components/TodoList'
import TodoListMaterial from './components/TodoListMaterial'
import Home from './components/Home';
import ReactChallenge8 from './components/ReactChallenge8'
import GoogleKeep from './components/GoogleKeep'
// import OrderedList, {myName} from './components/OrderedList';


// parameters for render method -- kya dikhana hai, kahan dikhana hai, callback function
// DOM is used to access element by ID
//React module is used for JSX
// JSX -- <h1> Hello World </h1>
//Babel converts the JSX code to a format that is understood by browser




const greetingStyle = {}

// const flname = "Prayag Bhatia"
var today = new Date();
// var date = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate() ;
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var currHour = today.getHours()



if (currHour >= 1 && currHour < 12) {
  greetingStyle.color = 'green'
} else if (currHour >= 12 && currHour < 19) {
  greetingStyle.color = 'orange'
} else {
  greetingStyle.color = 'black'
}



export default function App() {
  // let [count, setCount] = useState(0) ;

  // const IncNum =  () => {
  //   count++ ;
  //   setCount(count);
  // }

  // var today = new Date();

  
  // var time = new Date().toLocaleTimeString() ;
  // let [currTime, setCurrTime] = useState(time);

  // const fetchLatestTime = () => {
  //   currTime = new Date().toLocaleTimeString() ;
  //   setCurrTime(currTime);
  // }

  // setInterval(fetchLatestTime, 2000);

 return (
    <>
  {/* <div className='box'>
    <h1 style={commonText}> Hello Sir, <span style={greetingStyle}> {greeting} </span>
    </h1>
  </div>
  <h2>My name is {myName}</h2>
    <OrderedList></OrderedList> */}

    {/* <h1 className='heading'> Slot machine Game </h1>
    <SlotM />
     */}

     {/* <h1> {count} </h1>
     <button onClick={IncNum}>Click me</button> */}

     {/* <h1 className='heading'> {currTime}</h1> */}
     {/* <button onClick={fetchLatestTime}>Get Time</button> */}

     {/* <button>Click me</button> */}
      <Routes>
        <Route exact path="/netflix" element={<Netflix />} />
        <Route exact path="/amazonprime" element={<AmazonPrime />} />
        <Route exact path="/todoapp" element={<TodoList />} />
        <Route exact path="/todoapp2" element={<TodoListMaterial />} />
        <Route exact path="/changevariable" element={<ReactChallenge8 />} />
        <Route exact path="/googlekeep" element={<GoogleKeep />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
  </>
  )
};