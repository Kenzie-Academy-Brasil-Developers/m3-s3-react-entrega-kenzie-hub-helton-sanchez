import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

const UserDash = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="userInformation">
      <h3>Olá, {user.name}!</h3>
      <p className="course">{user.course_module}</p>
    </div>
  );
};

export default UserDash;
