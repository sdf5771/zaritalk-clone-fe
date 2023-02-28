import React from 'react';
import {Route, Routes} from 'react-router-dom';
import RefundView from "./routes/refund/RefundView";
import ResidenceView from "./routes/residence/ResidenceView";

function App() {
  return (
      <Routes>
        <Route path='/' element={<RefundView />} />
        <Route path='/residence' element={<ResidenceView />} />
      </Routes>
  );
}

export default App;
