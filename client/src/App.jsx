import { Outlet } from 'react-router-dom';
import './App.css';
// import NavBar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer';



function App() {
  return (
      <div className="App">
        <div className="background"></div>
          <div className="main-content">
            {/* <NavBar /> */}
            <Outlet />
            {/* <Footer className='footer-container' /> */}
          </div>
        </div>
      
  );
}

export default App;