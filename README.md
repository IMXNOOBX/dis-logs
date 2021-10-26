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


Logger.send("0", "Non type log!")                   //Non type error log!
Logger.send("1", "Sucess type log!")                //Sucess type log!
Logger.send("2", "Warning type log!")               //Warning type log!
Logger.send("3", "Error type log!")                 //Error type log!
Logger.send("None type log!")                       //None type log!
```