import React, { useEffect, useState } from "react";
import { Language } from "./Language";
import { getAllLanguages } from "../modules/languageManager";
import { useHistory } from "react-router";
import { Button } from "reactstrap";

const LanguageList = () => {
    const [languages, setLanguages] = useState([]);


    const history = useHistory();

    const getLanguages = () => {
        getAllLanguages().then(language => setLanguages(language));
    };

    useEffect(() => {
        getLanguages();
    }, []);

    const handleClickLanguageForm = () => {
        history.push("/languages/create")
    }

    return (
        <div className="Container">
            <div className="row justify-content-center">
                {languages.map((language) => (

                    <Language language={language} key={language.id} setLanguages={setLanguages} />


                ))}
                <Button onClick={handleClickLanguageForm}>Add A Language </Button>
            </div>
        </div>
    );
};

export default LanguageList