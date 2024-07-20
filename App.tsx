import QueryProvider from '@/providers/QueryProvider';
import RouterContainer from '@/routers';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <QueryProvider>
      <RouterContainer />
    </QueryProvider>
  );
}

export default App;
