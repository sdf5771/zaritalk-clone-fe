import React from 'react';
import {Route, Routes} from 'react-router-dom';
import RefundView from "./routes/refund/RefundView";
import ResidenceView from "./routes/residence/ResidenceView";
import CompleteRefundView from "./routes/complete-refund/CompleteRefundView";

function App() {
  return (
      <Routes>
        <Route path='/' element={<RefundView />} />
        <Route path='/residence' element={<ResidenceView />} />
        <Route path='/refund_complete' element={<CompleteRefundView />} />
      </Routes>
  );
}

export default App;
