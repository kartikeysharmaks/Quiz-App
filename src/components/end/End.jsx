import React, { useContext } from 'react';
import { QuizContext } from '../../helpers/Contexts';
import { FaHome } from "react-icons/fa"
import './End.css';

const End = () => {
    const { gameState, setGameState } = useContext(QuizContext);
    const { score, setScore } = useContext(QuizContext);
    const { counter, setCounter } = useContext(QuizContext);

    const d = new Date();
    var minutes;
    var time = 100-counter;
    var result;

    //Result message for timer
    if (time<100) {
        result = `your time: ${time} seconds`;
    } else {
        result = "you didn't finish on time."
    }

    if(d.getMinutes()<10) {
        minutes="0"+d.getMinutes();
    } else {
        minutes = d.getMinutes();
    }

    //Try again - show main screen, set score back to 0, set counter back to 240 seconds
    const backOnMain = () => {
        setScore(0);
        setCounter(100);
        setGameState("main");
    }

    return <div className="End fadeIn delay-0_3">
        <div className="terminal-wrapper">
            <div className="terminal-top ">
                <div className="top-left">
                    <div className="red circle ">

                    </div>
                    <div className="yellow circle">

                    </div>
                    <div className="green circle">

                    </div>
                </div>
                <div className="top-mid">
                    <div className="house ">
                        <FaHome />
                    </div>
                    <span className="">Quiz App</span>
                </div>
                <div>

                </div>
            </div>
            <div className="terminal-bot">
                {/* End message */}
                <p className="terminal-prompt last-login">Quiz App</p>
                <p className="terminal-prompt mt-25 terminal-msg"><span className="terminal-green">{d.getHours()}:{minutes} </span> hello, friend</p>
                <p className="terminal-prompt terminal-msg"><span className="terminal-green">{d.getHours()}:{minutes} </span> our journey has come to an end.</p>
                {/* Score */}
                <p className="terminal-prompt terminal-msg"><span className="terminal-green">{d.getHours()}:{minutes} </span> your score: {score}/10 </p>
                {/* Timer */}
                <p className="terminal-prompt terminal-msg"><span className="terminal-green">{d.getHours()}:{minutes} </span> {result} </p>
                {/* Depends on score get different message */}
                <p className="terminal-prompt terminal-msg"><span className="terminal-green">{d.getHours()}:{minutes} </span> { score > 5 ? 'you are one of the biggest fans of Mr. Robot' : 'you still have to learn, then come back and try again.'} </p>
                {/* End question */}
                <div className="mt-25 terminal-prompt terminal-text">
                    <p className="terminal-green">{d.getHours()}:{minutes}</p>
                    <p className="pl-7">Not satisfied? Try again.</p>
                </div>
                {/* Try again button */}
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="terminal-green">{d.getHours()}:{minutes}</p>
                    <button onClick={() => { backOnMain(); }} className="startBtn button-transition">Try again</button>
                </div>
            </div>
        </div>
    </div>
};

export default End;