import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const useTan = () => {
    const { user } = useContext(AuthContext);

    const { data, refetch, isPending } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => await axios.get(`http://localhost:5000/orders?email=${user?.email}`)
    });

    return [data, refetch, isPending]
};

export default useTan;