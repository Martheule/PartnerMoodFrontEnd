import { Outlet } from 'react-router';
import { AuthContextProvider } from '..AuthContext/context/AuthContext';



const RootLayout = () => {
  return (
    <AuthContextProvider>
      <div className='container mx-auto'>
      </div>
 </AuthContextProvider>
  );
};


export default RootLayout;