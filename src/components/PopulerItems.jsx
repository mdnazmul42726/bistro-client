import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Populer from "./Populer";

const PopulerItems = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json').then(res => res.json()).then(data => {
            const popularItem = data.filter(item => item.category === 'popular');
            setMenu(popularItem)
        })
    }, []);


    return (
        <div className="w-[80%] mx-auto mb-20">
            <SectionTitle heading={"from our menu"} subheading={'popular item'} />
            <div className="grid md:grid-cols-2 gap-6 mt-10">
                {
                    menu.map(item => <Populer key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default PopulerItems;