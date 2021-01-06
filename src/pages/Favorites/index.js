import React, { useState } from 'react'
import * as Feather from "react-feather";
import { Container, Row } from 'reactstrap'

const style = {
  favItem: {
    background: "#fff",
    marginBottom: "10px",
    padding: "5px",
    borderRadius: "3px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)"
  },
  favImage: {
    width: "60px",
    height: "120px",
    objectFit: "contain"
  },
  trashBtn: {
    cursor: "pointer"
  }
}

function Favorites() {
  const { favItem, favImage, trashBtn } = style
  const data = JSON.parse(localStorage.getItem("favorites"))
  const [state, setState] = useState(data)

  const deleteItem = (id) => {
    const newData = state.filter(item => item.id !== id)
    localStorage.setItem("favorites", JSON.stringify(newData))
    setState(newData)
  }

  return (
    <Container>
      {state && state.length > 0 ? state.map(item => (
        <Row key={item.id+"Fav"} style={favItem} className="justify-content-around">
          <p><img src={item.image1 ? item.image1 : item.image2} style={favImage}/></p>
          <p className="mt-5">{item.title}</p>
          <p className="mt-5">{item.price} сом</p>
          <p onClick={() => deleteItem(item.id)} className="mt-5" style={trashBtn}><Feather.Trash /></p>
        </Row>
      )) : <Row className="justify-content-center"><h2>Избранных товаров нет</h2></Row>}
    </Container>
  )
}

export default Favorites