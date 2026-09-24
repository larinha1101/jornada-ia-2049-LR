const nomes = ["Fernanda", "Gabriel", "Juliana", "Lucas", "Amanda", "Rafael", "Beatriz"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}
