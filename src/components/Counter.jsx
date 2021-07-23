import { useState } from 'react';

// imutabilidade
// usuarios = ['diego3g', 'diegosf', 'danileao']
// novoUsuarios = [...usuarios, 'rafacamarda']

export function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
       setCounter(counter + 1); //'setCounter foi chamado para podermos ter o conteito de imutabilidade
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment 
            </button>
        </div>
    );
}