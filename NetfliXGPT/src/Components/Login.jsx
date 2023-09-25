import Header from "./Header";
import images from "../Contants/Images";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="sm:object-contain" src={images.Main_Bg} alt="logo" />
      </div>
      <form className="absolute flex flex-col p-12 w-5/12 bg-black">
        <h1 className="text-white font-bold text-2xl">Sign in</h1>
        <input type="text" placeholder="Email " className=" p-2 m-2" />
        <input type="password" placeholder="Passworld" className=" p-2 m-2" />
        <button className=" bg-white  p-2 m-2">Sign In</button>
      </form>
    </div>
  );
};
export default Login;
