import { Form } from "react-bootstrap";
import emailBg from '../../assets/emailBg.png'

const NewsLater = () => {
    return (
        <div style={{ backgroundImage: `url(${emailBg})`, filter: "opacity(85%)" }} className=" p-5 container">
            <div className="container bg-white p-5  w-50  my-5 mx-auto">
                <div className="text-center">
                    <h2 className="text-primary-emphasis text-bold">News Latter</h2>
                    <h6 className="text-secondary">Get update subscribe for 0$/week</h6>
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your comments</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default NewsLater;