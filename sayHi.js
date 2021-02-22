const config =require('./config');
function sayHi(language,name){
    if (language == "en" || language=="sr"){
        console.log(`${config[language]} ${name}`);
    }else{
            console.log(`Hola  ${name}`);
        }
    }
    module.exports = sayHi; 