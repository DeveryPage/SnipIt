import React from "react";
import { useHistory, useParams } from "react-router";
import { Container, FormGroup, Form, Label, Input, Col, Row, Button, Select } from "reactstrap";
import { addTag, deleteTag, getTag, updateTag } from "../modules/tagManager";
import { useState } from "react";
import { useEffect } from "react";

const TagForm = () => {

    const [tag, setTag] = useState({
        name: "",
    })

    const tagId = useParams();

    const history = useHistory();

    if (tagId.id && tag.name === "") {
        getTag(tagId.id)
            .then(tag => {
                const tagCopy = { ...tag }
                delete tagCopy.userprofile
                setTag(tagCopy)
            });
    }

    const handleInput = (event) => {
        const newTag = { ...tag };
        newTag[event.target.id] = event.target.value;
        setTag(newTag);
    }

    const handleCreateTag = () => {
        addTag(tag)
            .then(() => history.push("/tags"))
    }

    const handleClickUpdateTag = () => {
        updateTag(tag)
            .then(() => history.push("/tags"))
    }

    const handleClickCancel = () => {
        history.push("/tags")
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
                                    <h3>Create A Tag</h3>
                                    <Label htmlFor="name">Name</Label>
                                    <Input type="text" className="form-control" id="name" value={tag.name} onChange={handleInput} required />

                                </Col>
                            </Row>
                        </FormGroup>
                        {tagId.id ?
                            <div>
                                <Button type="submit" onClick={event => {
                                    handleClickUpdateTag()
                                }}>Update</Button>
                                <Button type="submit" onClick={event => {
                                    handleClickCancel()
                                }}>Cancel</Button>
                            </div>
                            :
                            <Button type="submit" onClick={event => {
                                handleCreateTag()
                            }}>Submit</Button>}
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default TagForm;