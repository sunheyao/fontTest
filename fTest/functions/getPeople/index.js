const axios = require('axios');

module.exports = function (context, req) {    
    axios.get('http://5c92dbfae7b1a00014078e61.mockapi.io/owners')
        .then(response => {            
            
            context.res = {
                status: 200,
                body: response.data
            };
            
            context.done(); 
        })
        .catch(error => {
            console.log(error);
        });  
};
