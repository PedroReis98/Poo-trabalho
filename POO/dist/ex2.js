"use strict";
var Veiculos = /** @class */ (function () {
    function Veiculos(_modelo, _marca, _ano, _valorLocacao, _qtdDias) {
        this._modelo = _modelo;
        this._marca = _marca;
        this._ano = _ano;
        this._valorLocacao = _valorLocacao;
        this._qtdDias = _qtdDias;
    }
    Object.defineProperty(Veiculos.prototype, "modelo", {
        //Getters
        get: function () {
            return this._modelo;
        },
        //Setters
        set: function (modelo) {
            if (modelo == '') {
                throw new Error('Modelo inválido');
            }
            this.modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            if (marca == '') {
                throw new Error('Marca inválida');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (ano) {
            if (ano == '') {
                throw new Error('Formato de ano inválido');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "valorLocacao", {
        get: function () {
            return this._valorLocacao;
        },
        set: function (valorLocacao) {
            if (valorLocacao <= 0) {
                throw new Error('Valor inserido tem que ser maior que 0');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "qtdDias", {
        get: function () {
            return this._qtdDias;
        },
        set: function (qtdDias) {
            if (qtdDias <= 0) {
                throw new Error('Número de dias tem que ser maior que 0');
            }
        },
        enumerable: false,
        configurable: true
    });
    Veiculos.prototype.passeio = function () {
        return this.valorLocacao * this.qtdDias;
    };
    return Veiculos;
}());
var veiculo = new Veiculos('SUV', 'FIAT', '01/11/2000', 600, 15);
console.log(veiculo);
console.log(veiculo.passeio().toFixed(2));
// try{
//     veiculo.ano = ''
//     console.log(veiculo)
// }catch(error:any){
//     console.log(error.message)
// }
