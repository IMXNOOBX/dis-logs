const {Webhook} = require("dis-logs")

const Logger = new Webhook("https://discord.com/api/webhooks/902608272492757042/uOx96dd-iTg1CUF9SD7M19vVDV5fHtDoRBoAr_uZW-sBm-UOX1yizelQFWvR_FSxcqkd");
Logger.setName("Prueba 00011")
Logger.setAV("") //https://onlinejpgtools.com/convert-jpg-to-base64


Logger.send("0", "Non type log!")                   //Non type error log!
Logger.send("1", "Sucess type log!")                //Sucess type log!
Logger.send("2", "Warning type log!")               //Warning type log!
Logger.send("3", "Error type log!")                 //Error type log!
Logger.send("None type log!")                       //None type log!