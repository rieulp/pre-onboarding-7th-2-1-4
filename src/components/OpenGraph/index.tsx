import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  imgSrc: string;
}

const OpenGraph = ({ title, description, imgSrc }: Props) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>Altimobility Carsharing Service</title>
      <meta name="description" content={description} />
      {/* Facebook Meta Tags */}
      <meta property="og:url" content={location.origin} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgSrc} />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={imgSrc} />
      <meta property="twitter:url" content={location.origin} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgSrc} />
    </Helmet>
  );
};

export default OpenGraph;
