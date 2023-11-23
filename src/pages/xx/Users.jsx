import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Users = () => {

    const { data, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => await axios.get('http://localhost:5000/users', { headers: { authorization: `${localStorage.getItem('access-token')}` } })
    });

    function handleMakeAdmin(user) {
        const procid = confirm(`Are you sure ${user.name} make admin?`);

        if (procid) {
            axios.patch(`http://localhost:5000/users/${user._id}`).then(res => {

                if (res.data.modifiedCount > 0) {
                    refetch()
                    alert('success')
                }
            }).catch(err => console.log(err))
        }
    }

    function handleUserDelete(user) {
        const procid = confirm('are you sure?');

        if (procid) {
            axios.delete(`http://localhost:5000/users/${user._id}`).then(res => {

                if (res.data.deletedCount > 0) {
                    refetch()
                    alert('user deleted');
                }

            }).catch(err => console.log(err))
        }
    }

    return (
        <div>
            <div>
                <div className="flex justify-between border-b">
                    <p>Total users: {data?.data?.length}</p>
                </div>
                <div className="mt-20">
                    {data?.data?.map(user => <div key={user._id} className="flex mb-3 justify-between border p-3 items-center">
                        <p className="w-[33.33%]">Name: {user.name}</p>
                        <h3 className="text-xl w-[33.33%]">Role: {user.role ? user.role : 'Customer'}</h3>
                        <button className="btn btn-md" onClick={() => handleMakeAdmin(user)}>Make Admin</button>
                        <button className="btn btn-md bg-red-500 text-white" onClick={() => handleUserDelete(user)}>X</button>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Users;