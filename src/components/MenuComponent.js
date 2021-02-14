import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/BaseURL';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderMenuItem({ dish }) {
    return (
        <FadeTransform in trasformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle className="dishName">{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </FadeTransform>
    );
}

const Menu = (props) => {

    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-3" key={dish.id}>
                <RenderMenuItem dish={dish}></RenderMenuItem>
            </div>
        );
    });

    if (props.dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="container mt-1">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content justify-content-center">
                    {menu}

                </div>
            </div>
        );
    }
}

export default Menu;