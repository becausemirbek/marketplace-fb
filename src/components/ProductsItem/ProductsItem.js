import React, {useContext} from "react";
import { Card, Col, Button } from "reactstrap";

import "../ProductsItem/ProductItem.css";
import { Link } from "react-router-dom";
import * as Feather from "react-feather";
import { favoritesContext } from "../../contexts/favoritesContext";

const ProductsItem = ({city, id, image1, image2, price, slug, title, favorites, history, metro, isMyPost, publish}) => {

  const {addFavorites} = useContext(favoritesContext)
  const edit = (id) => history.push("/edit-page/" + id);

  let fav = { city, id, image1, image2, price, slug, title };

  let isInCart = !!( favorites && favorites.some( (item) => item.id == id ));

  return (
    <Col xs={6} md={3} className="p-2">
      <Card className="radius">
        <Link
          to={`/product-page/${id}`}
          style={{ textDecoration: "none", color: "#333" }}
        >
          <div className="product-item-photo">
            <img
              src={image1}
              alt="product-item"
              className="product-item w-100"
            />
          </div>
          <span className="product-desc__price ml-2">
            {price} <span className="h6">руб</span>
          </span>
        </Link>
        <div className="ml-2 mt-2">
          <p className="description mb-1">Продаю {title}</p>
          <span className="description">{metro?.title}, метро</span>
          <p className="description">дата публикации: {publish}</p>
        </div>
        {
          isInCart ? <Button className="btn-danger" onClick={() => addFavorites(fav)}><Feather.X /></Button> : (
            <Button onClick={() => {addFavorites(fav); console.log(fav)}}><Feather.Heart /> в Избранное</Button>
          )
        }
        {isMyPost && <Button onClick={() => edit(id)}>Edit</Button>}
      </Card>
    </Col>
  );
};

export default ProductsItem;
