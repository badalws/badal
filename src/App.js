
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  var toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = 'midnightblue'
      showAlert('Dark Mode Enabled','Success')
    }
    else{
      setMode('light')
      document.body.style.background = 'white'
      showAlert('Dark Mode Disabled','Success')
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Badal4u" mode={mode} toggleMode={toggleMode} aboutText="About Us"/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
        <Route exact path="/about" element={<About />} />
          <Route path="/"> 
          < Route exact path="/" element= {<TextForm heading="Enter Text" mode={mode}/>} />
          </Route>
        </Routes>
      </div>
   </Router>
      {/* <Navbar title="Badal4u" mode={mode} toggleMode={toggleMode} aboutText="About Us"/>
      <Alert alert={alert}/>
      <div className='container'>
        <TextForm heading="Enter Text" mode={mode}/> */}
        {/* <About>
           
        </About> */}
        {/* </div> */}
    </>  
    );
}

export default App;
