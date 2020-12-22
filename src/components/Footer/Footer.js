import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="footer-img pt-5 pb-5 mb-5">
          <Container>
            <div className="d-lg-none">
              <p>КАЭДА - доска объявлений для комфортного выбора</p>
            </div>

            <div className="d-none d-lg-block">
              <p>КАЭДА - доска объявлений для комфортного выбора</p>

              <p>
                КАЭДА - онлайн доска объявлений, с помощью которой поиск работы,
                вариантов размещения и других услуг на территории России.
                Наглядность отображения информации, структурированный каталог и
                огромное количество предложений не оставят без удачного выбора!
                Полезными и актуальными неизменно будут новости, которые
                отображены в отдельном разделе.
              </p>

              <p>
                Категории портала охватывают востребованные услуги по Москве,
                что делает КАЭДА незаменимой практически для любых случаев
                жизни. Среди наиболее популярных разделов остаются объявления
                относительно: аренды квартир или номеров в гостиницах; открытых
                вакансий и предложений на рынке труда; транспортного
                обеспечения, включая услуги такси или грузоперевозок любого
                типа; образования различных уровней; товаров: одежды, для детей,
                продуктов питания и других категорий; предоставления медицинских
                услуг.
              </p>
              <p>
                Чтобы воспользоваться порталом КАЭДА . необходимо просто указать
                интересуемый город и выбрать соответствующую категорию товаров
                или услуг. Отыскать лучшее предложение в любом городе теперь
                просто!
              </p>
            </div>
          </Container>
        </div>
        <Row className="footer-nav p-5 mb-5 mx-0">
          <Container className="d-flex justify-content-between flex-md-nowrap flex-wrap">
            <Link className="mr-1" to="/announcement">
              Обьявления
            </Link>
            <Link className="mr-1" to="/announcement">
              Разместить объявления
            </Link>
            <Link className="mr-1" to="/property">
              Бизнес сотрудничества
            </Link>
            <Link className="mr-1" to="/property">
              Реклама на сайте
            </Link>
            <Link className="mr-1" to="/about-us">
              О компании
            </Link>
            <Link className="mr-1" to="/property">
              Карьера
            </Link>
            <Link className="mr-1" to="/property">
              Безопасность
            </Link>
            <Link to="/property">Помощь</Link>
          </Container>
        </Row>
      </footer>
    );
  }
}

export default Footer;
