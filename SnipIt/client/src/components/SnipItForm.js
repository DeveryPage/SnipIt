import React from "react";
import { useHistory, useParams } from "react-router";
import { Container } from "reactstrap";
import { addSnipIt, deleteSnipIt, getSnipIt, updateSnipIt } from "../modules/snipItManager";
import { useState } from "react";

const SnipItForm = () => {

    const [snipit, setSnipit] = useState({
        title: "",
    })

    const snipitId = useParams();

    const history = useHistory();

    if (snipitId.id && snipit.title === "") {
        getSnipIt(snipitId.id)
            .then(snipit => {
                const snipitCopy = { ...snipit }
                delete snipitCopy.userprofile
                setSnipit(snipitCopy)
            });
    }

    const handleInput = (event) => {
        const newSnipIt = { ...snipit };
        newSnipIt[event.target.id] = event.target.value;
        setSnipit(newSnipIt);
    }

    const handleCreateSnipit = () => {
        addSnipIt(snipit)
            .then(history.push("/"))
    }

    const handleClickUpdateSnipIt = () => {
        updateSnipIt(snipit)
            .then(history.push("/"))
    }

    const handleClickCancel = () => {
        history.push("/")
    }

    return (
        <div>
            <h2>SnipIt</h2>
            <div className="container-5">
                <div className="form-group">
                    <form>
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Title" value={snipit.title} onChange={handleInput} required />

                        <label htmlFor="caption">Caption</label>
                        <input type="text" className="form-control" id="caption" placeholder="Caption" value={snipit.caption} onChange={handleInput} required />

                        <label htmlFor="snip">Snip</label>
                        <textarea type="text" className="form-control" id="snip" placeholder="Snip" value={snipit.snip} onChange={handleInput} required />

                        <label htmlFor="languageId">Language</label>
                        <input type="text" className="form-control" id="languageId" placeholder="languageId" value={snipit.languageId} onChange={handleInput} required />
                    </form>
                </div>
                {snipitId.id ?
                    <div>
                        <button type="submit" onClick={event => {
                            handleClickUpdateSnipIt()
                        }}>Update</button>

                        <button type="cancel" onClick={event => {
                            handleClickCancel()
                        }}>Cancel</button>

                    </div>
                    :
                    <button type="submit" onClick={event => {
                        handleCreateSnipit()
                    }}>Create</button>}
            </div>
        </div>
    )
}

export default SnipItForm;