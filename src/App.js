import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Community from './components/Community/Community';
import Settings from './components/Settings-/Settings';
import {Route, Routes,BrowserRouter} from 'react-router-dom';
const  App = () =>  {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/dialogs' element={<Dialogs />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/community' element={<Community/>}/>
            <Route path='/profile' element={<Settings/>}/>
          </Routes>
        </div>
      
        <footer></footer>
      </div>
      </BrowserRouter>
  )
}

export default App;
