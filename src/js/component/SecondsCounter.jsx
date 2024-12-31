import React from "react";
import Digit from "./Digit";
import Icon from "./Icon";
import swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";

const SecondsCounter = (props) => {

    const [counterStart, setCounterStart] = useState(0);
    const [moving, setMoving] = useState(false);
    const [countdown, setCountdown] = useState(false);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        let Interval = null;
        if (moving) {
            Interval = setInterval(() => {
                setCounterStart(number => {
                    if (countdown) {
                        if (number > 0) {
                            if (number === alert) {
                                swal.fire({
                                    imageUrl: "https://i.pinimg.com/originals/c5/41/49/c541499c87b75eb01037d384b1ddba1f.jpg",
                                    html: `<h1>Te quedan ${alert} segundos para terminar.</h1>`,
                                    imageHeight: "400",
                                    imageWidth: "500",
                                    timer: "5000"
                                });

                            }
                            return number - 1
                        } else {
                            clearInterval(Interval)
                            return 0
                        }
                    } else {
                        if (alert != false && number + 1 === alert) {
                            swal.fire({
                                imageUrl: "https://i.pinimg.com/originals/c5/41/49/c541499c87b75eb01037d384b1ddba1f.jpg",
                                html: `<h1>Vas por el segundo ${alert}, vas bien.</h1>`,
                                imageHeight: "400",
                                imageWidth: "500",
                                timer: "5000"
                            });
                        }
                        return number + 1
                    }
                })
            }, 1000);
        } else {
            clearInterval(Interval)
        } return () => {
            clearInterval(Interval)
        }
    }, [moving, countdown, alert]);

    const Start = () => {
        setCounterStart(0)
        setMoving(true)
        setCountdown(false)
    };

    const StartDown = (userValue) => {
        setMoving(true)
        setCountdown(true)
        setCounterStart(userValue)
    };

    const StopCounter = () => {
        setMoving(false)
    };

    const ResumeCounter = () => {
        if (countdown && counterStart > 0) {
            setMoving(true)
        } else if (!countdown) {
            setMoving(true)
        }
    };

    const counter6 = Math.floor((counterStart % 1000000) / 100000)
    const counter5 = Math.floor((counterStart % 100000) / 10000)
    const counter4 = Math.floor((counterStart % 10000) / 1000)
    const counter3 = Math.floor((counterStart % 1000) / 100)
    const counter2 = Math.floor((counterStart % 100) / 10)
    const counter = Math.floor(counterStart % 10)



    return (



        <>
            <div className="row flex-row position-absolute top-50 start-50 translate-middle">
                <Icon />
                <Digit digit={counter6} />
                <Digit digit={counter5} />
                <Digit digit={counter4} />
                <Digit digit={counter3} />
                <Digit digit={counter2} />
                <Digit digit={counter} />
            </div>
            <div>
                <div className="d-flex flex-column">
                    <button type="button" className="start border rounded-3" onClick={Start}>Start Counter</button>
                    <button type="button" className="stop border rounded-3" onClick={StopCounter}>Stop Counter</button>
                    <button type="button" className="resume border rounded-3" onClick={ResumeCounter}>Resume Counter</button>
                    <input className="countdown border rounded-3" placeholder="Countdown" onChange={userValue => StartDown(parseInt(userValue.target.value))} />
                    <input className="alert border rounded-3" placeholder="Alert" onChange={AlertValue => setAlert(parseInt(AlertValue.target.value))} />
                </div>
            </div>
        </>
    )




};

export default SecondsCounter;