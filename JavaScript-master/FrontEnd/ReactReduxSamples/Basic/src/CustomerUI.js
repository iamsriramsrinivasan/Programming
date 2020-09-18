import React from "react";

const Customer = ({ customers, deleteCustomer }) => {
  const customerList = customers.map(customer => {
    return (
      <div className="Customer" key={customer.id}>
        <div>Name: {customer.name}</div>
        <div>Age: {customer.age}</div>
        <div>EMail: {customer.email}</div>
        <button
          onClick={() => {
            deleteCustomer(customer.id);
          }}
        >
          Delete Customer
        </button>
      </div>
    );
  });

  return <div className="customer-list">{customerList}</div>;
};

export default Customer;
