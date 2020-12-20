import React, { useState } from 'react';
import { Button, Header, Input, Message } from 'semantic-ui-react'

import Settings from './Settings'
import styles from '../styles/game.module.css'

function Game(){
    const [settings, setSettings] = useState({
        multiplication: true,
        division: true,
        addition: true,
        subtraction: true
    });

    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState(0)

    function updateSettings(option){
        setSettings({
            ...settings,
            [option]: (!settings[option])
          })
    }

    function generateExpression(){
        const opperations = [];
        for (const property in settings) {
            if(settings[property]){
                opperations.push(property);
            }
        }
        const opperator = opperations[Math.floor(Math.random() * opperations.length)];
        const numA = Math.floor(Math.random() * 11);
        const numB = Math.ceil(Math.random() * 10);
        setQuestion(numA +" "+ opperator +" " + numB);
        switch(opperator) {
            case "multiplication":
              setAnswer(numA*numB);
              break;
            case "division":
                setAnswer(numA/numB);
              break;
            case "addition":
                setAnswer(numA+numB);
              break;
            case "subtraction":
            setAnswer(numA-numB);
            break;
          }
    }

    let userAnswer = "";

    function handleChange(e) {
        userAnswer = parseInt(e);
      }

    function submitAnswer(){
        console.log(userAnswer + " " + answer)
        if(userAnswer === answer){
            console.log("Correct!")
        } else {
            console.log("Wrong answer.")
        }
    }

    return(
            <div className={styles.body}>
                <div className={styles.content}>
                <Header as='h1' textAlign='center'>Math Master</Header>
                <Button onClick={generateExpression}>Start</Button>
                <Message content={question}/>
                <Input placeholder='Answer...' onChange={e => handleChange(e.target.value)}/>
                <Button onClick={submitAnswer}>Submit</Button>
                </div>
                <div className={styles.footer}>
                <Settings settings={settings} onClick={updateSettings}/>
                </div>
            </div>
    )
}

export default Game;