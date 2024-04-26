import React, { useState } from 'react';
import './MenuCircle.css'
const MenuCircle = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
        document.querySelector(".toggle").classList.toggle("active");
        document.querySelector(".menu").classList.toggle("active");
    }

    const activeLink = (event) => {
        const listItems = document.querySelectorAll(".menu li");
        listItems.forEach((item) => {
            item.classList.remove("active");
        });
        event.target.parentElement.classList.add("active");
    }

    const listItems = [
        { icon: "home-outline", url: "#" },
        { icon: "person-outline", url: "#" },
        { icon: "chatbubble-outline", url: "#" },
        { icon: "mail-outline", url: "#" },
        { icon: "videocam-outline", url: "#" },
        { icon: "camera-outline", url: "#" },
        { icon: "settings-outline", url: "#" },
        { icon: "key-outline", url: "#" }
    ];

    return (
        <div className={`container ${menuActive ? 'active' : ''}`}>
            <ul className="menu">
                <div className="toggle" onClick={toggleMenu}>
                    <ion-icon name="add-outline"></ion-icon>
                </div>
                {listItems.map((item, index) => (
                    <li key={index} style={{ '--i': index }} onClick={activeLink}>
                        <a href={item.url}>
                            <ion-icon name={item.icon}></ion-icon>
                        </a>
                    </li>
                ))}
                <div className="indicator"></div>
            </ul>
        </div>
    );
}

export default MenuCircle;
