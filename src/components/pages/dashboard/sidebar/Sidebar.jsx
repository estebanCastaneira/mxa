import Logout from "./Logout";
import admin from "/img/icons/admin.png";
import article from "/img/icons/article.svg";
import user from "/img/icons/user.png";
import logo from "/img/icons/mxa_logo.svg";

function Sidebar({ handleOptionSelected }) {
  return (
    <aside className="bg-gradient-to-b from-white to-main-500 h-screen fixed flex flex-col justify-between items-center">
      <div className="p-2">
        <img className="m-2 w-40" src={logo} alt="MXA Logo" />
      </div>
      <div className="w-full">
        <div
          className="m-5 border border-main-800 bg-white rounded-3xl p-2 flex  justify-around items-center hover:cursor-pointer hover:opacity-90"
          onClick={() => handleOptionSelected("admin")}
        >
          <p>Admin</p>
          <img className="w-10" src={admin} alt="article icon" />
        </div>
        <div
          className="m-5 border border-main-800 bg-white rounded-3xl p-2 flex  justify-around items-center hover:cursor-pointer hover:opacity-90"
          onClick={() => handleOptionSelected("articulos")}
        >
          <p>Artículos</p>
          <img className="w-10" src={article} alt="article icon" />
        </div>
        <div
          className="m-5 border border-main-800 bg-white rounded-3xl p-2 flex justify-around items-center hover:cursor-pointer hover:opacity-90"
          onClick={() => handleOptionSelected("equipo")}
        >
          <p>Equipo</p>
          <img className="w-10" src={user} alt="user icon" />
        </div>
      </div>
      <Logout />
    </aside>
  );
}

export default Sidebar;
