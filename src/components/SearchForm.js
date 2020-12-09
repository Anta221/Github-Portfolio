import React, {Component}from 'react';
import { Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchForm = () => {
    return(
        <p>
            <br/>
            <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Large text" />
            </Form.Group>
      </p>
    )
}

export default SearchForm;