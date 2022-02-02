import React, { useEffect, useState } from "react";
import { SnipIt } from "./SnipIt";
import { getAllSnipIts } from "../modules/snipItManager";

const SnipItList = () => {
    const [snipits, setSnipIts] = useState([]);

    const getSnipIts = () => {
        getAllSnipIts().then(snipit => setSnipIts(snipit));
    };

    useEffect(() => {
        getSnipIts();
    }, []);

    return (
        <div className="Container">
            <div className="row justify-content-center">
                {snipits.map((snipit) => (
                    <>
                        <SnipIt snipit={snipit} key={snipit.id} setSnipIts={setSnipIts} />

                    </>
                ))}
            </div>
        </div>
    );
};

export default SnipItList