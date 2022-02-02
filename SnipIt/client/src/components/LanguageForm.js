import React from "react";
import { useHistory, useParams } from "react-router";
import { Container, FormGroup, Form, Label, Input, Col, Row, Button } from "reactstrap";
import { useState } from "react";
import { getLanguage, addLanguage, updateLanguage } from "../modules/languageManager";

const LanguageForm = () => {

    const [language, setLanguage] = useState({
        name: "",
    })

    const languageId = useParams();

    const history = useHistory();

    if (languageId.id && language.name === "") {
        getLanguage(languageId.id)
            .then(language => {
                const languageCopy = { ...language }
                setLanguage(languageCopy)
            });
    }

    const handleInput = (event) => {
        const newLanguage = { ...language };
        newLanguage[event.target.id] = event.target.value;
        setLanguage(newLanguage);
    }

    const handleCreateLanguage = () => {
        addLanguage(language)
            .then(history.push("/languages"))
    }

    const handleClickUpdateLanguage = () => {
        updateLanguage(language)
            .then(history.push("/languages"))
    }

    const handleClickCancel = () => {
        history.push("/languages")
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
                                    <h3>Add A Language</h3>
                                    <Label htmlFor="name">Name</Label>
                                    <Input type="text" className="form-control" id="name" placeholder="Ex: My first querey" value={language.name} onChange={handleInput} required />
                                </Col>
                            </Row>
                        </FormGroup>
                        {languageId.id ?
                            <div>
                                <Button type="submit" onClick={event => {
                                    handleClickUpdateLanguage()
                                }}>Update</Button>
                                <Button type="submit" onClick={event => {
                                    handleClickCancel()
                                }}>Cancel</Button>
                            </div>
                            :
                            <Button type="submit" onClick={event => {
                                handleCreateLanguage()
                            }}>Submit</Button>}
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default LanguageForm;