import React, { Component } from "react";
import { connect } from "react-redux";

import { getPosts } from "../../redux/actions";
import ProductsItem from "../ProductsItem/ProductsItem";
import { deletePost } from "../../redux/actions";
// import qs from "qs";

class ProductList extends Component {
  state = {
    search: this?.props?.history?.location?.search,
    href: this?.props?.history?.location?.href,
    data: null
  };
  componentDidMount() {
    // if (this.props.isMyPost) {
      // this.props.getProfileAds();
    // } else {
      this.props.getPosts(); //{query: this.props.location.search}
    // }
    // this.props.deletePost()
  }
  

  // getQuery() {
  //   return this?.props?.history?.location?.search;
  // }
  componentDidUpdate(prevProps) {
    if (
      this.state.search !== this.props.history?.location?.search ||
      this?.props?.history?.location?.href != this.state.href
    ) {
      this.setState({
        search: this.props.history?.location?.search,
        href: this?.props?.history?.location?.href,
      });
      if (this.props.isMyPost) {
        this.props.getProfileAds();
      } else {
        this.props.getPosts(this.getQuery()); //{query: this.props.location.search}
      }
      return;
    }
  }
  // handleGetItem(val){
   
  // }

  
  render() {
    const data = this.props.posts ? this.props.posts.map((item) => (item)) : null
    // const data = this.props.isMyPost ? this.props.myPosts : this.props.posts;
    const newData = []
    for(let item in data?.[0]){
      const t = {...data[0][item], slug: item}
      newData.push(t)
    }
    
    return newData ? newData.map((item) => (
        <ProductsItem
          history={this.props.history}
          slug={item.slug}
          id={item.id}
          key={item.id}
          title={item.title}
          image1={item.image1}
          image2={item.image2}
          price={item.price}
          city={item.city}
          publish={item.publish}
          metro={item.metro}
          isMyPost={this.props.isMyPost}
        />
    )) : <div>Loading...</div>
  }
}

const mapStateToProps = (state) => {
  const { posts, myPosts, loading, error } = state.Category;
  return { posts, myPosts, loading, error };
};

export default connect(mapStateToProps, { getPosts, deletePost })(ProductList);
