import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = () => {
  return (  
  <div className="d-flex justify-content-center mb-5 mt-5">
    <div className="Loading"><Spinner color="info" style={{ width: '5rem', height: '5rem' }}/></div>
  </div>
  );
}

export default Loading;
