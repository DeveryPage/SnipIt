import React, { useEffect, useState } from "react";
import { SnipIt } from "./SnipIt";
import { getAllSnipIts } from "../modules/snipItManager";
import { getCurrentUser } from "../modules/authManager";

const SnipItList = () => {
    const [snipits, setSnipIts] = useState([]);

    const [user, setUser] = useState({});

    const getSnipIts = () => {
        getAllSnipIts().then(snipit => setSnipIts(snipit));
    };

    const getUserById = () => {
        return getCurrentUser().then(user => {
            setUser(user)
        });
    }

    useEffect(() => {
        getUserById().then(() => getSnipIts());
    }, []);

    return (
        <div className="Container">
            <div className="row justify-content-center">
                {snipits.map((snipit) => (

                    <SnipIt snipit={snipit} key={snipit.id} setSnipIts={setSnipIts} user={user} />


                ))}
            </div>
        </div>
    );
};

export default SnipItList