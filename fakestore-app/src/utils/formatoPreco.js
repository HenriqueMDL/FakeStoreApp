// Conceito 3: A formatação de preços foi isolada em uma função específica,
// em vez de misturar essa lógica com a estrutura visual dos componentes.

export function formatarPreco(value) {
  return `R$ ${Number(value).toFixed(2).replace('.', ',')}`;
}