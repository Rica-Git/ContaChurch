import React from 'react';
import ReactDOM from 'react-dom';
import './styled.css';

function Home() {
    
    return (
        <>
            <div className='fundo'>
                <table>
                    <tr>
                        <td>
                            <div className='esquerda'>
                                
                                <div className='caixa_top' >
                                    <h1 className='texto_cor'>Conta Church</h1>

                                </div>


                                <div className='opcoes'>
                                    <img src='demonstrativo.JPG' />
                                    <h1 className='texto_cor'>Demonstrativos</h1>
                                </div>

                                <div className='opcoes'>
                                    <img src='Entrada.JPG' />
                                    <h1 className='texto_cor'>Entrada</h1>
                                </div>

                                <div className='opcoes'>
                                    <img src='Saida.JPG' />
                                    <h1 className='texto_cor'>Saida</h1>
                                </div>

                            </div>
                        </td>
                        <td>
                            <div className='lado_direito'>
                                <p id='texto'>
                                Opção de visibilidade mês
                                Opção de visibilidade total ano corrente
                                Opção de visibilidade ano passado
                                Opção de visibilidade de evolução
                                </p>

                            </div>
                        </td>
                    </tr>

                </table>




            </div>
        </>
    );
}
export default Home;