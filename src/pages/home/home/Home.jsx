import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div className="text-black flex justify-center  flex-col items-center" >
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
            
        </div>
    );
};

export default Home;