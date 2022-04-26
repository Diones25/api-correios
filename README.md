![img](./src/assets/node.png)
## API de consulta de encomendas, cep e consulta de preço e prazo

Esta API tem como finalidade realizar consultas para fazer rastreamento encomendas dos correios, consulta CEPs, e calculo de preço e prazo de entrega.
A consulta de encomenta foi realizada tendo como base numa API externa da [ProxyApp](https://proxyapp.correios.com.br/v1/sro-rastro), que recebe como parâmetro o código de rastreamento, já 
para consultar o CEP e os preços e prazos de entrega foi utilizado a ferramenta dos [Correios Brasil](https://npm.io/package/correios-brasil). 
