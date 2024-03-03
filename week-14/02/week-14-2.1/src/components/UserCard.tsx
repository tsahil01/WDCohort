import axios from "axios";
import { useEffect, useState } from "react"
import { Spinner } from "./Spinner";

interface User {
    name: string;
    email: string;
}

export const UserCard = () => {
    const [userData, setUserData] = useState<User>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
            .then(response => {
                setUserData(response.data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <Spinner />
    }

    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
}