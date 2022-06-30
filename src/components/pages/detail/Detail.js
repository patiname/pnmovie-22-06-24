import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieApi } from "../../../api";

export const Detail = () => {
  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // =>url주소에 있는 변수값을 가져옴

  useEffect(() => {
    const detailData = async () => {
      const { data } = await movieApi.movieDetail(id);
      setMovieData(data);
      setLoading(false);
    };
    detailData();
  }, []);

  console.log(movieData);
  return <div>Detail</div>;
};
