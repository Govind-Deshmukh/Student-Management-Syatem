import './App.css';

import GeneralHeader from './webComponents/GeneralHeader';
import LoginContainer from './webComponents/LoginContainer';

function App() {
  return (
      <>
        <GeneralHeader/>
        <div className='text-center mt-5'>
          <h1>MGM's College Of Engineering, Nanded</h1>
          <h2 className='text-muted mt-3'>Student Management System</h2>
          <div className='border-bottom-heading w-50'></div>
        </div>
        <LoginContainer/>
      </>
  );
}

export default App;
