import React, { useEffect, useState } from "react";
import { Tag } from "./Tag";
import { getAllTags } from "../modules/tagManager";
import { Button } from "reactstrap";
import { useHistory } from "react-router";

const TagList = () => {
    const [tags, setTags] = useState([]);

    const history = useHistory();

    const getTags = () => {
        getAllTags().then(tag => setTags(tag));
    };

    useEffect(() => {
        getTags();
    }, []);

    const handleClickTagForm = () => {
        history.push("/tags/create")
    }

    return (
        <div className="Container">
            <div className="row justify-content-center">
                {tags.map((tag) => (

                    <Tag tag={tag} key={tag.id} setTags={setTags} />


                ))}
                <Button onClick={handleClickTagForm}>Add A Tag </Button>
            </div>
        </div>
    );
};

export default TagList