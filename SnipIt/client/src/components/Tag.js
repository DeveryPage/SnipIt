import React from "react";
import { useHistory } from "react-router";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";
import { deleteTag } from "../modules/tagManager";
import { getAllTags } from "../modules/tagManager";


export const Tag = ({ tag, setTags }) => {
    const history = useHistory();

    const handleClickDeleteTag = () => {
        const confirm = window.confirm("Are you sure you want to remove this tag?")
        if (confirm === true) {
            deleteTag(tag)
                .then(() => {
                    getAllTags().then(tags => setTags(tags))
                })
        } else {
            return;
        }
    }

    const handleClickEditTag = () => {
        history.push(`/tags/create/${tag.id}`)
    }

    return (
        <>
            <div>
                <Card body color="light">
                    <CardBody>
                        <CardTitle tag="h5" >{tag.name}</CardTitle>
                        <Row >
                            <Col xs="1">
                                <Button onClick={handleClickEditTag}>Edit</Button>
                            </Col>

                            <Col xs="1">
                                <Button onClick={handleClickDeleteTag}>Delete</Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}