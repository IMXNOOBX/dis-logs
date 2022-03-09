const {Webhook} = require("dis-logs")

const Logger = new Webhook("");
Logger.setName("Test For The Documentation")
//Logger.setAV("") //https://onlinejpgtools.com/convert-jpg-to-base64



Logger.console("This log only will be printed in the Terminal!")                   //Non type log!

Logger.success("This will be sent with a green success color")                                                  //Sucess type log!

Logger.warn("This will be sent with a yellow warn color")                                                 //Warning type log!

Logger.error("This will be sent with a red error color")                                                  //Error type log!

Logger.send("This will be sent without any color")                                                    //None type log!
