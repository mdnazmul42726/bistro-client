const Populer = ({ item }) => {
    const { name, image, recipe, price } = item;

    return (
        <div>
            <div className="flex gap-4">
                <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[100px]" src={image} alt="" />
                <div className="">
                    <h3 className="text-xl">{name}------</h3>
                    <p>{recipe}</p>
                </div>
                <p className="text-xl text-yellow-600">$ {price}</p>
            </div>
        </div>
    );
};

export default Populer;