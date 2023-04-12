import { useState } from 'react'
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import {FaSignOutAlt} from 'react-icons/fa';
import "./Sidebar.css";

export default function Sidebar() {

  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);


  return (
    <div className='sidebar'>
        <div className="logo">
            <img src={Logo} alt="logo" />
            <span>
                Sh<span>o</span>ps
            </span>
        </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon className='icon' />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <FaSignOutAlt className='icon' />
        </div>
      </div>
    </div>
  )
}
