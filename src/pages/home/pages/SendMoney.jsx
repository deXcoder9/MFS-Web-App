import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useUserInfo from "../../../hooks/useUserInfo";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SendMoney = () => {
  const axiosSecure = useAxiosSecure()
  const [errorMessage, setErrorMessage]  = useState(null)
  const [userDetails] = useUserInfo()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  

  const onSubmit = (data) => {
    console.log("inputeddata", data )
    const sendMoney =parseInt(data.money)
    const balance = parseInt(userDetails.balance)
    const currentUserId =userDetails._id 
    // console.log(currentUserId)
    // console.log(userDetails)
    console.log('sendmoney', sendMoney)
    console.log('balance', balance)

    if(sendMoney >= 100){
      // todo: main balance diya 5 taka kaita nite hobe
      let currentBalance = balance - sendMoney;
      console.log('current balance', currentBalance)

      // todo: current balance ta set krte hobe main user er balance e 
     axiosSecure.patch(`/updatebalance/${currentUserId}`, {balance: currentBalance})
     .then(res => console.log("current balance updated successfully", res.data))


      // todo: je number e pathano hoisa shei number a inputed MOney add korte hobe


    }
    if(sendMoney < 50 ){
      // todo: sendMoney kora jabe nah!!
      return setErrorMessage('Amount must be at least 50 or higher')
    }
    if( sendMoney >=50 ){
      // todo: taile tumi send sendMoney krte prba
      
    }
    

};

  return (
    <div className=" text-black   ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-400 mt-4 px-4 py-6 space-y-3 flex w-3/4 mx-auto flex-col"
      >
        <p className="text-xs font-semibold underline">Enter Number:</p>
        <input
          className="border-[2px] border-black bg-white"
          type="number"
          placeholder=""
          {...register("mobile", { required: true })}
        />{" "}
        {errors.mobile && (
          <span className="text-xs text-red-500">This field is required</span>
        )}
        <p className="text-xs font-semibold underline">Enter Amount:</p>
        <input
          className="border-[2px] border-black bg-white"
          type="number"
          placeholder=""
          {...register("money", { required: true })}
        />
        {errors.money && (
          <span className="text-xs text-red-500">This field is required</span>
        )}
        <p className="text-xs font-semibold underline">Enter PIN:</p>
        <input
          type="number"
          className="border-[2px] border-black bg-white"
          {...register("pin", { required: true })}
        />
        {errors.pin && (
          <span className="text-xs text-red-500">This field is required</span>
        )}
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        <input className="btn " type="submit" />
      </form>
    </div>
  );
};

export default SendMoney;
