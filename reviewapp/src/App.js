import ReviewPopup from './components/ReviewPopup';

import { useEffect, useState } from 'react';
import { reviewService } from './services/ReviewService'
import './App.css';

function App() {

  return (
    <div className="App">
      <ReviewPopup/>
    </div>
  );
}

export default App;
