import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import MyFunctions from "./fuctions/MyFunctions.jsx";
//import MyPromises from './fuctions/MyPromises.jsx';
// import MyPromisesAll from './functions/MyPromisesAll.jsx';
// import MyPromisesRace from './functions/MyPromisesRace.jsx';
// import MyFetchsAPIs from './functions/MyFetchsAPIs.jsx';
// import MyFetchsAPIs from './functions/MyFetchsAPIs.jsx';
// import MyFetchPost from './functions/MyFetchPost.jsx';
// import MyFetchPut from './functions/MyFetchPut.jsx';
import MyFetchBlob from './functions/MyFetchBlob.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyFunctions/> */}
    {/* <MyPromises/> */}
    {/* <MyPromisesAll/> */}
    {/* <MyPromisesRace/> */}
    {/* <MyFetchsAPIs/> */}
    {/* <MyFetchPost/> */}
    {/* <MyFetchPut/> */}
    <MyFetchBlob/>
  </StrictMode>,
);