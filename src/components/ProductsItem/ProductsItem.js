import React from "react";
import { Card, Col, Button } from "reactstrap";

import "../ProductsItem/ProductItem.css";
import { Link } from "react-router-dom";
import { API_URL } from "../../helpers/constants";

const ProductsItem = (props) => {
  const edit = (id) => props.history.push("/edit-page/" + id);
  return (
    <Col xs={6} md={3} className="p-2">
      <Card className="radius">
        <Link
          to={`/product-page/${props.id}`}
          style={{ textDecoration: "none", color: "#333" }}
        >
          <div className="product-item-photo">
            <img
              src={props.image1}
              alt="product-item"
              className="product-item w-100"
            />
          </div>
          <span className="product-desc__price ml-2">
            {props.price} <span className="h6">руб</span>
          </span>
        </Link>
        <div className="ml-2 mt-2">
          <p className="description mb-1">Продаю {props.title}</p>
          <span className="description">{props.metro?.title}, метро</span>
          <p className="description">дата публикации: {props.publish}</p>
        </div>
        {props.isMyPost && <Button onClick={() => edit(props.id)}>Edit</Button>}
      </Card>
    </Col>
  );
};

export default ProductsItem;
