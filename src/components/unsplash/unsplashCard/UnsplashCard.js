import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const UnsplashCard = ({ photo }) => {
  const date = new Date(photo.created);
  const dateInfoForCard = `${date.getDay()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;
  return (
    <Card
      style={{
        width: "300px",
        height: "400px",
      }}
      className="me-1 mb-1"
    >
      <img
        alt={photo.user}
        src={photo.src_small}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "1%",
        }}
      />
      <CardBody>
        <CardTitle tag="h5">{photo.username}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="p">
          {dateInfoForCard}
        </CardSubtitle>
        <CardText>
          <img src={photo.user_image} alt="1" />
        </CardText>
      </CardBody>
    </Card>
  );
};

export default UnsplashCard;
