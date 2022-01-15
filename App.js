import * as React from 'react';
import Navigation from './src/navigation'
import JobCard from './src/screens/Dashboard/Profile/NewScreens/JobCard'
import Feed from './src/components/Feed'
import OfferCard from './src/screens/Dashboard/Profile/NewScreens/OfferCard'
import MySongwriter from './src/screens/Dashboard/Profile/NewScreens/MySongwriter'
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/Store';

console.disableYellowBox = true
const App = () => {
  return (
     <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
  
        <Navigation />
      </PersistGate>
      </Provider>
      )
}
export default App
