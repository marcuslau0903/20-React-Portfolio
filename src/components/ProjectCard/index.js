import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProjectCard = (props) => {
  return (
    <Card className="m-2 text-center" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imageURL} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="light" href={props.repoURL} className="m-1">
          GitHub Repo
        </Button>
        <Button variant="light" href={props.deployedURL}>
          Deployed App
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
