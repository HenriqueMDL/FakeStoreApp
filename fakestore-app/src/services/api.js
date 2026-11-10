// Conceito 2: A configuração da comunicação HTTP está centralizada em um único arquivo.
// Assim, as páginas podem compartilhar a mesma instância do Axios, evitando repetir configurações de endereço
// e tempo limite.

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});

export default api;