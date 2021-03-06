import _ from "lodash";

export const randomSymbol = (string, isUpperCse) => {
    const index = Math.floor(Math.random() * string.length);
    return isUpperCse ? string[index].toUpperCase() : string[index];
}

export const charsLetter = 'abcdefghijklmnopqrstuvwxyz';
export const charsSymbols = '+-_=/;><)(*&^%$#@!&{}[]';
export const charsNumbers = '0123456789';

export const lettersGenerator = (isUpperCase) => randomSymbol(charsLetter, isUpperCase)

export const symbolGenerator = () => randomSymbol(charsSymbols, false);

export const numberGenerator = () => Math.floor(Math.random() * 10);
export const indexGenerator = (length) => Math.floor(Math.random() * length);


export const regPasswordOneLetterOneNumber = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{}$/;
export const regPasswordOneLetterOneNumberOneSymbol = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{}$/;
export const regPasswordOneLetterOneUpperLetterOneNumber = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{}$/;
export const regPasswordOneLetterOneUpperLetterOneNumberOneSymbol = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{}$/;

export const getRandomIndexStrategy = (strategies) => Math.floor(Math.random() * strategies.length);

const returnPasswordAfterWhile = (strategies, lengthPassword) => {
    let password = '';
    while (password.length < lengthPassword) {
        const strategy = strategies[getRandomIndexStrategy(strategies)];
        switch (strategy) {
            case 'number': {
                password += numberGenerator();
                break;
            }
            case 'letter': {
                password += lettersGenerator(false);
                break;
            }
            default: password += symbolGenerator();
        }
    }
    return password;
}

export const generatePassword = (lengthPassword, strategyTitle) => {

    const arrLetter = charsLetter.split('');
    const arrUpperLetter = charsLetter.toUpperCase().split('');
    const arrNumbers = charsNumbers.split('');
    const arrSymbols = charsSymbols.split('');


    switch (strategyTitle) {
        case 'oneLetterOneNumber': {
            const strategies = ['number', 'letter'];
            const password = returnPasswordAfterWhile(strategies, lengthPassword);
            if (password.match(regPasswordOneLetterOneNumber)) {
                return password;
            } else {
                const arrPassword = password.split('');
                const checkPassword = [...arrPassword];
                const finalPassword = [...arrPassword];

                const checkLetter = _.intersection(checkPassword, arrLetter);

                if(!checkLetter.length) {
                    const changeIndex = indexGenerator(arrPassword.length)
                    finalPassword[changeIndex] = arrLetter[indexGenerator(arrLetter.length)];
                    arrPassword.splice(1, changeIndex);
                }

                const checkNumbers = _.intersection(checkPassword, arrNumbers);

                if(!checkNumbers.length) {
                    const changeIndex = indexGenerator(arrPassword.length);
                    finalPassword[changeIndex] = arrNumbers[indexGenerator(arrNumbers.length)]
                    arrPassword.splice(1, changeIndex);
                }
                return finalPassword.join('');
            }
        }
        case 'oneLetterOneNumberOneSymbol': {
            const strategies = ['number', 'letter', 'symbol'];
            const password = returnPasswordAfterWhile(strategies, lengthPassword);

            if (password.match(regPasswordOneLetterOneNumberOneSymbol)) {
                return password;
            } else {
                const arrPassword = password.split('');
                const checkPassword = [...arrPassword];
                const finalPassword = [...arrPassword];

                const checkLetter = _.intersection(checkPassword, arrLetter);

                if(!checkLetter.length) {
                    const changeIndex = indexGenerator(arrPassword.length)
                    finalPassword[changeIndex] = arrLetter[indexGenerator(arrLetter.length)];
                    arrPassword.splice(1, changeIndex);
                }

                const checkNumbers = _.intersection(checkPassword, arrNumbers);

                if(!checkNumbers.length) {
                    const changeIndex = indexGenerator(arrPassword.length);
                    finalPassword[changeIndex] = arrNumbers[indexGenerator(arrNumbers.length)]
                    arrPassword.splice(1, changeIndex);
                }

                const checkSymbols = _.intersection(checkPassword, arrSymbols);

                if(!checkSymbols.length) {
                    const changeIndex = indexGenerator(arrPassword.length);
                    finalPassword[changeIndex] = arrSymbols[indexGenerator(arrSymbols.length)]
                    arrPassword.splice(1, changeIndex);
                }

                return finalPassword.join('');
            }
        }
        case 'oneLetterOneUpperLetterOneNumberOneSymbol': {
            const strategies = ['number', 'letter', 'symbol'];
            const password = returnPasswordAfterWhile(strategies, lengthPassword);

            if (password.match(regPasswordOneLetterOneUpperLetterOneNumberOneSymbol)) {
                return password;
            } else {
                const arrPassword = password.split('');
                const checkPassword = [...arrPassword];
                const finalPassword = [...arrPassword];

                const checkLetter = _.intersection(checkPassword, arrLetter);

                if(!checkLetter.length) {
                    const changeIndex = indexGenerator(arrPassword.length)
                    finalPassword[changeIndex] = arrLetter[indexGenerator(arrLetter.length)];
                    arrPassword.splice(1, changeIndex);
                }

                const checkUpperLetter = _.intersection(checkPassword, arrUpperLetter);

                if(!checkUpperLetter.length) {
                    const changeIndex = indexGenerator(arrPassword.length);
                    finalPassword[changeIndex] = arrUpperLetter[indexGenerator(arrUpperLetter.length)];
                    arrPassword.splice(1, changeIndex);
                }

                const checkNumbers = _.intersection(checkPassword, arrNumbers);

                if(!checkNumbers.length) {
                    const changeIndex = indexGenerator(arrPassword.length);
                    finalPassword[changeIndex] = arrNumbers[indexGenerator(arrNumbers.length)]
                    arrPassword.splice(1, changeIndex);
                }

                const checkSymbols = _.intersection(checkPassword, arrSymbols);

                if(!checkSymbols.length) {
                    const changeIndex = indexGenerator(arrPassword.length);
                    finalPassword[changeIndex] = arrSymbols[indexGenerator(arrSymbols.length)]
                    arrPassword.splice(1, changeIndex);
                }

                return finalPassword.join('');
            }
        }
        default: {
            const strategies = ['number', 'letter'];
            const password = returnPasswordAfterWhile(strategies, lengthPassword);
            if (password.match(regPasswordOneLetterOneUpperLetterOneNumber)) {
                return password;
            } else {

                const arrPassword = password.split('');
                const checkPassword = [...arrPassword];
                const finalPassword = [...arrPassword];

                const checkLetter = _.intersection(checkPassword, arrLetter);

                if(!checkLetter.length) {
                    const changeIndex = indexGenerator(arrPassword.length)
                    finalPassword[changeIndex] = arrLetter[indexGenerator(arrLetter.length)];
                    arrPassword.splice(1, changeIndex);
                }

                const checkUpperLetter = _.intersection(checkPassword, arrUpperLetter);

                if(!checkUpperLetter.length) {
                    const changeIndex = indexGenerator(checkPassword.length);
                    finalPassword[changeIndex] = arrUpperLetter[indexGenerator(arrUpperLetter.length)];
                    arrPassword.splice(1, changeIndex);
                }

                const checkNumbers = _.intersection(checkPassword, arrNumbers);

                if(!checkNumbers.length) {
                    const changeIndex = indexGenerator(arrPassword.length);
                    finalPassword[changeIndex] = arrNumbers[indexGenerator(arrNumbers.length)]
                    arrPassword.splice(1, changeIndex);
                }

                return finalPassword.join('');
            }
        }
    }
}
