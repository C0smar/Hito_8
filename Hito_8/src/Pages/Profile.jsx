import React, { useEffect, useState, useContext } from "react";
import { MyContext } from "../Context";

const Profile = () => {
  const { email, logout, getProfile } = useContext(MyContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      setProfile(data);
    };
    fetchProfile();
  }, [getProfile]);

  return (
    
    <div className="profileContainer">
      <div className="profileCard">
        <img
          className="profileImg"
          src="profile_logo.png"
          alt="placeholder de perfil"
          />
        <h1>Perfil de Usuario</h1>
        <p>Email: {email}</p>
        {profile && <p>Nombre: {'usuario'}</p>}
        <button className="btnProfile" onClick={logout}>
          Cerrar Sesión
        </button>
      </div>
    </div>
    
  );
};

export default Profile;
