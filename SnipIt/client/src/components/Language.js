import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { deleteLanguage, getAllLanguages } from "../modules/languageManager";

export const Language = ({ language, setLanguages }) => {

    const history = useHistory();

    const handleClickDeleteLanguage = () => {
        const confirm = window.confirm("Are you sure you would like to delete this Language?")
        if (confirm === true) {
            deleteLanguage(language)
                .then(() => {
                    getAllLanguages().then(languages => setLanguages(languages))
                })
        } else {
            return;
        }
    }

    const handleClickEditLanguage = () => {
        history.push(`/languages/create/${language.id}`)
    }

    return (
        <>
            <div>
                <Card body color="light">
                    <CardBody>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            {language.name}
                        </CardSubtitle>

                        <Row >
                            <Col xs="1">
                                <Button onClick={handleClickEditLanguage}>Edit</Button>
                            </Col>

                            <Col xs="1">
                                <Button onClick={handleClickDeleteLanguage}>Delete</Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}