import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { deleteSnipIt, getAllSnipIts } from "../modules/snipItManager";
import { useHistory } from "react-router";

export const SnipIt = ({ snipit, setSnipIts }) => {

    const history = useHistory();

    const handleClickDeleteSnipIt = () => {
        const confirm = window.confirm("Are you sure you would like to delete this SnipIt?")
        if (confirm === true) {
            deleteSnipIt(snipit)
                .then(() => {
                    getAllSnipIts().then(snipits => setSnipIts(snipits))
                })
        } else {
            return;
        }
    }

    const handleClickEditSnip = () => {
        history.push(`/snipit/create/${snipit.id}`)
    }

    return (
        <>
            <h3>Snip: {snipit.snip}</h3>
            <h4>Language: {snipit.language.name}</h4>
            <p className="text-left px-2"> Posted by: {snipit.userprofile.displayName} </p>
            <p>caption: {snipit.caption}</p>

            <button onClick={handleClickDeleteSnipIt}>Delete</button>
            <button onClick={handleClickEditSnip}>Edit</button>
        </>
    )
}