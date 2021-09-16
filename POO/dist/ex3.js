"use strict";
var Fatura = /** @class */ (function () {
    function Fatura(_numeros, _descricao, _qtdComprada, _preco) {
        this._numeros = _numeros;
        this._descricao = _descricao;
        this._qtdComprada = _qtdComprada;
        this._preco = _preco;
    }
    Object.defineProperty(Fatura.prototype, "numeros", {
        //Getters
        get: function () {
            return this._numeros;
        },
        //Setters
        set: function (numeros) {
            this.numeros = numeros;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fatura.prototype, "descricao", {
        get: function () {
            return this._descricao;
        },
        set: function (descricao) {
            this._descricao = descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fatura.prototype, "qtdComprada", {
        get: function () {
            return this._qtdComprada;
        },
        set: function (qtdComprada) {
            this._qtdComprada = qtdComprada;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fatura.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (preco) {
            this._preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Fatura.prototype.fatura = function () {
        return this.qtdComprada * this.preco;
    };
    return Fatura;
}());
var f = new Fatura(987, 'Chocolate', 3, 15);
console.log(f);
console.log(f.fatura());
// try{
// }catch(error:any){
//     console.log(error.message)
// }
