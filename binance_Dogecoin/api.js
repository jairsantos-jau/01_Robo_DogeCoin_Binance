const axios = require('axios');
const querystring = require('querystring');


async function publiCall(path,data,method ='GET'){
    try{

        const qs = data ? `?${querystring.stringify(data)}` :''; 
        const result = await axios({
         method,
         url : `${process.env.API_URL}${path}${qs}`
        })
        return result.data;
    }
    catch(err){
        console.log(err);
    }
}
async function time(){
    return publiCall('/v3/time');

}

async function depth( symbol = 'DOGEBRL',limit = 5){
    return publiCall('/v3/depth',{symbol,limit});
}


module.exports ={time,depth}