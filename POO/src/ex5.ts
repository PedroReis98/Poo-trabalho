class Vendedores{
    constructor(
        public _nome:string,
        public _salario:number,
        public _valVenda:number
    ){ }

    get nome(){
        return this._nome
    }
    
    get salario(){
        return this._salario
    }
    
    get valVenda(){
        return this._valVenda
    }

    set nome(nome:string){
        if(nome == ''){
            throw new Error('Nome inválido')
        }
        this._nome = nome
    }

    set salario(salario:number){
        if(salario <= 0){
            throw new Error('Quantia insuficiente')
        }
        this._salario = salario
    }
    
    set valVenda(valVenda:number){
        if(valVenda <=0){
            throw new Error('Valor de venda inválido')
        }
        this._valVenda = valVenda
    }

    public desconto(){
        return (this.salario * 0.08)
    }
}

class VendedorDePessoaFisica extends Vendedores{
    constructor(
        nome:string,
        salario:number,
        valVenda:number,
        public _regiao:string
    ){super(nome, salario,valVenda)}

    get regiao(){
        return this._regiao
    }

    set regiao(regiao:string){
        let lower = regiao.toLowerCase()
        if(lower != 'norte' && lower != 'nordeste' && lower != 'centro-oeste' && lower != 'sul' && lower != 'sudeste'){
            throw new Error('Região inválida!')
        }

        this._regiao = regiao
    }

    public comissaoVendedor():number{
        let lower = this.regiao.toLowerCase()
        
        if(lower == 'norte'){  
            return this.valVenda * 0.15
        }else if(lower == 'nordeste'){
            return this.valVenda * 0.17
            }else if(lower == 'centro-oeste'){
                return this.valVenda * 0.14
                }else if(lower == 'sul'){
                    return this.valVenda * 0.10
                    }else if(lower == 'sudeste'){
                        return this.valVenda * 0.12
                    }
        return this.comissaoVendedor();
    }

    public salTot(){
        return (this.salario - this.desconto()) + this.comissaoVendedor() 
    }
}

class PJ extends Vendedores{
    constructor(
        nome:string,
        salario:number,
        valVenda:number,
        private _nomeEmp: string,
        private _totFunc:number,
        
    ){ super(nome, salario, valVenda)}

    get nomeEmp(){
        return this._nomeEmp
    }

    get totFunc(){
        return this._totFunc
    }

    set nomeEmp(nomeEmp:string){
        if(nomeEmp == ''){
            throw new Error('Nome da empresa não pode ser inválido')
        }
        this._nomeEmp = nomeEmp
    }

    set totFunc(totFunc:number){
        if(totFunc <=0){
            throw new Error('Total de funcionários não pode ser 0')
        }
        this._totFunc = totFunc
    }

    public comissaoEmpresa():number{
        if(this.valVenda < 5000){
            return this.valVenda * 0.02
        }else if(this.valVenda >= 5000 && this.valVenda < 10000){
            return this.valVenda * 0.04
        }else if(this.valVenda >= 10000){
            return this.valVenda * 0.06
        }

        return this.comissaoEmpresa()
    }

    public salTotEmp(){
        if(this.totFunc < 100){
            return this.salario + this.comissaoEmpresa() + 200
        }else {
            return this.salario + this.comissaoEmpresa() + 300
        }
    }

}

let pessoa2 = new VendedorDePessoaFisica('Wallace',5000, 500,'norte')
console.log(pessoa2.comissaoVendedor())
console.log(pessoa2.salTot())
// try{
//     pessoa2.nome = 'Ricardo'
//     pessoa2.salario = 1000
//     pessoa2.valVenda = 500
//     pessoa2.regiao = 'norte'
//     console.log(pessoa2)
//     console.log(pessoa2.comissaoVendedor())
//     console.log(pessoa2.salTot())
   
// }catch(error:any){
//     console.log(error.message)
// }