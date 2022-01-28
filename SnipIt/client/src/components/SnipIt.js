import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export const SnipIt = ({ snipit }) => {
    return (
        <Card >
            <p className="text-left px-2"> Posted by: {snipit.userprofile.displayName} </p>
            <p>{snipit.caption}</p>
        </Card>
    )
}