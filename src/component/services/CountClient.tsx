import React from 'react';
import '../../styles/services/CountClient.css';

const CountClient = () => {

  return (
    <section className="count-client">
      <div className="count-client__item">
        <h3>6</h3>
        <span>Happy Client</span>
      </div>
      <div className="count-client__item">
        <h3>11</h3>
        <span>Completed Projects</span>
      </div>
      <div className="count-client__item">
        <h3>7M</h3>
        <span>Transactions</span>
      </div>
      <div className="count-client__item">
        <h3>6000+</h3>
        <span>Customers</span>
      </div>
    </section>
  );
};

export default CountClient;
