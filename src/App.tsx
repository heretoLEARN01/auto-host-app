import React, { Suspense } from 'react';
const Customers = React.lazy(() => import('customersApp/Customers'));
const Jobs = React.lazy(() => import('jobsApp/Jobs'));
import { useGarageStore } from './store/useGarageStore2';

const App = () => {
//   const customers = useGarageStore((s) => s.customers);
    const { theme, toggleTheme } = useGarageStore();

  return (<div style={{ padding: 20, background: theme === 'light' ? '#fff' : '#222', color: theme === 'light' ? '#000' : '#fff' }}>
    <h1>🚗 AutoApp - Host</h1>
    <button onClick={toggleTheme}>Toggle Theme</button>
    <Suspense fallback={<div>Loading Customers...</div>}>
      <Customers />
    </Suspense>
    <Suspense fallback={<div>Loading Jobs...</div>}>
      <Jobs />
    </Suspense>
  </div>
  )
};

export default App;
