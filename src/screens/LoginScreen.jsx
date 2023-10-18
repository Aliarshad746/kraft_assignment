import { useEffect } from 'react';
import {useState, useContext} from 'react'
import {Container, Form, Button, Card} from "react-bootstrap"
import { DataContext } from '../App';
import {useNavigate} from "react-router-dom"
import Message from '../components/Message';
import {isEmpty} from "lodash"

function LoginScreen({verifyStakeHolder = () => {}, error = ''}) {

    const {stakeHolder = {}} = useContext(DataContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault()
        verifyStakeHolder(email, password)
    }

    useEffect(() => {
        if(!isEmpty(stakeHolder)){
            navigate("/");
        }

    },[JSON.stringify(stakeHolder)])


  return (
    <Container>
        {error ? <Message variant="danger">{error}</Message> : null}
        <Card className='mt-3'>
            <Card.Body>
            <h3 className='my-3'>Login</h3>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password" value={password} onChange={(e) => setPassword(e.target.value)}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default LoginScreen