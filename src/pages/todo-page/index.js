

import { Table, Button, Row, Col, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo } from "../../state/todoSlice"

export default function Todo() {
    const todoState = useSelector(state => state.todoState)
    const dispatch = useDispatch()
    console.log('>>TODO State', todoState)
    return (
        <>
            <div>
                <Form onSubmit={event => {
                    event.preventDefault()
                    const formData = new FormData(event.target);
                    const formValueJson = Object.fromEntries(formData.entries());
                    dispatch(addTodo(formValueJson))
                }}>


                    <Row>
                        <Col sm={4}>
                            <Form.Group >
                                <Form.Label>
                                    Todo Başlığı
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
                        {
                            todoState.todos.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>
                                            <input type="checkbox" checked={item.done} />
                                        </td>
                                        <td>
                                            <Button variant="primary" className="me-2">
                                                Düzenle
                                            </Button>
                                            <Button variant="danger" onClick={event => dispatch(deleteTodo(index))}

                                            >
                                                Sil
                                            </Button>
                                        </td>
                                    </tr>
                                )

                            })
                        }







                    </tbody>
                </Table>
            </div>
        </>
    )
}