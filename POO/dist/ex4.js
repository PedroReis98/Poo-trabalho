"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ImpostoDeRenda = /** @class */ (function () {
    function ImpostoDeRenda(_nome, _rendaAnual) {
        this._nome = _nome;
        this._rendaAnual = _rendaAnual;
    }
    Object.defineProperty(ImpostoDeRenda.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome = '') {
                throw new Error('Nome inválido');
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImpostoDeRenda.prototype, "rendaAnual", {
        get: function () {
            return this._rendaAnual;
        },
        set: function (rendaAnual) {
            if (rendaAnual <= 0) {
                throw new Error('A renda esperada tem que ser maior que 0');
            }
            this._rendaAnual = rendaAnual;
        },
        enumerable: false,
        configurable: true
    });
    return ImpostoDeRenda;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, rendaAnual, _gastosComSaude) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this._gastosComSaude = _gastosComSaude;
        return _this;
    }
    Object.defineProperty(PessoaFisica.prototype, "gastosComSaude", {
        get: function () {
            return this._gastosComSaude;
        },
        set: function (gastosComSaude) {
            this._gastosComSaude = gastosComSaude;
        },
        enumerable: false,
        configurable: true
    });
    PessoaFisica.prototype.calcImpostoDeRendaPF = function () {
        if (this.rendaAnual < 20000) {
            return this.rendaAnual * 0.15;
        }
        else if (this.rendaAnual >= 2000 && this.gastosComSaude == 0) {
            return this.rendaAnual * 0.25;
        }
        else if (this.rendaAnual >= 2000 && this.gastosComSaude != 0) {
            return ((this.rendaAnual * 0.25) -
                (this.gastosComSaude * 0.5));
        }
    };
    PessoaFisica.prototype.message = function () {
        return "O imposto de renda do indiv\u00EDduo " + this.nome + " ficou em R$" + this.calcImpostoDeRendaPF();
    };
    return PessoaFisica;
}(ImpostoDeRenda));
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(nome, rendaAnual, _numFuncionarios) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this._numFuncionarios = _numFuncionarios;
        return _this;
    }
    Object.defineProperty(PessoaJuridica.prototype, "numFuncionarios", {
        get: function () {
            return this._numFuncionarios;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PessoaJuridica.prototype, "gastosComSaude", {
        set: function (numFuncionarios) {
            if (numFuncionarios == 0) {
                throw new Error('Quantidade de funcionários inválida');
            }
            this._numFuncionarios = numFuncionarios;
        },
        enumerable: false,
        configurable: true
    });
    PessoaJuridica.prototype.calcImpostoDeRendaPJ = function () {
        if (this.numFuncionarios <= 10) {
            return this.rendaAnual * 0.16;
        }
        else if (this.numFuncionarios >= 10) {
            return this.rendaAnual * 0.14;
        }
    };
    PessoaJuridica.prototype.message = function () {
        return "O imposto da empresa " + this.nome + " ficou em R$" + this.calcImpostoDeRendaPJ();
    };
    return PessoaJuridica;
}(ImpostoDeRenda));
var pessoa = new PessoaFisica('NEI', 0, 3000);
console.log(pessoa);
console.log(pessoa.message());
try {
}
catch (error) {
    console.log(error.message);
}
var empresa = new PessoaJuridica('PUC', 400000, 15);
console.log(empresa);
console.log(empresa.message());
try {
}
catch (error) {
    console.log(error.message);
}
