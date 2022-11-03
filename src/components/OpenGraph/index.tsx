import { commaNumber } from '@/util';
import { Helmet } from 'react-helmet-async';

interface Props {
  brand: string;
  name: string;
  amount: number;
  imgUrl: string;
}
const OpenGraph = ({ brand, name, amount, imgUrl }: Props) => {
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={location.origin} />
      <meta property="og:title" content={`${brand} + ${name}`} />
      <meta property="og:image" content={imgUrl} />
      <meta
        property="og:description"
        content={`월 ${commaNumber(amount)} 원`}
      />
      <meta property="og:image:width" content="1120" />
      <meta property="og:image:height" content="656" />
    </Helmet>
  );
};

export default OpenGraph;
