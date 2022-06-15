import {useState} from "react";
import {GeneratorPassword} from "./GeneratorPassword";
import './generator.css';


export const GeneratorComponent = () => {
    const [strategy, setStrategy] = useState('oneLetterOneUpperLetterOneNumber');
    const [passwordLength, setPasswordLength] = useState(8);

    const setPasswordLengthHandler = (value) => {
        if(value < 8 || value > 99) return;
        setPasswordLength(value);
    }

    return (
        <div className={'wrapper'} style={{padding: '20px'}}>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                rowGap: '10px',
                marginBottom: '20px'
            }}>
                <label>
                    <input
                        type={'radio'}
                        name={'strategy'}
                        checked={strategy === 'oneLetterOneNumber'}
                        value={'oneLetterOneNumber'}
                        onChange={() => setStrategy('oneLetterOneNumber')}
                    />
                    One letter one number
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'strategy'}
                        checked={strategy === 'oneLetterOneNumberOneSymbol'}
                        value={'oneLetterOneNumberOneSymbol'}
                        onChange={() => setStrategy('oneLetterOneNumberOneSymbol')}
                    />
                    One letter one number one symbol
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'strategy'}
                        checked={strategy === 'oneLetterOneUpperLetterOneNumber'}
                        value={'oneLetterOneUpperLetterOneNumber'}
                        onChange={() => setStrategy('oneLetterOneUpperLetterOneNumber')}
                    />
                    One letter one number one upper letter
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'strategy'}
                        checked={strategy === 'oneLetterOneUpperLetterOneNumberOneSymbol'}
                        value={'oneLetterOneUpperLetterOneNumberOneSymbol'}
                        onChange={() => setStrategy('oneLetterOneUpperLetterOneNumberOneSymbol')}
                    />
                    One letter one number one upper letter one symbol
                </label>
                <div>
                    <label htmlFor={'passwordLength'}>
                        Password length
                    </label>
                    <input
                        style={{
                            marginLeft: '5px'
                        }}
                        id={'passwordLength'}
                        type="number"
                        value={passwordLength}
                        onChange={(e) => setPasswordLengthHandler(+e.target.value)}
                    />
                </div>
            </div>
            <GeneratorPassword
                lengthPassword={passwordLength}
                strategyTitle={strategy}
            />
        </div>
    )
}

