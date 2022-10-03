const useHttpHook = () => {
  const getFactOrBreeds = async (operationType) => {
    const url =
      operationType === "cat"
        ? "https://catfact.ninja/fact"
        : "https://catfact.ninja/breeds";
    return await fetch(url)
      .then((res) => res.json())
      .then((result) => (operationType === "cat" ? result.fact : result.data));
  };

  const getPhotos = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos?client_id=aX3oSAcMo-E-RaTQXUnT8P1fSza0mMLRuWjv-MeHVzY`
    ).then((res) => res.json());

    return response.map(_transformationPhoto);
  };

  const getNews = async (title = "Apple") => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${title}&sortBy=popularity&apiKey=3996843814f3485aaa029d577bdd47d6`
    )
      .then((data) => data.json())
      .then(({ articles }) => articles)
      .catch((err) => console.log(err));

    return response.map(_transformationNews);
  };

  const _transformationPhoto = (photo) => {
    return {
      id: photo.id,
      created: photo.created_at,
      user: photo.user.name,
      username: `@${photo.user.username}`,
      src_full: photo.urls.full,
      src_small: photo.urls.small,
      user_image: photo.user.profile_image.small,
    };
  };

  const _transformationNews = (news) => {
    return {
      author: news.author,
      published: news.publishedAt,
      title: news.title,
      description: news.description,
      source: {
        ...news.source,
      },
      imageUrl: news.urlToImage,
    };
  };

  return { getFactOrBreeds, getPhotos, getNews };
};

export default useHttpHook;
