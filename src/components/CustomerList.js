import axios from 'axios';
import React, { useState, useEffect } from 'react';

const url = 'http://184.72.184.62:8001/api/customers';

const CustomerList = () => {
    let [customer, setCustomer] = useState([]);

    useEffect(() => {
        axios
            .get(url, { headers: { Accept: 'application/json' } })
            .then((resp) => resp.data) // response body is accessed via resp.data
            .then((data) => data.customerlist)
            .then(setCustomer);
    }, []);
    console.log(customer);
    return (
        <>
            <h3>Here is the list of all shipping companies</h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Contact Title</th>
                    </tr>
                </thead>
                <tbody>
                    {customer &&
                        customer?.map((cus) => (
                            <tr key={cus.customerId}>
                                <td>{cus.customerId}</td>
                                <td>{cus.companyName}</td>
                                <td>{cus.contactName}</td>
                                <td>{cus.contactTitle}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
};

export default CustomerList;