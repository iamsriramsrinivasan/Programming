import React, { Component } from "react";

class Customer extends Component {
  render() {
    const { customers } = this.props;

    const customerList = customers.map(customer => {
      return (
        <div className="Customer" key={customer.id}>
          <div>Name: {customer.name}</div>
          <div>Age: {customer.age}</div>
          <div>EMail: {customer.email}</div>
        </div>
      );
    });

    return <div className="customer-list">{customerList}</div>;
  }
}

export default Customer;
