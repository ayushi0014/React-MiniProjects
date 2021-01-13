import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic } from '@material-ui/icons'
import React, { useState } from 'react'
import './Chat.css'
import axios from 'axios';

function Chat({ messages }) {

    const [input, setInput] = useState('');

    const  sendMessage = async (e) => {
         e.preventDefault(); 
        await axios.post('http://localhost:9000/messages/new',{
            message: input,
            name: "Ayushi",
            timeStamp: "Just now!",
            recieved: true
         });
         setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton >
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((message) =>(
                    <p className={`chat__message ${message.recieved && "chat__reciever"}`}>
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat_timeStamp">
                        {message.timeStamp}
                    </span>
                </p>
                ))}
                
            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form>
                    <input 
                        value={input}
                        onChange ={e => setInput(e.target.value) }
                        placeholder="Type a message"
                        type="text"
                    />
                    <button
                        type="submit"
                        onClick={sendMessage}
                    >
                        Send a message
                    </button>
                </form>
                <IconButton>
                <Mic />
                </IconButton>
                
            </div>
        </div>
    )
}

export default Chat
