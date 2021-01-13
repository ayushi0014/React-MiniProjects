import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import SideBar from './SideBar';
import Pusher from 'pusher-js';
import axios from 'axios';

function App() {
  
  const [messages, setMessages] = useState([]);  
  
  useEffect(() => {
    axios.get('http://localhost:9000/messages/sync')
    .then(response => {
      setMessages(response.data);
    })
  },[])

  useEffect(() => {
    const pusher = new Pusher('824651d1f50d2e146093', {
      cluster: 'ap2'
    },[]);

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });


    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  console.log(messages);  

  return (
    <div className="app">
      <div className = "app__body">
        <SideBar />
        <Chat messages={messages} />
      </div>
      
    </div>
  );
}

export default App;
