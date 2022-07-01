import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { ScrollTop } from "../../../ScrollTop";
import { Container } from "../../Container";
import { Loading } from "../../Loading";
import { MovieDetail } from "./MovieDetail";

const Iframe = styled.iframe`
  width: 100%;
  height: 700px;
  margin-top: 150px;
`;

export const Detail = () => {
  const [movieData, setMovieData] = useState();
  const [videoData, setVideoData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // =>url주소에 있는 변수값을 가져옴

  useEffect(() => {
    const detailData = async () => {
      const { data } = await movieApi.movieDetail(id);
      setMovieData(data);

      const {
        data: { results },
      } = await movieApi.video(id);
      setVideoData(results.length === 0 ? null : results[0].key);
      setLoading(false);
    };
    detailData();
  }, []);

  // console.log(videoData);

  return (
    <div>
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {movieData && <MovieDetail movieData={movieData} />}
          {videoData ? (
            <Iframe
              src={`https://www.youtube.com/embed/${videoData}`}
              allowfullscreen
            ></Iframe>
          ) : null}
        </Container>
      )}
    </div>
  );
};
