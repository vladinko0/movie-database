import React from 'react';
import Navigation from './src/navigation';
import Theme from './src/context/Theme';

const App: React.FC<{}> = () => {
  return (
    <Theme>
      <Navigation />
    </Theme>
  );
};

export default App;
