// src/First.tsx
import React from "react";
import UserForm from "./Signin";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const First: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        top: "20%",
      }}
    >
      <PersonOutlineIcon style={{ fontSize:"4em",marginTop:"40px", color: '#113946' }}/>
      <h1 style={{ color: "#113946",paddingBottom:"40px",margin:"0" }}>User Info</h1>
      <div
        style={{
          padding: "0",
          backgroundColor: "white",
          width: "60% ",
          borderRadius:"5px",
          boxShadow:
            "0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.20)",
        }}
      >
        <UserForm />
      </div>
    </div>
  );
};

export default First;
