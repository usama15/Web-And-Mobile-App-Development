import React from 'react';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    books {
        title
    }
  }
`;
export default function Accounts(){
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if(loading) return <h2>Data is Fetching...</h2>
    if(error) return <h2>Some error Occure</h2>
    const {books } =data 
    return(
    <div>
        {books.map((v,i) =>{
            const {title} = v
            return(
                <h3 key={i}>{title}</h3>
            )

        })}
    </div>
    )
}