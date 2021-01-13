import React, { useEffect, useState } from 'react';
import ProfilePic from './ProfilePic';
import axios from 'axios';

function Profile() {

    const [state, setState] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("http://localhost:8001/tinder/card");
            setState(req.data);
        }
        fetchData();
    }, [])

    return (
        <div>
            {state.map((person) => {
                <ProfilePic person />
            })}
        </div>
    )
}

export default Profile
