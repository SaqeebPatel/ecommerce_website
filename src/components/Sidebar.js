import React from "react";
import "./Sidebar.css"; 

const Sidebar = ({ isOpen, toggleSidebar, handleLogout }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button onClick={handleLogout} className="btn btn-outline-danger mt-5">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
