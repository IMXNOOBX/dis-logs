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
#### `Image`

![alt text](https://cdn.discordapp.com/attachments/780313867300896798/902623007518900245/unknown.png)