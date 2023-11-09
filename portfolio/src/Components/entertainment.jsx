import React from "react";
import hobbies from './hobbies.json';

export default function Entertainment() {
    return (
        <div id='entertainment'>
            <h1 className="heading">My Hobbies</h1>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>
                        <div className="hobby">
                            <i className={hobby.icon}></i>
                            <h3>{hobby.title}</h3>
                            <p>{hobby.par}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
