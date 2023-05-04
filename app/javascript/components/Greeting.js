import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/action_reducer";

const Greeting = () => {
    const greeting = useSelector((state) => state.greetings)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGreeting())
    }, [])

    return (
        <>
            <h2>{greeting[0]?.message}</h2>
        </>
    )
}

export default Greeting;