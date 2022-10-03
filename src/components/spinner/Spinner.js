import spinnerUrl from "../../assets/Spinner.gif";

const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100%" }}
    >
      <img src={spinnerUrl} alt="Spinner" />
    </div>
  );
};

export default Spinner;
