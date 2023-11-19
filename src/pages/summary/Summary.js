import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import logo from "../../assets/logo-black.png";

import styles from "../../styles/Summary.module.css";

const About = () => {
  return (
    <Container className="bg-white col-md-10">
      <Row className="p-4 mt-5 justify-content-md-center">
        <Col className="text-center">
          <Container className={styles.Summary}>
            <Image src={logo} className={styles.Logo} />
            <h1 className="mb-3">Welcome to SnapDish!</h1>
            <h4>
              Where every bite tells a story and every snap is a culinary masterpiece! 📸🍕
            </h4>
            <p>
              Dive into a world where food is not just for eating but for sharing, where your taste buds meet your followers in a delicious dance of flavors.
              SnapDish is the ultimate playground for food enthusiasts, a whimsical wonderland where every dish is a work of art and every photo is a love letter to your taste buds.<br />
              <br />
              🌮 Feast your eyes on a vibrant feed filled with mouthwatering snapshots of culinary creations from around the globe. From sizzling street food to decadent desserts,
              our community of food lovers knows no bounds when it comes to capturing the essence of deliciousness.<br />
              <br />
              📷 Snap, share, and sprinkle some love on your fellow foodies' posts with a sprinkle of emojis and a dash of enthusiasm. Let your taste buds do the talking as you embark
              on a gastronomic journey through a visual feast of epic proportions.<br />
              <br />
              🍜 Unleash your inner food stylist and showcase your culinary adventures in a gallery of flavor explosions. Whether you're a master chef or a kitchen klutz, SnapDish is
              the place to celebrate the joy of food in all its messy, cheesy, and sometimes downright bizarre glory.<br />
              <br />
              🎉 Join the SnapDish family and be part of a community that understands the language of love, expressed through the universal medium of food photography. Because let's
              face it, a picture of a perfectly plated dish is worth a thousand "Yum!" comments.<br />
              <br />
              So, grab your camera, put on your chef's hat (or not), and let the SnapDish adventure begin. Because life's too short to eat boring food or keep it to yourself! 🍽✨
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default About;