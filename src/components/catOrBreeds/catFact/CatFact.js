import { Fade, Button } from "reactstrap";

const CatFact = ({ title, changeTitle }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 py-3 px-5 bg-light rounded-pill">
      <Fade tag="p" className="m-0">
        {title}
      </Fade>
      <Button
        onClick={() => {
          changeTitle();
        }}
      >
        Change
      </Button>
    </div>
  );
};

export default CatFact;
