import images from "../Contants/Images";
const Header = () => {
  return (
    <div className=" z-10 absolute w-full  bg-gradient-to-b from-black ">
      <img className="w-40" src={images.Netflix_logo} alt="logo" />
    </div>
  );
};

export default Header;
