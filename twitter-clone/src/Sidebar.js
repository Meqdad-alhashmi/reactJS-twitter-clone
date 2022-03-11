import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';

function Sidebar() {
  return (
    <div className='sidebar'>
        {/* Twitter icon */}
        <TwitterIcon />

        <SidebarOption text={"Home"} />
        <SidebarOption text={"Explore"}/>
        <SidebarOption text={"Notifications"}/>
        {/* sidebarOption */}
        {/* sidebarOption */}
        {/* sidebarOption */}
        {/* sidebarOption */}
        {/* sidebarOption */}
        {/* sidebarOption */}

        {/* New tweet */}

    </div>
  )
}

export default Sidebar