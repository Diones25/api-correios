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

    /**
     * JSON de exemplo para enviar no corpo da requisição
     * {
            "sCepOrigem": "81200100",
            "sCepDestino": "21770200",
            "nVlPeso": "1",
            "nCdFormato": "1",
            "nVlComprimento": "20",
            "nVlAltura": "20",
            "nVlLargura": "20",
            "nCdServico": [
                "04014", 
                "04510"
            ],
            "nVlDiametro": "0"
        }
    */

    const consultaBody = {        
        sCepOrigem: req.body.sCepOrigem,
        sCepDestino: req.body.sCepDestino,
        nVlPeso: req.body.nVlPeso, 
        nCdFormato: req.body.nCdFormato,
        nVlComprimento: req.body.nVlComprimento,
        nVlAltura: req.body.nVlAltura,
        nVlLargura: req.body.nVlLargura,
        nCdServico: req.body.nCdServico,
        nVlDiametro: req.body.nVlDiametro
    };
      
    calcularPrecoPrazo(consultaBody).then((response) => {        
        return res.json(response);
    });
}

