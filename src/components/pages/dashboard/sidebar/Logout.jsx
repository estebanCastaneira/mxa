import { useDispatch } from "react-redux";
import { logout } from "../../../../redux_config/authSlice";
import { clearArticles } from "../../../../redux_config/articleSlice";
import { clearStaff } from "../../../../redux_config/staffSlice";
import { clearAdmins } from "../../../../redux_config/adminSlice";
import logoutIcon from "/img/icons/logout.png";
import axios from "axios";

function Logout() {
  const dispatch = useDispatch();
  const handleOnClick = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACK_URL}/admin/logout`
      );

      response &&
        (dispatch(logout()),
        dispatch(clearArticles()),
        dispatch(clearStaff()),
        dispatch(clearAdmins()));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="bg-red-500 border border-main-800 rounded-full flex flex-col justify-center items-center p-4 hover:opacity-90 hover:cursor-pointer w-fit mb-10"
      onClick={handleOnClick}
    >
      <img className="w-9" src={logoutIcon} alt="logout icon" type="svg img" />
      <p className="text-white">Logout</p>
    </div>
  );
}
export default Logout;
