import React from "react";
import { Container } from "reactstrap";
function OwlStage() {
  return (
    <>
      <Container
        style={{
          marginTop: "50px",
          height: "46px",
          width: "1300PX",

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: "80px",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
          }}
        >
          <img
            src="https://veganessentials.com/cdn/shop/files/fast-shipping.jpg?v=1677012247"
            alt=""
          />
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              height: "36px",
            }}
          >
            <Container>
              <strong>FAST SHIPPING</strong>
            </Container>
            <Container>
              <strong style={{ color: "rgb(54, 158, 69)" }}>
                VIEW SHIPPING POLICY
              </strong>
            </Container>
          </Container>
        </Container>
        <Container style={{ display: "flex", flexDirection: "row" }}>
          <img
            src="https://veganessentials.com/cdn/shop/files/price-match.jpg?v=1677012312"
            alt=""
          />
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              height: "36px",
            }}
          >
            <Container>
              <strong>PRICE MATCH GUARENTEE</strong>
            </Container>
            <Container>
              <strong style={{ color: "rgb(54, 158, 69)" }}>LEARN MORE</strong>
            </Container>
          </Container>
        </Container>
        <Container style={{ display: "flex", flexDirection: "row" }}>
          <img
            src="https://veganessentials.com/cdn/shop/files/loylaty.jpg?v=1677012349"
            alt=""
          />
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              height: "36px",
            }}
          >
            <Container>
              <strong>LOYALITY PERKS</strong>
            </Container>
            <Container>
              <strong style={{ color: "rgb(54, 158, 69)" }}>JOIN NOW</strong>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default OwlStage;
