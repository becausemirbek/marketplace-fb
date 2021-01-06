import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InputGroup } from "reactstrap";
import "./SearchInput.css";
import { AvForm, AvInput } from "availity-reactstrap-validation";

function SearchInput(props) {
  const d = useSelector((state) => state.Category )
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([])

  const testing = d.posts && d.posts.map(item => item)
  const newData = [];

  for(let item in testing?.[0]) {
    newData.push(testing[0][item])
  }

  useEffect(() => {
    setFilteredProducts(
      newData.filter(product => (
        product.title.toLowerCase().includes(search.toLowerCase())
      ))
    )
  }, [search])

  return (
    <AvForm>
      <div className="live-search-container ">
        <InputGroup className="search-inp rounded-pipi">
          <AvInput
            autoComplete="off"
            name="search"
            placeholder="Поиск"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-inp__input"
          />
        </InputGroup>
        <div className="d-flex justify-content-center">
          <div
            className="live-search-elems rounded text-left"
            style={{ display: search ? "block" : "none" }}
          >
            {!filteredProducts.length && (
              <div className="px-2 mx-2 mt-2"> Ничего не найдено </div>
            )}
            {filteredProducts.map((item) => (
              <div
                className="live-search-item px-2 mx-2"
                key={item.id}
                onClick={() => {
                  props.history.push("/product-page/" + item.id);
                }}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AvForm>
  );
}

export default SearchInput
