const fetch=require('node-fetch')
const { json } = require('body-parser')

function converterValor(req,res){
    (async () => {
        const response = await fetch('https://economia.awesomeapi.com.br/all/USD-BRL');
        const json = await response.json();
        const valorDolar=json.USD.ask
        const valorConvertido= req.params.valor_real / valorDolar
        //console.log(json.USD.ask* req.params.valor_real);
        res.json(valorConvertido)
       
    })();
    
    
}
module.exports={converterValor}