import {cadastrar} from '../../api/anime';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function Index() {
    const [nome, setNome] = useState('');
    const [id, setId] = useState(0);

    const navigate = useNavigate();

    function ConsultarTds(){
        navigate('/')
    }

    async function salvarClick(){
        try
        {
            if(id === 0){
                const novo = await cadastrar(nome);
                setId(novo.id);
                alert('🔥 anime cadastradooooooo');
            }
            else{
                alert('clique novamente para cadastrar...');
            }
        }
        catch(err)
        {
            if(err.response)
                alert(err.response.data.erro);
            else
                alert(err.message);
        }
    }

    function novoClick(){
        setId(0);
        setNome('');
    }

    return (
        <main className='page page-cadastrar'>
            
            <div className='container'>
                
                <div className='conteudo'>
                    <section>
                        <h1 className='titulo'><span>&nbsp;</span> Cadastrar AAAnime</h1>

                        <div className='form-colums'>
                            <div>
                                <div className='form-row'>
                                    <label>Nome:</label>
                                    <input type='text' placeholder='Nome do anime' value={nome} onChange={e => setNome(e.target.value)}/>
                                </div>
                            </div>
                            <div>
                                <br />
                                <br />
                                <div className='form-row'>
                                    <label></label>
                                    <div className='btnSalvar'>
                                        <button onClick={salvarClick}> SALVAR </button> &nbsp; &nbsp;
                                        <button onClick={novoClick}> NOVO </button> &nbsp; &nbsp;
                                        <button onClick={ConsultarTds}> CONSULTAR ANIMES </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}
