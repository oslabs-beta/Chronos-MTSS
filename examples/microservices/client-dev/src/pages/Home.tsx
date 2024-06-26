import CreateItemForm from '../components/CreateItemForm';
import PageLinks from '../components/PageLinks';
import CreateOrderForm from '../components/CreateOrderForm';
import { useAppContext } from '../context/appContext';

const Home = () => {
  const { throw404 } = useAppContext();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <PageLinks />
      <div className="flex justify-center items-center mt-16">
        <CreateItemForm />
        <CreateOrderForm />
      </div>
      <button
        onClick={throw404}
        className="w-[250px] text-2xl font-bold text-center
        hover:font-bold relative border-2 rounded-md py-2 px-3 mx-4
        hover:scale-105 transition-all mt-10
        hover:text-red-400 hover:border-red-400"
      >
        Throw a 404 Error
      </button>
    </div>
  );
};

export default Home;
