import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}
function RenderComments({comments}) {
    if (comments != null) {
        let CommDetail = comments.map((comment) => {
            return (
                <div key={comment.id} className="m-1">
                    <p className="mb-1">{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',
                        { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            )
        });
        return (
            <div>
                {CommDetail}
            </div>
        );
    }
    else {
        return (
            <div></div>
        )
    }
}

export default function DishDetails(props) {

    return (
        <div className="container mt-1">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content justify-content-center">
                <div className="col-12 col-md-4 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>COMMENTS</h4>
                    <div>
                        <RenderComments comments={props.comments}></RenderComments>
                    </div>
                </div>

            </div>
        </div>
    );

}
