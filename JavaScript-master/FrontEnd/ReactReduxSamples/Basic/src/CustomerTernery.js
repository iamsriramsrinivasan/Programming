import React from "react";

const Customer = ({ customers }) => {
  return (
    <div className="customer-list">
      {customers.map(customer => {
        return customer.age > 30 ? (
          <div className="Customer" key={customer.id}>
            <div>Name: {customer.name}</div>
            <div>Age: {customer.age}</div>
            <div>EMail: {customer.email}</div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Customer;
