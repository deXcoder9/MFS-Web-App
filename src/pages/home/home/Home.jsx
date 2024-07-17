import { Link } from "react-router-dom";
import useUserInfo from "../../../hooks/useUserInfo";

const Home = () => {
  const [userDetails] = useUserInfo();
  console.log(userDetails);
  const role = userDetails?.role;
  const { email, mobile, balance, name } = userDetails;
  return (
    <div>
      {/* --------------------------  U S E R   R O L E  ------------------------------ */}

      {role === "user" && (
        <div className="text-black flex justify-center  flex-col items-center">
          <div className=" bg-gray-400 w-2/3 py-7 rounded-tl-2xl rounded-br-3xl rounded-tr-md mt-4 text-center">
            <h1 className="text-2xl">Balance: {balance} $</h1>
          </div>
          <div
            id="card__Container"
            className="grid grid-cols-2 gap-x-5 gap-y-5 mt-7"
          >
            <Link to="/sendmoney">
              <div className="grid place-items-center bg-slate-400 px-6 rounded-lg py-2">
                <img
                  width="35"
                  src="https://img.icons8.com/external-flat-glyph-papa-vector/78/000000/external-Send-Money-banking-flat-glyph-papa-vector-2.png"
                  alt="image"
                />
                <h1>Send Money</h1>
              </div>
            </Link>
            <div className="grid place-items-center bg-slate-400 px-6 rounded-lg py-2">
              <img
                width="35"
                src="https://img.icons8.com/external-flat-glyph-papa-vector/78/000000/external-Send-Money-banking-flat-glyph-papa-vector-2.png"
                alt="image"
              />
              <h1>Cash Out</h1>
            </div>
            <div className="grid place-items-center bg-slate-400 px-6 rounded-lg py-2">
              <img
                width="35"
                src="https://img.icons8.com/external-flat-glyph-papa-vector/78/000000/external-Send-Money-banking-flat-glyph-papa-vector-2.png"
                alt="image"
              />
              <h1>Cash In</h1>
            </div>
            <div className="grid place-items-center bg-slate-400 px-6 rounded-lg py-2">
              <img
                width="35"
                src="https://img.icons8.com/external-flat-glyph-papa-vector/78/000000/external-Send-Money-banking-flat-glyph-papa-vector-2.png"
                alt="image"
              />
              <h1>History</h1>
            </div>
          </div>
          {/* Name,Email address, Phone number, Account Balance)  */}
          <div className="grid place-items-center bg-slate-400 px-6 mt-7 space-y-2 rounded-lg py-2">
            <p>Name: {name}</p>
            <p>Email Address: {email}</p>
            <p>Phone Number: {mobile}</p>
          </div>
        </div>
      )}
      {role === "admin" && (
        <div className="flex justify-center  flex-col items-center">
          <div className="grid place-items-center bg-slate-400 px-6 mt-7 space-y-2 rounded-lg py-2 text-black">
            <p>Name: {name}</p>
            <p>Email Address: {email}</p>
            <p>Phone Number: {mobile}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
