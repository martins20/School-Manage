import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS:
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      console.log('Sucesso !');
      return newState;

    case types.BOTAO_CLICADO_FAILURE:
      console.log('Deu erro =(');
      return state;

    case types.BOTAO_CLICADO_REQUEST:
      console.log('Estou Fazendo a requisição');
      return state;

    default:
      return state;
  }
}
