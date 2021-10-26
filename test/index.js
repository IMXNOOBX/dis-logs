const {Webhook} = require("dis-logs")

const logger = new Webhook("");
logger.setName("Prueba 00011")
logger.setAV("") //https://onlinejpgtools.com/convert-jpg-to-base64


logger.send("0", "Non type error log!") //none
logger.send("1", "Suceed type error log!")//sucess 
logger.send("2", "Warning type error log!")//warning
logger.send("3", "Error type error log!")//error
logger.send("None type error log!") //test