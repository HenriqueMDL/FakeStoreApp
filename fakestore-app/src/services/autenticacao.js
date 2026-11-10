// Problema 2: LoginPage concentra interface e autenticação. Autenticacao adicionado.

import api from './api';

export async function autenticarUsuario(usuario, senha) {
  try {
    const { data } = await api.post('/auth/login', {
      username: usuario.trim(),
      password: senha,
      expiresInMins: 60,
    });

    if (data && data.accessToken) {
      return data;
    }

    throw new Error('Falha na autenticação. Tente novamente.');
  } catch (err) {
    if (err.response && err.response.status === 400) {
      throw new Error('Usuário ou senha inválidos.');
    }

    if (err.request) {
      throw new Error('Erro de conexão. Verifique sua internet.');
    }

    throw new Error(
      err.message || 'Ocorreu um erro inesperado.'
    );
  }
}