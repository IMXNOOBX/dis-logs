## To Start This Project

### `npm i dis-logs`

Install the package by running the command in your terminal.

### `how to use!`

```js
const { Webhook } = require("dis-logs")

const Logger = new Webhook("");
Logger.setName("Test For The Documentation")
Logger.setAV("") //https://onlinejpgtools.com/convert-jpg-to-base64


Logger.console("This log only will be printed in the Terminal!")

Logger.success("This will be sent with a green success color")

Logger.warn("This will be sent with a yellow warn color")

Logger.error("This will be sent with a red error color")

Logger.send("This will be sent without any color") 
```
#### `Image`

![alt text](https://cdn.discordapp.com/attachments/780313867300896798/902623007518900245/unknown.png)
