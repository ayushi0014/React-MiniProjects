import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChats.css'

function SidebarChats() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h3>Room Name</h3>
                <p>Last message</p>
            </div>
            
        </div>
    )
}

export default SidebarChats
