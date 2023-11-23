import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useTan from "../useTan";

const Card = ({ item }) => {
    const { name, recipe, image, price, category, _id } = item || {};
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [, refetch] = useTan();

    const handleAddToCart = () => {

        if (user) {
            const item = { email: user.email, itemId: _id, name, price };

            axios.post('http://localhost:5000/order', item).then(res => {

                if (res.data.insertedId) {
                    alert(`${name} is added to your card`);
                    refetch();
                }

            }).catch(err => console.log(err));

        } else {
            const yesLogin = confirm('Please LogIn');

            if (yesLogin) {
                navigate("/login", { state: location.pathname })
            }
        }
    };

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="font-bold">Category: {category}</p>
                    <p>{recipe}</p>
                    <h2 className="text-2xl">${price}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;