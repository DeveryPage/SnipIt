import React from "react";
import { useHistory, useParams } from "react-router";
import { Container, FormGroup, Form, Label, Input, Col, Row, Button, Select } from "reactstrap";
import { addSnipIt, deleteSnipIt, getSnipIt, updateSnipIt } from "../modules/snipItManager";
import { useState } from "react";
import { getAllLanguages } from "../modules/languageManager";
import { useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const SnipItForm = () => {

    const [snipit, setSnipit] = useState({
        title: "",
    })



    const [languages, setLanguages] = useState([])

    const snipitId = useParams();

    const history = useHistory();

    const getLanguages = () => {
        getAllLanguages().then(languages => setLanguages(languages))
    }

    useEffect(() => {
        getLanguages();
    }, []);



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

    const snipChangeHandler = (value) => {
        const newSnipit = { ...snipit };
        newSnipit.snip = value
        setSnipit(newSnipit);
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

    const selectedlanguage = () => {
        const language = languages.find(l => l.id === snipit.languageId)
        return language ? language.name : "javascript"
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
                                        <AceEditor onChange={snipChangeHandler} id="snip" required mode={selectedlanguage()} theme="monokai" name="UNIQUE_ID_OF_DIV" editorProps={{ $blockScrolling: true }} />
                                    </Col>

                                    <Label htmlFor="languageId">Language</Label>
                                    <select className="form-control" id="languageId" onChange={handleInput} required>
                                        <option value="0">Select a Language</option>
                                        {languages.map(l => (
                                            <option key={l.id} value={l.id}>{l.name}</option>
                                        ))}
                                    </select>
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