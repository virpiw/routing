import React from 'react';
import {Link} from 'react-router-dom'
export default function Home() {
    return (
        <div>
            At Home
            <Link to="/about">About</Link>
        </div>
    )
}
