// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import {ContadorHook} from './components/ContadorHook';
// import { Login } from "./components/Login";
// import { Usuarios } from "./components/Usuarios";
import { Formularios } from "./components/Formularios";

function App() {
  // const [count, setCount] = useState(0)
  //const App = () => {}

    return (
      <div>
        <h1>Introducción a Type Script with React</h1>
        <hr/>
        {/*</TiposBasicos>*/}
        {/*<ObjetosLiterales/>*/}
        {/* {<ContadorHook/>} */}
        {/* {<Login/>} */}
        {/* {<Usuarios/>} */}
        {<Formularios/>}
      </div>
    )

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

}

export default App
