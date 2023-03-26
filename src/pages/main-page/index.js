
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrease, fiveDecrease, fiveIncrease, increase, setCounter } from "../../state/counterSlice";

export default function MainPage() {
    const dispatch = useDispatch()

    const counterState = useSelector(state => state.counterState)

    /*let reduxState = useSelector(state => state)
    reduxState = useSelector(state => {
        console.log('state')
        return state
    })

    console.log('>>reduxState', reduxState)*/


    return (
        <>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">
                    COUNTER ÖRNEĞİ
                </h1>
                <p class="fs-5 text-body-secondary">
                    Redux-Toolkit kullanarak Bir sayaç Yapımı
                </p>
            </div>
            <Row className={"justify-content-center"}>
                <Col sm={4}>
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">SAYAÇ</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title text-center">{counterState.counter}</h1>

                            <button onClick={e => {

                                dispatch(increase())
                            }}
                                type="button" class="w-100 btn btn-lg btn-outline-primary">Arttır</button>
                            <button
                                onClick={e => {
                                    dispatch(decrease())
                                }} type="button" class="w-100 btn btn-lg btn-outline-secondary">Azalt</button>
                            <button onClick={e => {
                                dispatch(setCounter())
                            }} type="button" class="w-100 btn btn-lg btn-outline-danger">Sıfırla</button>
                            <button
                                onClick={e => {
                                    dispatch(fiveIncrease())
                                }}
                                type="button" class="w-100 btn btn-lg btn-outline-success">5 tane arttır</button>
                            <button
                                onClick={e => {
                                    dispatch(fiveDecrease())
                                }}
                                type="button" class="w-100 btn btn-lg btn-outline-success">5 tane azalt

                            </button>
                        </div>
                    </div>

                </Col>
            </Row>


        </>
    )
}