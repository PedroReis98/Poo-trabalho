interface iEndereco{
    rua:string,
    numero: number,
    bairro: string,
    cidade: string
}

let endereco: iEndereco ={
    rua:'Nossa senhora de Copacabana',
    numero:3015,
    bairro: 'Copa',
    cidade: 'Rio de Janeiro'
}

console.log(endereco)