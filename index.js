const centra = require('@aero/centra');

//webhook colors = https://www.spycolor.com/ you need to get the Decimal value

/**
*   const logtypes = {
*       none: '0',
*       sucess: '1',
*       warning: '2',
*       errored: '3'
*   };
**/

function getTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const result = `${hours}:${minutes}:${seconds}`;
    return result;
}

function logNPM(log) {
    console.log(`\x1b[31m[dis-logs|${getTime()}]\x1b[0m - ${log}`)
}

function logNone(text) {
    console.log(`[${getTime()}] - ${text}`)
}

function logSucces(text) {
    console.log(`[\x1b[32m${getTime()}\x1b[0m] - ${text}`)
}

function logWarn(text) {
    console.log(`[\x1b[33m${getTime()}\x1b[0m] - ${text}`)
}

function logErr(text) {
    console.log(`[\x1b[31m${getTime()}\x1b[0m] - ${text}`)
}

async function sendEmbed(webhook, logText, embedColor  = null) {
    const res = await centra(webhook + '?wait=true', 'POST').body({//await centra(this.url + '?wait=true', 'POST').body({
        username: this.username,
        avatar_url: this.avatarUrl,
        embeds: [
            {
                "color": embedColor,
                description: '```' +`[${getTime()}] - `+ logText + '```',
                timestamp: new Date(),
                footer: {
                    text: '[dis-logs]',
                    //icon_url: 'https://github.com/IMXNOOBX.png',
                },
            }
        ],
    })
        .header('Content-Type', 'application/json')
        .send('form');
    if (res.statusCode !== 200) { logNPM(`[Error] while sending through the webhook!\n\nDiscord response: ` + res.body.toString() + `\nWebhook url: ${webhook}\n`); return;}
}

class Webhook{

    constructor(url) {
        this.url = url;
    }

    async setName(name = null) {
        const res = await centra(this.url, 'PATCH').body({
            name,
        })
            .header('Content-Type', 'application/json')
            .send('form');
        if (res.statusCode !== 200) { logNPM(`[Error] while sending through the webhook!\n\nDiscord response: ` + res.body.toString() + `\nWebhook url: ${this.url}\n`); return;}
    }

    async setAV(base64AV = null) { //https://onlinejpgtools.com/convert-jpg-to-base64
        const res = await centra(this.url, 'PATCH').body({
            avatar: base64AV ? `data:image/jpeg;base64,${base64AV}` : null
        })
            .header('Content-Type', 'application/json')
            .send('form');
        if (res.statusCode !== 200) { logNPM(`[Error] while sending through the webhook!\n\nDiscord response: ` + res.body.toString() + `\nWebhook url: ${this.url}\n`); return;}
    }

    async delete() {
        const res = await centra(this.url, 'DELETE').body().send('form');
        if (res.statusCode !== 204) { logNPM(`[Error] while sending through the webhook!\n\nDiscord response: ` + res.body.toString() + `\nWebhook url: ${this.url}\n`); return;}
        logNPM("Webhook successfully deleted!");
    }

    async console(content) { //----------------------------------------------------> Local
        logNone(content);
    }

    async success(content) { //----------------------------------------------------> Success
        sendEmbed(this.url, content, 6487842);
        logSucces(content);
    }

    async warn(content) { //----------------------------------------------------> Warn
        sendEmbed(this.url, content, 15466274);
        logWarn(content);
    }

    async error(content) { //----------------------------------------------------> Error
        sendEmbed(this.url, content, 16720418);
        logErr(content);
    }

    async send(content) { //----------------------------------------------------> Error
        sendEmbed(this.url, content);
        logNone(content);
    }
}


module.exports.Webhook = Webhook;