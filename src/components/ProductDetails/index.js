import React, { Component } from "react";
import { Container, Card, Row, Button } from "reactstrap";
import { connect } from "react-redux";

import { getAdsDetails } from "../../redux/actions";
import Carousel from "react-multi-carousel";
import "./ProductDetails.css";
import "react-multi-carousel/lib/styles.css";
import ProductList from "../ProductList";
import GoogleIcon from "../../assets/icons/Google.png";
import VkIcon from "../../assets/icons/Vk.png";
import FacebookIcon from "../../assets/icons/Facebook.png";
import Banner from "../../assets/Banner2.jpg";
import Breadcrumbs from "../../components/Breadcrumbs";
import Loading from '../Loading'

class ProductPage extends Component {
  state = {
    currentImg: "",
    baseTitle: "https://ostashkov.sidex.ru/images/noimg_b.jpg"
  };

  componentDidMount() {
    // console.log(this.props.match.params.id);
    this.fetchData();
    // this.setImg(this.props.ads?.image1)
  }
  
  fetchData = () => {
    this.props.getAdsDetails(this.props.id);
  };
  setImg = (url) => {
    console.log(url, "log from setImg")
    const currentImg = this.props.ads?.image1
      ? url
      : this.props.ads?.image2;
    this.setState({ currentImg });
  };
  componentDidUpdate(prev) {
    if (this.props.id !== prev.id) {
      this.fetchData();
    }
    // if (
    //   (!this.state.currentImg && this.props.ads?.images) ||
    //   this.props.ads?.images !== prev.ads?.images
    // ) {
    //   this.setImg();
    // }
  }

  render() {
    const breadCrumbsItems = [
      {
        title: "Главная",
        path: "/",
      },
      {
        title: this.props.ads?.category,
        path: this.props.ads?.category,
      },
      {
        title: this.props.ads?.title,
      },
    ];
    return (
        this.props.ads ? (
          <>
          {console.log(this.props.ads)}
            <Breadcrumbs items={breadCrumbsItems} />
            <Container className="px-0">
              <Card className="mb-5 p-2 d-none d-lg-flex">
                <Row className="mx-0">
                    <div className="col-6 px-0 carousel-menu-photo">
                      <div className="img-container product-preview mb-3">
                        <img
                          src={`${this.state.currentImg ? this.state.currentImg : (this.props.ads?.image1 || this.props.ads?.image2 ? this.props.ads?.image1 || this.props.ads?.image2 : this.state.baseTitle )}`}
                          className="px-0 rounded mb-2 h-100"
                          alt="product-img"
                        />
                      </div>
                      <CarouselMenu
                        handleSetImg={this.setImg}
                        data={[this.props.ads?.image1, this.props.ads?.image2]}
                      />
                    </div>
                  <div className="col-3">
                    <span className="contact-seller mb-2">
                      Свяжитесь с продовцом
                    </span>
                    <Button color="info" className="phone-number">
                      {this.props.ads?.phoneNumber}
                    </Button>
                    <div>
                      <h3 className="social-title">Поделиться в соц сетях</h3>
                      <div className="d-flex">
                        <div className="social-icons row justify-content-center align-items-center google rounded-circle mr-5 ml-1">
                          <img src={GoogleIcon} alt="google-icon" />
                        </div>
                        <div className="social-icons row justify-content-center align-items-center facebook rounded-circle mr-5">
                          <img src={VkIcon} alt="vk-icon" />
                        </div>
                        <div className="social-icons row justify-content-center align-items-center vk rounded-circle">
                          <img src={FacebookIcon} alt="facebook-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 mx-0 banner-ad">
                    <img src={Banner} alt="banner" className="w-100" />
                  </div>
                </Row>
                <div className="product-details">
                  <div className="mb-5">
                    <div className="location-title">Местоположение</div>
                    <p className="metro">
                      {this.props.ads?.city} -Метро{" "}
                      {this.props.ads?.metro}
                    </p>
                    <h2 className="description-title">Описание</h2>
                    <p className="product-item__description pb-5">
                      {this.props.ads.description}
                    </p>
                    <hr />
                  </div>
                  <div className="category-details d-flex justify-content-between align-items-center mb-5">
                    <h3>Категория</h3>
                    <p className="category-ads">{this.props.ads.category}</p>
                  </div>
                  <div className="category-details d-flex justify-content-between align-items-center mb-5 mt-5">
                    <h3>Подкатегория</h3>
                    <p className="sub-category-ads">{this.props.ads.category}</p>
                  </div>
                  <hr />
                  <div className="category-details d-flex justify-content-between align-items-center mb-5 mt-5">
                    <h3>Размещено</h3>
                    <p className="publish-date">{this.props.ads.publish}</p>
                  </div>
                </div>
              </Card>

              <Card className="mb-5 p-2 d-lg-none d-flex">
                <Row className="mx-0">
                  {/* {this.props.ads.image1 || this.props.ads.image2 && ( */}
                    <div className="col-md-12 px-0 carousel-menu-photo">
                      <div className="img-container product-preview mb-3">
                        <img
                          src={`${this.state.currentImg ? this.state.currentImg : (this.props.ads?.image1 || this.props.ads?.image2 ? (this.props.ads?.image1 || this.props.ads?.image2) : this.state.baseTitle )}`}
                          className="px-0 rounded mb-2 h-100"
                          alt="product-img"
                        />
                      </div>
                      <CarouselMenu
                        handleSetImg={this.setImg}
                        data={[this.props.ads?.image1, this.props.ads?.image2]}
                      />
                    </div>
                  {/* )} */}
                  <div className="col-md-6">
                    <div className="mt-2 d-flex">
                      <h3 className="social-title mt-1 mr-3">
                        Поделиться в соц сетях:
                      </h3>
                      <div className="d-flex">
                        <div className="social-icons row justify-content-center align-items-center google rounded-circle mr-5 ml-1">
                          <img src={GoogleIcon} alt="google-icon" />
                        </div>
                        <div className="social-icons row justify-content-center align-items-center facebook rounded-circle mr-5">
                          <img src={VkIcon} alt="vk-icon" />
                        </div>
                        <div className="social-icons row justify-content-center align-items-center vk rounded-circle">
                          <img src={FacebookIcon} alt="facebook-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex mt-2">
                      <p className="contact-seller mb-2 mr-2 mt-2">
                        Свяжитесь с продовцом
                      </p>
                      <Button color="info" className="phone-number">
                        {this.props.ads.phoneNumber}
                      </Button>
                    </div>
                  </div>
                </Row>
                <div className="product-details">
                  <div className="mb-5">
                    <div className="location-title">Местоположение</div>
                    <p className="metro">
                      {this.props.ads?.city} - Адрес{" "}
                      {this.props.ads?.address}
                    </p>
                    <h2 className="description-title">Описание</h2>
                    <p className="product-item__description pb-5">
                      {this.props.ads.description}
                    </p>
                    <hr />
                  </div>
                  <div className="category-details d-flex justify-content-between align-items-center mb-5">
                    <h3>Категория</h3>
                    <p className="category-ads">{this.props.ads.category}</p>
                  </div>
                  <div className="category-details d-flex justify-content-between align-items-center mb-5 mt-5">
                    <h3>Подкатегория</h3>
                    <p className="sub-category-ads">{this.props.ads.category}</p>
                  </div>
                  <hr />
                  <div className="category-details d-flex justify-content-between align-items-center mb-5 mt-5">
                    <h3>Размещено</h3>
                    <p className="publish-date">{this.props.ads.publish}</p>
                  </div>
                </div>
              </Card>
              <div className="mx-0 banner-ad mob d-lg-none">
                <img src={Banner} alt="banner" className="w-100" />
              </div>
              <Row className="mb-5 pb-5 mx-0">
                <ProductList history={this.props.history} />
              </Row>
            </Container>
          </>
        ) : <Loading /> 
          
    );
  }
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 2,
  },
};

//Карусель для главной страницы, принимает в себя data из пропса, используется
//выше в ProductDetails

const CarouselMenu = ({ data, handleSetImg }) => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel
        ssr={true}
        arrows={false}
        showDots={false}
        slidesToSlide={1}
        infinite={true}
        autoPlay={!true}
        autoPlaySpeed={3000}
        renderButtonGroupOutside={true}
        responsive={responsive}
        additionalTransfrom={0}
        containerClass="custom-pipi-carousel container-with-dots"
      >
        {data.map((item, index) => (
          data[index] ? <div
          onClick={() => handleSetImg(data[index])}
          key={index + "-carousel-item"}
          className="img-container"
        >
          <img src={`${data[index]}`} alt="sportsIcon" className="rounded h-100" />
        </div> : null
        ))}
      </Carousel>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { ads, loading, error } = state.Category;
  return { ads, loading, error };
};

export default connect(mapStateToProps, { getAdsDetails })(ProductPage);
