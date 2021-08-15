import Card from "react-bootstrap/Card";
import Img from "./profile-image.PNG";
import Image from "react-bootstrap/Image";
import ContactLinks from "../ContactLinks";

const AboutMe = ({ title, description }) => {
  return (
    <div className="my-4 p-3">
      <Card className="text-center">
        <div className="py-3">
          <Image src={Img} thumbnail width={200} />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <ContactLinks />
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutMe;
