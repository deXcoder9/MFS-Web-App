import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useUserInfo = () => {
    const axiosSecure = useAxiosSecure()
    const userSource = localStorage.getItem('user')
    const data ={user: userSource }
    // console.log("useUserInfo hook: - ", data)

    const { data: userDetails = {} , refetch } = useQuery({
        queryKey: ["users", userSource],
        queryFn: async () => {
          const res = await axiosSecure.post('/userinfo', data );

        //   console.log(res.data)
          return res.data;
        },
      });
      return [ userDetails, refetch ];
};

export default useUserInfo;