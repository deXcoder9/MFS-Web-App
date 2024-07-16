import { useForm } from "react-hook-form";

const SendMoney = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const money =parseInt(data.money)
    
    console.log( money)
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
        <input className="btn " type="submit" />
      </form>
    </div>
  );
};

export default SendMoney;
