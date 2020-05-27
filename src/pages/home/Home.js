import React, {useState} from '../../../node_modules/react';
import axios from '../../../node_modules/axios';
import '../../App.css'; 
import * as S from './styled';
import {useHistory} from 'react-router-dom';

function App(props) {
  const [ usuario, setUsuario ] = useState('');
  const history = useHistory();  
  const [erro, setErro] = useState(false);
   
    function handlePesquisa(){

      axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setErro(false);
        history.push('/repositories');
      })
      .catch(err => {
        setErro(true);
      });
     // console.log(usuario);
    } 
    
  return (  

    <S.HomeContainer>
      <S.Content>          
      <S.Input placeholder="Usuário" value={usuario} className="usuarioInput" onChange={e => setUsuario(e.target.value)} />    
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : '' }      
    </S.HomeContainer>      
  );
}

export default App;

//useState retorna um array de duas posicoes
//[ usuario, setUsuario ]

//<p>{usuario}</p>
//<h1>{props.title} - {props.user }</h1>
//<input placeholder="Usuário" className="usuarioInput" onChange={e => console.log(e.target.value)} />    
