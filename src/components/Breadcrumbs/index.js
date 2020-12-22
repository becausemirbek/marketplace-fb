import React from "react";
import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap";
import { useHistory } from "react-router-dom";
import "./Breadcrumbs.css";

const BreadCrumb = ({ items }) => {
  const history = useHistory();
  return (
    <Container className="px-0">
      <Breadcrumb>
        {items.map((item, i) => {
          return (
            <BreadcrumbItem
              key={item.path + "--" + i + "-breadcrumb"}
              active={i === items.length - 1}
              path={item.path}
            >
              <span
                className="bread-crumps__title"
                onClick={() => history.push(item.path)}
              >
                {item.title}
              </span>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </Container>
  );
};

export default BreadCrumb;
