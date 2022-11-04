import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  imgSrc: string;
}

const OpenGraph = ({ title, description, imgSrc }: Props) => {
  return (
    <Helmet prioritizeSeoTags>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={location.origin} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={imgSrc} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default OpenGraph;
