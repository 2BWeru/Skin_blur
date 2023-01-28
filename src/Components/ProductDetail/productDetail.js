import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SkinProducts } from "../../data/products";
import "./productDetail.css";
import { setConfiguration } from "react-grid-system";
import { Container, Row, Col } from "react-grid-system";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

setConfiguration({ maxScreenClass: "xl" });

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function ProductDetail() {
  const { name } = useParams();
  const [MenuProducts, setMenuProducts] = useState(SkinProducts);

  const itemP = SkinProducts.filter((item) => item.name === name);
  const result = Object.values(itemP);

//   ratings
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const getLabelText=()=>{
      return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }


  return (
    <>
      {result.map((item) => (
        <Container>
          <div className="card-Product">
            <Row>
              <Col>
                <img src={item.img} alt={item.name} className="product-img" />
              </Col>
              <Col>
                <div className="product-right">
                  <h1>
                    <u>{item.name}</u>
                  </h1>
                  <br />
                  <h2>
                    Brand: <b>{item.brand}</b>
                  </h2>
                  <br />
                  <h2>Type:{item.detail}</h2>
                  <br />
                  <h4>Price: {item.price} $</h4>
                </div>
                <br />
                <div>
                    <h4>
                    Rate This Product:

                    </h4>
                  <Box
                    sx={{
                      width: 500,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    {value !== null && (
                      <Box sx={{ ml: 2 }}>
                        {labels[hover !== -1 ? hover : value]}
                      </Box>
                    )}
                  </Box>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      ))}
    </>
  );
}
export default ProductDetail;
