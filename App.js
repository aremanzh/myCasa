import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './navigation/RootNavigator';
import { AuthenticatedUserProvider } from './providers';
import { ListingProvider } from './context/ListingContext';

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <ListingProvider>
          <RootNavigator />
        </ListingProvider>
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
};

export default App;
