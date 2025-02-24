import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <h1>Hello, React 18 with TypeScript!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);