import axios from "axios";
import useTan from "../../useTan";
import { Link } from "react-router-dom";

const Cart = () => {
    const [data, refetch, isPending] = useTan();

    const totalPrice = data?.data.reduce((acc, item) => acc + item.price, 0);

    function handleDelete(_id) {
        const proced = confirm('Are you sure?')

        if (proced) {
            axios.delete(`http://localhost:5000/orders/${_id}`).then(res => {

                if (res.data.deletedCount > 0) {
                    refetch();
                    alert('item deleted!');
                }
            }).catch(err => console.log(err));
        }
    }

    if (isPending) return <p className="text-2xl">Loading</p>

    return (
        <div>
            <div className="flex justify-between border-b">
                <p>Total item: {data?.data?.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <div className="">
                    <Link to={'/dashboard/payment'}> <button className="btn">Pay</button></Link>
                </div>
            </div>
            <div className="mt-20">
                {data.data.map(item => <div key={item._id} className="flex mb-3 justify-between border p-3 items-center">
                    <p className="w-[33.33%]">Name: {item.name}</p>
                    <h3 className="text-xl w-[33.33%]">Price: {item.price}</h3>
                    <button className="btn btn-md" onClick={() => handleDelete(item._id)}>X</button>
                </div>)}
            </div>
        </div>
    );
};

export default Cart;