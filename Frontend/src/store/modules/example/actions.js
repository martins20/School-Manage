import * as types from '../types';

export function HandleButtonRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}

export function HandleButtonSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}

export function HandleButtonFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}
