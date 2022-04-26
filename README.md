![img](./src/assets/node.png)
## API de consulta de encomendas, cep e consulta de preço e prazo

Esta API tem como finalidade realizar consultas para fazer rastreamento encomendas dos correios, consulta CEPs, e calculo de preço e prazo de entrega.
A consulta de encomenta foi realizada tendo como base numa API externa da [ProxyApp](https://proxyapp.correios.com.br/v1/sro-rastro), que recebe como parâmetro o código de rastreamento, já 
para consultar o CEP e os preços e prazos de entrega foi utilizado a ferramenta dos [Correios Brasil](https://npm.io/package/correios-brasil). 

## Instalação

Para rodar o projeto deve ter instalado o Node JS e o NPM e rodar os comandos abaixo:

```bash
  npm install 
  npm run start
```

## Documentação da API

#### Rota de consulta de encomendas

```http
  GET /rastrear/:codigo
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `codigo` | `string` | **Obrigatório**. O código de rastreamento da encomenda |

#### Retorna um JSON

```http
  Deve retornar um JSON com os dados de rastreamento do pedido como no exemplo abaixo.
  {
    "objetos": [
        {
            "codObjeto": "QH991577104BR",
            "dtPrevista": "2022-04-18T20:58:00",
            "eventos": [
                {
                    "codigo": "BDE",
                    "descricao": "Objeto entregue ao destinatário",
                    "dtHrCriado": "2022-04-18T08:40:06",
                    "tipo": "01",
                    "unidade": {
                        "endereco": {
                            "cidade": "TIANGUA",
                            "uf": "CE"
                        },
                        "tipo": "Agência dos Correios"
                    },
                    "urlIcone": "/public-resources/img/smile.png"
                },
                {
                    "codigo": "OEC",
                    "descricao": "Objeto saiu para entrega ao destinatário",
                    "dtHrCriado": "2022-04-18T08:22:47",
                    "tipo": "01",
                    "unidade": {
                        "endereco": {
                            "bairro": "CENTRO",
                            "cep": "62320970",
                            "cidade": "TIANGUA",
                            "logradouro": "RUA CAPITAO JOAQUIM LOURENCO",
                            "numero": "650",
                            "uf": "CE"
                        },
                        "tipo": "Agência dos Correios"
                    },
                    "urlIcone": "/public-resources/img/pre-atendimento-cor.png"
                },
                {
                    "codigo": "RO",
                    "descricao": "Objeto em trânsito - por favor aguarde",
                    "dtHrCriado": "2022-04-09T09:58:59",
                    "tipo": "01",
                    "unidade": {
                        "endereco": {
                            "cidade": "FORTALEZA",
                            "uf": "CE"
                        },
                        "tipo": "Unidade de Tratamento"
                    },
                    "unidadeDestino": {
                        "endereco": {
                            "cidade": "TIANGUA",
                            "uf": "CE"
                        },
                        "tipo": "Agência dos Correios"
                    },
                    "urlIcone": "/public-resources/img/caminhao-cor.png"
                },
                {
                    "codigo": "RO",
                    "descricao": "Objeto em trânsito - por favor aguarde",
                    "dtHrCriado": "2022-03-30T04:12:06",
                    "tipo": "01",
                    "unidade": {
                        "endereco": {
                            "cidade": "SERRA",
                            "uf": "ES"
                        },
                        "tipo": "Unidade de Tratamento"
                    },
                    "unidadeDestino": {
                        "endereco": {
                            "cidade": "FORTALEZA",
                            "uf": "CE"
                        },
                        "tipo": "Unidade de Tratamento"
                    },
                    "urlIcone": "/public-resources/img/caminhao-cor.png"
                },
                {
                    "codigo": "DO",
                    "descricao": "Objeto em trânsito - por favor aguarde",
                    "dtHrCriado": "2022-03-29T17:38:13",
                    "tipo": "01",
                    "unidade": {
                        "endereco": {
                            "cidade": "SERRA",
                            "uf": "ES"
                        },
                        "tipo": "Unidade de Tratamento"
                    },
                    "unidadeDestino": {
                        "endereco": {
                            "cidade": "SERRA",
                            "uf": "ES"
                        },
                        "tipo": "Unidade de Tratamento"
                    },
                    "urlIcone": "/public-resources/img/caminhao-cor.png"
                },
                {
                    "codigo": "PO",
                    "descricao": "Objeto postado",
                    "dtHrCriado": "2022-03-29T17:36:45",
                    "tipo": "01",
                    "unidade": {
                        "endereco": {
                            "cidade": "SERRA",
                            "uf": "ES"
                        },
                        "tipo": "Unidade de Tratamento"
                    },
                    "destinatario": {},
                    "urlIcone": "/public-resources/img/agencia-cor.png"
                }
            ],
            "modalidade": "F",
            "tipoPostal": {
                "categoria": "ENCOMENDA PAC",
                "descricao": "ETIQUETA LOGICA PAC QH",
                "sigla": "QH"
            },
            "habilitaAutoDeclaracao": false,
            "permiteEncargoImportacao": false,
            "habilitaPercorridaCarteiro": false,
            "bloqueioObjeto": false,
            "possuiLocker": false,
            "habilitaLocker": false,
            "habilitaCrowdshipping": false
        }
    ],
    "quantidade": 1,
    "resultado": "Todos os Eventos",
    "versao": "1.7.3"
}
````

#### Rota de consulta de CEP

```
  GET /consulta/:cep
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `cep` | `string` | **Obrigatório**. O cep do endereço a ser pesquisado |

#### Retorna um JSON

```
  Deve retornar um JSON com os dados do CEP como no exemplo abaixo.

{
    "cep": "21770-200",
    "logradouro": "Rua Claudino Barata",
    "complemento": "",
    "bairro": "Realengo",
    "localidade": "Rio de Janeiro",
    "uf": "RJ",
    "ibge": "3304557",
    "gia": "",
    "ddd": "21",
    "siafi": "6001"
}
````

## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack, usando as tecnologias Node JS no Back-end e React no Fron-end, API Restfull e estudando outras tecnologias interessantes e em alta no mercado.

## 🛠 Habilidades
Javascript, HTML, CSS, Node JS, PHP, Mongo DB, React...

## 🔗 Links
[![GitHub](https://img.shields.io/badge/github-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Diones25)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/diones-pereira-alves-31bb3969/)