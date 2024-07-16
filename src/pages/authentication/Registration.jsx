import { useForm } from "react-hook-form";
import "./style.css"
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Registration = () => {
  const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data)
    // const {email, mobile, name, pin}  = data;


    const formData = {
        ...data,
        status: "pending"
    }
    axiosPublic.post('/registration', formData)
    .then(res =>{
      console.log(res.data)
    })

  };

  return (
    <div className="max-w-[700px] mx-auto  bg-gray-700 " >
      <form onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-7 px-16 py-14 "
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input type="text" {...register("name", {required: true}) } placeholder="Name" />
        <input type="number"  {...register("pin", {required: true})} placeholder="PIN" />
        <input type="number" {...register("mobile", {required: true})} placeholder="Mobile Number" />

        {/* include validation with required or other standard HTML validation rules */}
        <input type="email" {...register("email", { required: true })} placeholder="Email" />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span className="text-red-600">This field is required</span>}

        <input 
        type="submit"
        className="btn btn-primary"
        />
      </form>
    </div>
  );
};

export default Registration;
