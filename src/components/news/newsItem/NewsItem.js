import { Toast, ToastHeader, ToastBody } from "reactstrap";

const NewsItem = ({ news }) => {
  return (
    <Toast className="mt-3 ms-1">
      <ToastHeader>{news.title}</ToastHeader>
      <ToastBody>
        <img src={news.imageUrl} alt="Image" className="card-img-top" />
        <p className="mt-1 mb-0">{news.description}</p>
      </ToastBody>
    </Toast>
  );
};

export default NewsItem;
