import {generatePassword} from "./helpers";
import {useState} from "react";

export const GeneratorPassword = ({lengthPassword, strategyTitle}) => {
    const [password, setPassword] = useState('');

    const setPasswordHandler = () => {
        setPassword(generatePassword(lengthPassword, strategyTitle))
    }
    return (
        <div>
            <button
                style={{
                    cursor: "pointer",
                    marginBottom:'10px',
                    padding: '5px 10px'
                }}
                onClick={setPasswordHandler}>Generate password</button>
            <div style={{
                fontWeight: 600,
                fontSize: '24px'
            }}>
                {password}
            </div>
        </div>
    )
}
