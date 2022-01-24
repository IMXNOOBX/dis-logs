# dis-logs

This is my first mpn package!
It can be use for log your bots through a discord wenhook! You can download it from [here](https://www.npmjs.com/package/dis-logs)

## To Start This Project

### `npm i dis-logs`

Install the package by running the command in your terminal.

### `how to use!`

```js
const { Webhook } = require("dis-logs")

const Logger = new Webhook("YOUR_WEBHOOK");
Logger.setName("WENHOOK_NAME")
Logger.setAV("") //https://onlinejpgtools.com/convert-jpg-to-base64

// you can use any of this options
Logger.local("This log only will be printed in the Terminal!")                   //Non type log!

Logger.success("Success type log!")                                              //Sucess type log!

Logger.warn("Warning type log!")                                                 //Warning type log!

Logger.error("Error type log!")                                                  //Error type log!

Logger.send("None type log!")                                                    //Non type log!
```
