import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>PN Movie | {title}</title>
    </Helmet>
  );
};
