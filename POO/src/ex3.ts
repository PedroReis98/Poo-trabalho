class Fatura{
    constructor(
        private _numeros:number, 
        private _descricao:string,
        private _qtdComprada:number,
        private _preco:number
   ){ }
   
   //Getters
   get numeros(){
      return this._numeros 
   }
    
   get descricao(){
      return this._descricao 
   }
    
   get qtdComprada(){
      return this._qtdComprada 
   }
    
   get preco(){
      return this._preco 
   }
   
   //Setters
   set numeros(numeros:number){
      this.numeros = numeros
   }

   set descricao(descricao:string){
     this._descricao = descricao 
   }

   set qtdComprada(qtdComprada:number){
      this._qtdComprada = qtdComprada 
   }

   set preco(preco:number){
      this._preco = preco
   }
   
   public fatura(){
        return this.qtdComprada * this.preco
    }
}

let f = new Fatura(987, 'Chocolate', 3, 15)
console.log(f)
console.log(f.fatura())

// try{
   
// }catch(error:any){
//     console.log(error.message)
// }
