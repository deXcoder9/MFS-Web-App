import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Allusers = () => {

    const axiosSecure = useAxiosSecure()

    const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/info')
            return res.data
        }
    })

    // handling block
    const handleBlock = (id) =>{
        axiosSecure.patch(`/blockuser/${id}`)
       .then(res => {console.log(res.data)})
       refetch()
    }

    // handling block
    const handleUnblock = (id) =>{
        axiosSecure.patch(`/unblockuser/${id}`)
       .then(res => {console.log(res.data)})
       refetch()
    }

    console.log(users)


  return (
    <div className="overflow-x-auto">
      <table className="table text-black min-h-[300px] ">
        {/* head */}
        <thead>
          <tr className="text-black">
            <th></th>
            <th>Name</th>
            <th>role</th>
            <th>status</th>
            <th></th>
          </tr>
        </thead>
        <tbody >
          {/* row 1 */}
          {
            users?.map((user, idx) =>  <tr key={idx}>
            <th>{idx +1}</th>
            <td>{user.name}</td>
            {/* <td className="text-xs">{user.mobile} <br /> {user.email}</td> */}
            <td>{user.role}</td>
            <td>{user.status}</td>
            <td>
              <div className="dropdown dropdown-left">
                <div tabIndex={0} role="button" className="btn btn-xs ">
                  modify
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu  rounded-box z-[1] w-42 p-2 shadow bg-gray-400"
                >
                  <li onClick={()=> handleBlock(user._id)}>
                    <a>block</a>
                  </li>
                  <li onClick={() => handleUnblock(user._id)}>
                    <a>active</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr> )
          }
         
         
        </tbody>
      </table>
    </div>
  );
};

export default Allusers;
