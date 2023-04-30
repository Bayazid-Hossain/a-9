import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
     <Header/>
      <div className='max-w-[1240px] mx-auto px-4 min-h-[calc(100vh-110px)]'>
        <Outlet />
      </div>
     <Footer/>
    </div>
  );
};

export default App;