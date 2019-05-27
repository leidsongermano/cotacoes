const request = require('request');

const api_token = 'n6Qi6u8Rz45c0WfA8zYtjbx72iiryzPwD9OxT9vNFtzqiVN704psEMDkigWY';


const cotacao = (ativo, callback) =>{

    const url = `https://www.worldtradingdata.com/api/v1/stock?symbol=${ativo}&api_token=${api_token}`;
    
   request({url:url, json:true}, (err, response) => {

        if(err)
            {
                const errorMessage = {
                    message: `Deu erro do tipo ${err}`,
                    code: 500
                }
                callback(errorMessage, undefined)
            }
        else if(response.body.data === undefined)
            {
                const errorMessage = {
                    message: `Ativo [${ativo}] não encontrado`,
                    code: 404
                }
                callback(errorMessage, undefined)
            }
        else {
            const parsedJSON = response.body.data[0];
            const {symbol, name, price_open, price, day_high, day_low} = parsedJSON;
            const data = {symbol, name, price_open, price, day_high, day_low}
            callback(undefined,data);
        }

    });
}


module.exports = cotacao;