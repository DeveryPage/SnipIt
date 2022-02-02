import React from "react";
import { useHistory, useParams } from "react-router";
import { Container, FormGroup, Form, Label, Input, Col, Row, Button } from "reactstrap";
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
            <div className="container-5">
                <div className="form-group">
                    <Form>
                        <FormGroup row>
                            <Row>
                                <Col
                                    className="bg-light border"
                                    md={{
                                        offset: 3,
                                        size: 6
                                    }}
                                    sm="12"
                                >
                                    <h3>Create A SnipIt</h3>
                                    <Label htmlFor="title">Title</Label>
                                    <Input type="text" className="form-control" id="title" placeholder="Ex: My first querey" value={snipit.title} onChange={handleInput} required />

                                    <Label htmlFor="caption">Caption</Label>
                                    <Col sm={10}>
                                        <Input type="text" className="form-control" id="caption" placeholder="Ex: my first querey took so long to create." value={snipit.caption} onChange={handleInput} required />
                                    </Col>

                                    <Col sm={80}>
                                        <Label htmlFor="snip">Snip</Label>
                                        <Input type="textarea" className="form-control" id="snip" placeholder="Ex: Select MyfirstQuerey
                                                                                                      From myquerey
                                                                                                        Where MyQId = Id"
                                            value={snipit.snip} onChange={handleInput} required />
                                    </Col>

                                    <Label htmlFor="languageId">Language</Label>
                                    <Input type="text" className="form-control" id="languageId" placeholder="languageId" value={snipit.languageId} onChange={handleInput} required />
                                </Col>
                            </Row>
                        </FormGroup>
                        {snipitId.id ?
                            <div>
                                <Button type="submit" onClick={event => {
                                    handleClickUpdateSnipIt()
                                }}>Update</Button>
                                <Button type="submit" onClick={event => {
                                    handleClickCancel()
                                }}>Cancel</Button>
                            </div>
                            :
                            <Button type="submit" onClick={event => {
                                handleCreateSnipit()
                            }}>Submit</Button>}
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SnipItForm;