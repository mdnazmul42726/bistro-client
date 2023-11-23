import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Category from "../components/Category";
import PopulerItems from "../components/PopulerItems";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <div className="bg-[url('https://i.ibb.co/k4K3BBp/chef-service.jpg')] mt-36 hidden lg:flex items-center w-[80%] mx-auto h-96 bg-cover">
                <div className="bg-white w-[65%] h-60 mx-auto">
                    <div className="text-center p-10">
                        <h1 className="text-3xl uppercase mb-4">bistro boss</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum reprehenderit ex ea culpa laboriosam cupiditate amet natus dolorem omnis doloremque est ipsum maiores nostrum autem, asperiores odio fugit totam quis eius adipisci fugiat iusto optio.</p>
                    </div>
                </div>
            </div>
            <PopulerItems />
        </div>
    );
};

export default Home;