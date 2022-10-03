import { useEffect, useState } from "react";
import useHttpHook from "../../services/useHttpHook";

import NewsItem from "./newsItem/NewsItem";
import NewsPagination from "./newsPagination/NewsPagination";
import Spinner from "../spinner/Spinner";

const News = () => {
  const { getNews } = useHttpHook();
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 10;

  const lastNewsIndex = currentPage * newsPerPage;
  const firstNewsIndex = lastNewsIndex - newsPerPage;
  const currentNews = news.slice(firstNewsIndex, lastNewsIndex);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    getNews().then((data) => setNews(data));
  }, []);

  let content = (
    <>
      <div className="d-flex flex-wrap justify-content-center align-items-start">
        {currentNews.map((item) => {
          return <NewsItem news={item} key={item.published} />;
        })}
      </div>

      <NewsPagination
        newsPerPage={newsPerPage}
        totalNews={news.length}
        paginate={paginate}
        className="mx-auto my-0"
      />
    </>
  );

  return <>{news.length === 0 ? <Spinner /> : content}</>;
};

export default News;
