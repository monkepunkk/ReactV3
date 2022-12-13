import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let postsData = [
  {message:'Alo ebat',likes : '7'},
  {message:'Eto kto?', likes:'9'}
]
let dialogsData = [
  {id:'1', name :'Oleg'},
  {id:'2', name :'Lexa'},
  {id:'3', name :'Vlados'},
  {id:'4', name :'Diman'},
  {id:'5', name :'Eblan'}, 

]
let messagesData = [
  {id:'1', text :'Flapab'},
  {id:'2', text :'Lubadabun'},
  {id:'3', text :'Badunkek'},
  {id:'4', text :'Rofloeb'},
  {id:'5', text :'Kukanduk'}, 

]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  postsData = {postsData}
          dialogsData = {dialogsData} 
          messagesData = {messagesData}
                                        />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
