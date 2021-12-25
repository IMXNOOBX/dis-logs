## To Start This Project

### `npm i dis-logs`

Install the package by running the command in your terminal.

### `how to use!`

```js
const { Webhook } = require("dis-logs")

const Logger = new Webhook("YOUR_WEBHOOK");
Logger.setName("WENHOOK_NAME")
Logger.setAV("") //https://onlinejpgtools.com/convert-jpg-to-base64


Logger.local("This log only will be printed in the Terminal!")                   //Non type log!

Logger.success("Success type log!")                                              //Sucess type log!

Logger.warn("Warning type log!")                                                 //Warning type log!

Logger.error("Error type log!")                                                  //Error type log!

Logger.send("None type log!")                                                    //Non type log!
```
#### `Image`

![alt text](https://cdn.discordapp.com/attachments/780313867300896798/902623007518900245/unknown.png)