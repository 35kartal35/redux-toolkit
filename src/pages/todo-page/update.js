
import { Form, Row, Col, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../../state/todoSlice";

export default function Update() {

    const todoState = useSelector(state => state.todoState)
    const dispatch = useDispatch()



    return (
        <>
            <div>
                <Form onSubmit={event => {
                    event.preventDefault()
                    const formData = new FormData(event.target);
                    const formValueJson = Object.fromEntries(formData.entries());
                    dispatch(updateTodo(formValueJson))

                }}>


                    <Row>
                        <Col sm={4}>
                            <Form.Group >
                                <Form.Label>
                                    {todoState}
                                </Form.Label>
                                <Form.Control type="text" name="title" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group>
                                <Form.Label>
                                    Yapıldı mı?
                                </Form.Label>
                                <Form.Check name="done" value="1" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>

                            <Button type="submit" className="mt-4">
                                TODO Ekle
                            </Button>

                        </Col>
                    </Row>
                </Form>

                <Table>
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Başlık
                            </th>
                            <th>
                                Yapıldı mı?
                            </th>

                            <th>
                                İşlem
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr >
                            <td>
                                ...
                            </td>
                            <td>
                                ...
                            </td>

                            <td>
                                <Button variant="primary" className="me-2">
                                    Düzenle
                                </Button>

                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>




        </>
    )
}
