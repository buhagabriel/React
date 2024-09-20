import "../LoginSingup/LoginSingup.css"
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


function LoginSingup() {
  return (
    <>
    <RiLockPasswordFill />
    <IoPerson />
    <MdEmail />
    <div className="container">
      <div className="signin">
    
      </div>
      <div className="signup"></div>
    </div>
    </>
  )
}

export default LoginSingup
