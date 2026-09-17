import { useState } from 'react'
import styles from './FormCalculadora.module.css'

function FormCalculadora() {

    // Declaração das variáveis de estado
    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [operacao, setOperacao] = useState('+')
    const [resultado, setResultado] = useState(null)

    // Função Limpar
    function limpar() {
        setNumero1('')
        setNumero2('')
        setOperacao('+')
        setResultado(null)
    }

    // Função Calcular
    function calcular(e) {

        // Evita recarregar a página
        e.preventDefault()

        // Transformando os valores em números
        const num1 = parseFloat(numero1)
        const num2 = parseFloat(numero2)

        let resultadoCalculo

        // Verificando a operação escolhida
        if (operacao === '+') {
            resultadoCalculo = num1 + num2
        } else if (operacao === '-') {
            resultadoCalculo = num1 - num2
        } else if (operacao === '*') {
            resultadoCalculo = num1 * num2
        } else if (operacao === '/') {
            resultadoCalculo = num1 / num2
        }

        // Exibindo o resultado
        setResultado(resultadoCalculo)
    }

    return (
        <div>
            <form onSubmit={calcular} className={styles.formContainer}>

                <h2>Calculadora Simples</h2>

                <div className={styles.numero}>
                    <input
                        type="number"
                        placeholder="Primeiro número..."
                        value={numero1}
                        onChange={(e) => setNumero1(e.target.value)}
                    />
                </div>

                <div className={styles.numero}>
                    <input
                        type="number"
                        placeholder="Segundo número..."
                        value={numero2}
                        onChange={(e) => setNumero2(e.target.value)}
                    />
                </div>

                <div className={styles.operacao}>
                    <select
                        value={operacao}
                        onChange={(e) => setOperacao(e.target.value)}
                    >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">×</option>
                        <option value="/">/</option>
                    </select>
                </div>

                <div className={styles.btn}>
                    <input type="submit" value="Calcular" />
                    <input
                        type="button"
                        value="Limpar"
                        onClick={limpar}
                    />
                </div>

                <div className={styles.resultado}>
                    <p>Resultado: {resultado}</p>
                </div>

            </form>
        </div>
    )
}

export default FormCalculadora