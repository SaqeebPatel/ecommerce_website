import React from "react";
import "./Sidebar.css"; // Add necessary styles here

const Sidebar = ({ isOpen, toggleSidebar, handleLogout }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* <button onClick={toggleSidebar} className="btn btn-close mt-5">
        Close
      </button> */}
      <button onClick={handleLogout} className="btn btn-outline-danger">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
