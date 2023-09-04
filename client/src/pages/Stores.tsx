import React from 'react';

const addresses = [
  {
    name: 'Main Store',
    address: '1234 Elm Street',
    city: 'New York',
    state: 'NY',
    postalCode: '10001',
    country: 'USA',
  },
  {
    name: 'Downtown Store',
    address: '567 Maple Avenue',
    city: 'Los Angeles',
    state: 'CA',
    postalCode: '90001',
    country: 'USA',
  },
  {
    name: 'Central Store',
    address: '789 Oak Road',
    city: 'Chicago',
    state: 'IL',
    postalCode: '60601',
    country: 'USA',
  },
  {
    name: 'Mall Store',
    address: '321 Pine Boulevard',
    city: 'Miami',
    state: 'FL',
    postalCode: '33101',
    country: 'USA',
  },
];

export default function Stores() {
  return (
    <div>
      <h2>Store Locations</h2>
      <ul style={{ listStyle: "none"}}>
        {addresses.map((store, index) => (
          <li key={index} >
            <h3>{store.name}</h3>
            <p>
              {store.address}, {store.city}, {store.state} {store.postalCode}
            </p>
            <p>{store.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}