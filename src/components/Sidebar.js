import React from "react";
import "./Sidebar.css"; // Add necessary styles here

const Sidebar = ({ isOpen, toggleSidebar, handleLogout }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button onClick={toggleSidebar} className="btn btn-close">
        Close
      </button>
      <button onClick={handleLogout} className="btn btn-primary">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
