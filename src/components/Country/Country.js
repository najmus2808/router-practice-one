
import React from 'react';
import { Button } from 'react-bootstrap';

const Country = (props) => {
    const { name, capital } = props.country
    const countryStyle = {
        border: '1px solid black',
        borderRadius: '10px',
        margin: '10px',
        padding: '10px'

    }
    return (
        <div style={countryStyle}>
            <h2>Name: {name}</h2>
            <h4>Capital: {capital}</h4>
            <Button variant="primary">Primary</Button>{' '}
        </div>
    );
};

export default Country;