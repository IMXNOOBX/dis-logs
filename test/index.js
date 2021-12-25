const {Webhook} = require("dis-logs")

const Logger = new Webhook("https://discord.com/api/webhooks/902608272492757042/uOx96dd-iTg1CUF9SD7M19vVDV5fHtDoRBoAr_uZW-sBm-UOX1yizelQFWvR_FSxcqkd");
Logger.setName("Prueba 00011")
Logger.setAV("") //https://onlinejpgtools.com/convert-jpg-to-base64



Logger.local("This log only will be printed in the Terminal!")                   //Non type log!

Logger.success("Non type log!")                                                  //Sucess type log!

Logger.warn("Warning type log!")                                                 //Warning type log!

Logger.error("Error type log!")                                                  //Error type log!

Logger.send("None type log!")                                                    //None type log!