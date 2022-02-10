import React from "react";
import { Button } from "reactstrap";
import { useState, useEffect } from "react";

const SnipItTag = ({ snipItTag, handleTagSelected, activeTagIds }) => {
    const [isTaggedToSnipIt, setIsTaggedToSnipIt] = useState(false);

    useEffect(() => {
        setIsTaggedToSnipIt(
            activeTagIds.length > 0 && activeTagIds.includes(snipItTag.id)
        );
    }, [activeTagIds]);

    return (
        <tr>
            <th scope="row">{snipItTag.name}</th>
            <Button
                id={`manageTags--${snipItTag.id}`}
                onClick={handleTagSelected}
                color={isTaggedToSnipIt ? "danger" : "primary"}
            >
                {isTaggedToSnipIt ? "Remove" : "Add Tag"}
            </Button>
        </tr>
    );
};

export default SnipItTag;