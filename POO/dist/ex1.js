"use strict";
var Pessoa = /** @class */ (function () {
    function Pessoa(_nome, _sexo, _idade) {
        this._nome = _nome;
        this._sexo = _sexo;
        this._idade = _idade;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        //Getters
        get: function () {
            return this._nome;
        },
        //Setters
        set: function (nome) {
            if (nome == '') {
                throw new Error('Nome inválido');
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            if (sexo != 'Masculino' && sexo != 'Feminino') {
                throw new Error('Sexo inválido, insira masculino ou feminino');
            }
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            if (idade == 0) {
                throw new Error('Insira uma idade válida');
            }
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.prototype.ageValidation = function () {
        if (this.idade >= 18) {
            return 'Pessoa maior de idade';
        }
        else {
            return 'Pessoa menor de idade';
        }
    };
    return Pessoa;
}());
var p1 = new Pessoa('Ana', 'Feminino', 21);
// console.log(p1)
// console.log(p1.ageValidation())
// try{
//     p1.nome = ''
//     console.log(p1)
// }catch(error:any){
//     console.log(error.message)
// }
