import {React, Fragment} from 'react';
import {Form} from "react-bootstrap";

const SearchForm = ({weather, location, forecast}) => {
    return(
        <fragment>
        <p>
        <br/>
        <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Large text" />
        </Form.Group>
        </p>
        <p>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Show only owned repositories" />
        </Form.Group>
        </p>
        </fragment>
        
    )
}

export default SearchForm