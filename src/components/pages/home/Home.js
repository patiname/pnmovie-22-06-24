import { useEffect } from "react";
import { movieApi } from "../../../api";

export const Home = () => {
  useEffect(() => {
    const movieData = async () => {
      const {
        data: { results },
      } = await movieApi.topRated();
    };
    movieData();
  }, []);

  return <div>Home</div>;
};
