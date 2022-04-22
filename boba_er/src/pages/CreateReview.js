import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Card, Button, Container } from 'react-bulma-components';


function CreateReview({isAuth}) { 
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    // const onChange = (dates) => {
    //     const [start, end] = dates;
    //     setStartDate(start);
    //     setEndDate(end);
    // };

return (
    <div className="Reviews">
      <Container>
        <Card>
          <Card.Content>
            <h1>Add a review to your boba</h1>
            <p>Name of the drink</p>
            <form>
              <Form.Field>
                <Form.Control>
                <Form.Label>Rating</Form.Label>
                <Form.Input type="text" placeholder="Select rating"></Form.Input>
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Control>
                <Form.Label>Leave a comment for your drink</Form.Label>
                <Form.Input type="text" placeholder="Type your comment here"></Form.Input>
                </Form.Control>
              </Form.Field>
            </form>
          </Card.Content>
          <Button>Submit</Button>
        </Card>
        </Container>
        <DatePicker selected={startDate} startDate={startDate} endDate={endDate} selectsRange selectsDisabledDaysInRange inline/>
    </div>
);
}

export default CreateReview;