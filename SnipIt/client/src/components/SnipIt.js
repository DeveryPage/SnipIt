import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { deleteSnipIt, getAllSnipIts } from "../modules/snipItManager";
import { useHistory } from "react-router";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { useState } from "react";

export const SnipIt = ({ snipit, setSnipIts }) => {
    const [snipIt, setSnipIt] = useState([])
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
            <div>
                <Card body color="light">
                    <CardBody>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Author: {snipit.userprofile.displayName} | | Language: {snipit.language.name}
                        </CardSubtitle>
                        <CardTitle tag="h5" >{snipit.title}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">{snipit.caption}</CardSubtitle>
                        <AceEditor setOptions={{ useWorker: false }} mode="javascript" theme="monokai" value={snipit.snip} readOnly />
                        <Col xs="1">
                            <ul>
                                {snipIt.tag != null
                                    ? snipIt.tag.map((t) => <li>{t.name}</li>)
                                    : null}
                            </ul>
                        </Col>

                        <Row >
                            <Col xs="1">
                                <Button onClick={handleClickEditSnip}>Edit</Button>
                            </Col>

                            <Col xs="1">
                                <Button onClick={handleClickDeleteSnipIt}>Delete</Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

// disabled={user.id === snipit.userId ? true : false}