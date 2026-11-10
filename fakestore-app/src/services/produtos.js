// Problema 1: HomePage e DetalhesProdutoPage acessam a API diretamente. Services.js criada para alterar isso.

import api from './api';

export async function listarProdutos(categoria = '') {
  let url = '/products';

  if (categoria) {
    url = `/products/category/${categoria}`;
  }

  const { data } = await api.get(url);

  return data.products || [];
}

export async function buscarProdutoPorId(id) {
  const { data } = await api.get(`/products/${id}`);

  return data;
}