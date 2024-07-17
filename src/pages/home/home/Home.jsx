import { Link } from "react-router-dom";
import useUserInfo from "../../../hooks/useUserInfo";



const Home = () => {
    const [userDetails] = useUserInfo()
    console.log(userDetails)
    const role = userDetails?.role
    const {email, money, mobile, name, } = userDetails
    return (
        <div>

            {
                role ===  "user" && <div className="text-black flex justify-center  flex-col items-center" >
                <div className=" bg-gray-400 w-2/3 py-7 rounded-tl-2xl rounded-br-3xl rounded-tr-md mt-4 text-center">
                <h1 className="text-2xl">Balance: 213131$</h1>
                </div>
                <div id="card__Container" className="grid grid-cols-2 gap-x-5 gap-y-5 mt-7">
                    <Link to="/sendmoney">
                    <div className="grid place-items-center bg-slate-400 px-6 rounded-lg py-2">
                    <img width="35" src="https://img.icons8.com/external-flat-glyph-papa-vector/78/000000/external-Send-Money-banking-flat-glyph-papa-vector-2.png" alt="image"/>
                        <h1>Send Money</h1>
                    </div>
                    </Link>
                    <div className="grid place-items-center bg-slate-400 px-6 rounded-lg py-2">
                    <img width="35" src="https://img.icons8.com/external-flat-glyph-papa-vector/78/000000/external-Send-Money-banking-flat-glyph-papa-vector-2.png" alt="image"/>
                        <h1>Cash Out</h1>
                    </div>
                    <div className="grid place-items-center bg-slate-400 px-6 rounded-lg py-2">
                    <img width="35" src="https://img.icons8.com/external-flat-glyph-papa-vector/78/000000/external-Send-Money-banking-flat-glyph-papa-vector-2.png" alt="image"/>
                        <h1>Cash In</h1>
                    </div>
                    <div className="grid place-items-center bg-slate-400 px-6 rounded-lg py-2">
                    <img width="35" src="https://img.icons8.com/external-flat-glyph-papa-vector/78/000000/external-Send-Money-banking-flat-glyph-papa-vector-2.png" alt="image"/>
                        <h1>History</h1>
                    </div>
                </div>
                {/* Name,Email address, Phone number, Account Balance)  */}
                <div>
                    <p>
                        Name: {userDetails.name}
                        <br/>
                        Email: {userDetails.email}
                        <br/>
                        Phone: {userDetails.mobile}
                        <br/>
                        Balance: {userDetails.money}$
                    </p>
                </div>
            </div>
            }
            </div>
        
    );
};

export default Home;