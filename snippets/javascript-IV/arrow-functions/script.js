function somaNormal(a, b) {
    return a + b
}

const somaArrow = (a, b) => a+b;

console.log(
`
Soma normal: ${somaNormal(1, 1)}
Soma com arrow function: ${somaArrow(1, 1)}
`)

const cidades = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc'];
const cidadesComP = cidades.filter(cidade => cidade[0].toLowerCase() === 'p');
console.log(
`
Cidades que começam com a letra "P": ${cidadesComP};
`
)