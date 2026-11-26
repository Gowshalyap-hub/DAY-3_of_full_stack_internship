// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import Students from './components/Students'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//       {/* <Students />
//       <Students /> */}

//         <Students name="gowshalya" age="20" />
//         <Students name="gayathri" age="5" />
//         <Students name="asma" age="15" />
//         <Students name="dhanushree" age="25" />

//     </>
//   )
// }

// export default App




// import './App.css';
// import Boxes from './components/Boxes';

// function App() {
//   return (
//     <div className="page">

//       <div className="heading">
//         <span>EXPLORE • CREATE • GROW</span>
//         <h1>Choose Your <i>Passion.</i></h1>
//         <p>Discover something new. Learn something amazing.</p>
//       </div>

//       <div className="box-container">

//         <Boxes
//           number="01"
//           category="CREATIVE DESIGN"
//           title="Design Studio"
//           description="Turn your imagination into beautiful digital experiences."
//           image="https://images.unsplash.com/photo-1558655146-d09347e92766?w=700"
//           bg="#fce8df"
//           buttonColor="#f16b45"
//           buttonText="Explore Now"
//         />

//         <Boxes
//           number="02"
//           category="TECHNOLOGY"
//           title="Code Academy"
//           description="Build your skills and create something extraordinary."
//           image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
//           bg="#e2edff"
//           buttonColor="#3267d6"
//           buttonText="Start Learning"
//         />

//         <Boxes
//           number="03"
//           category="PHOTOGRAPHY"
//           title="Visual Stories"
//           description="Capture moments and express your creative vision."
//           image="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=700"
//           bg="#f6edcf"
//           buttonColor="#b58a20"
//           buttonText="Discover More"
//         />

//       </div>

//     </div>
//   );
// }

// export default App;


//vite and hooks
// import { useState } from 'react';
// function App() {
// const [count, setCount] = useState(0); // useState is a hook that allows us to add state to functional components. 
// // It returns an array with two elements: the current state value (count) and a function to update that state (setCount).

//   function increment() {
//     setCount(count + 1);
//     console.log(count+1); // This will log the current value of count before it is updated.
//   }
  
//   function decrement() { // increment and decrement functions are used to update the count state using => functions in the button itself
  
//     setCount(count - 1);
//     console.log(count-1);
//   }
//   return (
//     <div>
//     <h1>Counter: {count}</h1>
//     <button onClick={increment}>Increment</button>
//     <button onClick={decrement}>Decrement</button>
//     <button onClick={() => setCount(0)}>Reset</button>

//     {/* <button onClick={() => setCount(count + 1)}>Increment</button>
//     <button onClick={() => setCount(count - 1)}>Decrement</button>
//     <button onClick={() => setCount(0)}>Reset</button> */}
//     </div>
//   )
// }

//use state to calculate total of two counts with different values
// import { useState } from 'react';
// function App() {

//   const [count4, setCount4] = useState(0);
//   const [count6, setCount6] = useState(0);
//   const [total, setTotal] = useState(0);

//   function incrementCount4() {
//   setCount4(count4 + 1);
//   setTotal((count4 + 1) * 4 + count6 * 6);
// }

//   function incrementCount6() {
//   setCount6(count6 + 1);
//   setTotal(count4 * 4 + (count6 + 1) * 6);
// }
 
//   return (
//     <div>
//       <button onClick={incrementCount4}>Increment Count 4</button>
//       <button onClick={incrementCount6}>Increment Count 6</button>
//       <button onClick={() => {setCount4(0); setCount6(0); setTotal(0);}}>Reset</button>
//       <p>Total: {total}</p>
//       <p>Count 4: {count4}</p>
//       <p>Count 6: {count6}</p>
//     </div>
//   )
// }


/*use effect -without dependence array
1.  without dependence array
        it will run at initial render
        after every subsequent render
    useEffect(() => {
    console.log('user Effect is working');
  })

2. with dependence array
      add the empty array at the end of closing the userEffects
      it will run at initial render
      again it will never render

    useEffect(() => {
    console.log('user Effect is working');
  },[])

3. dependence array with value
      it will run at initial render
      if we update the count , then it will render

import { useEffect,usestate} from 'react';
function App() {
const [count, setcount]= usestate{0};  ****

  useEffect(() => {
    console.log('user Effect is working');
  },[count]) *****

  return (
    <div>
    <h1> count :{count} </h1>
    <button onclick={()=> setcount(count+1)}>Incerment</button>
    </div>
  )
}
export default App;

//  rendering is nothing but calling the useEffect 

*/

import { useEffect , useState} from 'react';
function App() {

  const [count, setcount]= useState(0);
  // useEffect(() => {
  //   console.log('user Effect is working');
  // })
// to change the title of the page: 2 ways 

    // worst way -> change every time because it is without dependence
  /*useEffect(() => {
       document.title="render app";
 }) */
      //  best way -> change only once because it is with dependence
useEffect(() => {
       document.title="render app:"+count;
 },[count])

  return (
    <div>
      <h1> count :{count} </h1>
    <button onClick={()=> setcount(count+1)}>Incerment</button>
    </div>
  )
}
export default App;