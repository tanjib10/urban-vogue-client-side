import { Link } from "react-router-dom";
import errorImg from "../../assets/8030430_3828537.jpg";
const ErrorPage = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center text-center">
      <img className="w-[50vh]" src={errorImg} alt="" />
      <h3 className="text-3xl font-bold">Oops!!</h3>
      <p className="text-2xl font-semibold">404 Not Found</p>
      <Link to="/" className="mt-2 font-semibold text-lg">
        Return <span className="text-blue-600 ">home</span>
      </Link>
    </div>
  );
};

export default ErrorPage;
