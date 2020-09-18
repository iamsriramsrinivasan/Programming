import React from "react";

const Customer = ({ customers }) => {
  const customerList = customers.map(customer => {
    if (customer.age > 30) {
      return (
        <div className="Customer" key={customer.id}>
          <div>Name: {customer.name}</div>
          <div>Age: {customer.age}</div>
          <div>EMail: {customer.email}</div>
        </div>
      );
    } else {
      return null;
    }
  });

  return <div className="customer-list">{customerList}</div>;
};

export default Customer;
