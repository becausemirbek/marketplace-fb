import React, { useReducer } from 'react';
export const favoritesContext = React.createContext();

const INIT_STATE = {
  favorites: JSON.parse(localStorage.getItem('favorites')) ? JSON.parse(localStorage.getItem('favorites')) : 0
}

const reducer = (state=INIT_STATE, action) => {
  switch(action.type){
    case "ADD_AND_DELETE_PRODUCT_IN_CART": 
      return {...state, favorites: action.payload}
    default:
      return state
    }
  }
    
  export const FavoritesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    
    function addFavorites(product){
      let fav = JSON.parse(localStorage.getItem('favorites'));
      if(!fav){
        fav = [];
      }
      let newFav = fav.filter(item => item.id === product.id)
      if(newFav.length > 0){
        fav = fav.filter(item => item.id !== product.id)
      }else{
        fav.push(product)
      }
      localStorage.setItem("favorites", JSON.stringify(fav))
      dispatch({
        type: "ADD_AND_DELETE_PRODUCT_IN_CART",
        payload: fav
      })
    }
    
    return (
      <favoritesContext.Provider value={{
        fav: state.favorites,
        addFavorites,
      }}>
          {children}
      </favoritesContext.Provider>
    );
  };
  
  const FavoritesConsumer = favoritesContext.Consumer
  export default FavoritesConsumer;