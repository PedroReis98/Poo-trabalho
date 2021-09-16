class Veiculos{
    constructor(
        private _modelo:string,
        private _marca:string,
        private _ano:string,
        private _valorLocacao:number,
        private _qtdDias:number
    ){ }
    
    //Getters
    get modelo(){
        return this._modelo
    }
    
    get marca(){
        return this._marca
    }
    get ano(){
        return this._ano
    }
    
    get valorLocacao(){
        return this._valorLocacao
    }
    
    get qtdDias(){
        return this._qtdDias
    }
    
    //Setters
    set modelo(modelo:string){
        if(modelo == ''){
            throw new Error('Modelo inválido')
        }

        this.modelo = modelo
    }

    set marca(marca:string){
        if(marca == ''){
            throw new Error('Marca inválida')
        }
    }

    set ano(ano:string){
        if(ano == ''){
            throw new Error('Formato de ano inválido')
        }
    }
    
    set valorLocacao(valorLocacao:number){
        if(valorLocacao <= 0){
            throw new Error('Valor inserido tem que ser maior que 0')
        }
    }
    
    set qtdDias(qtdDias:number){
        if(qtdDias <= 0){
            throw new Error('Número de dias tem que ser maior que 0')
        }
    }

    public passeio(){
        return this.valorLocacao * this.qtdDias
    }
}

const veiculo = new Veiculos('SUV', 'FIAT', '01/11/2000', 600, 15)

console.log(veiculo)
console.log(veiculo.passeio().toFixed(2))
// try{
//     veiculo.ano = ''
//     console.log(veiculo)
// }catch(error:any){
//     console.log(error.message)
// }
