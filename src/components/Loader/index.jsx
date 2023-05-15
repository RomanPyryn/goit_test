import { TailSpin } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBox>
      <TailSpin height="90" width="90" color="#4b2a99" ariaLabel="loading" />
    </LoaderBox>
  );
};

export default Loader;
