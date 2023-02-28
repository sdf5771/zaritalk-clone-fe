import React from 'react';
import {Route, Routes} from 'react-router-dom';
import RefundView from "./routes/refund/RefundView";

function App() {
  return (
      <Routes>
        <Route path='/' element={<RefundView />} />
      </Routes>
  );
}

export default App;
