import axios from 'axios';
import { consultarCep, calcularPrecoPrazo } from 'correios-brasil';

export const rastreioEncomendas = async (req, res) => {
    const codigo = req.params.codigo;
    // Código de rastreio utilizado como exemplo: QH991577104BR

    axios.get(`https://proxyapp.correios.com.br/v1/sro-rastro/${codigo}`) 
    .then(function (response) {

      //console.log(JSON.stringify(response.data));
      return res.json(response.data);  
    })
}

export const buscaCep = async (req, res) => {
    const cep = req.params.cep;

    consultarCep(cep).then((response) => {
        return res.json(response); 
    });
}

export const consultaPrecoEPrazo = async (req, res) => {
    const cep = req.params.cep;

    let args = {
        // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
        sCepOrigem: '81200100',
        sCepDestino: '21770200',
        nVlPeso: '1',
        nCdFormato: '1',
        nVlComprimento: '20',
        nVlAltura: '20',
        nVlLargura: '20',
        nCdServico: ['04014', '04510'], //Array com os códigos de serviço
        nVlDiametro: '0',
    };
      
    calcularPrecoPrazo(args).then((response) => {
        console.log(response);
        return res.json(response);
    });
}

