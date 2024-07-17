import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const [loginType, setLoginType] = useState(true)
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) =>{
        // console.log( loginType)
        const {mobile, email, pin} = data;

        if(loginType){
            const formData = {
                mobile,
                pin
            }
            // console.log(formData)
            axiosPublic.post( "/loginverifications", formData)
            .then(res=>{
                console.log(res.data)
            })
        }else{
            const formData = {
                email,
                pin
            }
            // console.log(formData)
            axiosPublic.post( "/loginverifications", formData)
            .then(res=>{
                if(res.data.message === 'User logged in successfully'){
                    toast.success('User logged in successfully')
                    localStorage.setItem('user', email)
                    setTimeout( ()=>{
                        navigate('/')
                    }, 1300)
                    
                }else if(res.data.message === 'User not found'){
                    toast.error('User not found')
                }else if(res.data.message === 'Invalid PIN'){
                    toast.error("Invalid Pin")
                }
            })
        }        
        
    }
    return (
        <div>
          <div className="max-w-[700px] mx-auto  bg-gray-700 " >
      <form onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-5 px-16 py-14 "
      >
        {/* register your input into the hook by invoking the "register" function */}
        <div className="flex flex-col space-y-4">
        {
            loginType ? <input type="number" {...register("mobile", {required: true})} placeholder="Mobile Number" /> 
            :
            <input type="email" {...register("email", { required: true })} placeholder="Email" />
        }
        <input type="number"  {...register("pin", {required: true})} placeholder="PIN" />
        </div>

        <button onClick={()=> setLoginType(!loginType)} className="btn btn-sm "> 
            {loginType ? "login with email" : "login with number"} 
            </button>

        {/* include validation with required or other standard HTML validation rules */}
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span className="text-red-600">This field is required</span>}
        <Toaster />
        <input 
        type="submit"
        className="btn btn-primary"
        />
      </form>
    </div>
        </div>
    );
};

export default Login;