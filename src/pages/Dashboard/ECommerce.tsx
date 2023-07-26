import CardOne from '../../components/CardOne.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartOne from '../../components/CardInfo.tsx';
import CardThree from '../../components/CardThree.tsx';


const ECommerce = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree/>
      </div>
      <div className="mt-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
      </div>
    </>
  );
};

export default ECommerce;
