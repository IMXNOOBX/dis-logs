/**
 * @file dis-logs.js
 * @project dis-logs
 * @author IMXNOOBX
 *
 * @copyright (c) 2023 IMXNOOBX <https://github.com/IMXNOOBX>
 *
 * @license
 * Apache License 2.0
 * See <https://creativecommons.org/licenses/by-nc-nd/4.0/> for the full license text.
 *
 * @see https://www.spycolor.com/ to get the colors for the webhooks
 */

const centra = require('@aero/centra');

/**
 * Represents a Discord webhook.
 * @class
 */
class Webhook {
    /**
     * Creates a new Webhook instance.
     * @constructor
     * @param {string} webhook_url - The Discord webhook URL.
     * @param {string} name - Name for the discord webhook.
     * @param {string} avatar - Base64 encoded image to set.
     * @param {boolean} console - Whether to log to the console or not.
     */
    constructor(webhook_url, name, avatar, console = true) {
        if (!webhook_url) 
            console.warn("Warning: No webhook URL provided. The library will just log locally.");

        this.url = webhook_url;
        this.cout = console;

        if (name)
            this.set_name(name);

        if (avatar)
            this.set_avatar(avatar)
    }

    /**
    * @deprecated Use set_name(name) instead.
    * @param {string} name - The new name of the webhook.
    */
    setName(name) {
        console.warn('Warning: This fuction is deprecated, please use set_name(name) instead')
        this.set_name(name)
    }

    /**
    * @deprecated Use set_avatar(base64Avatar) instead.
    * @param {string} base64Avatar - The base64 encoded image for the avatar.
    */
    async setAvatar(base64Avatar) {
        console.warn('Warning: This fuction is deprecated, please use set_avatar(base64Avatar) instead')
        this.set_avatar(base64Avatar)
    }
    async setAV(base64Avatar) {
        console.warn('Warning: This fuction is deprecated, please use set_avatar(base64Avatar) instead')
        this.set_avatar(base64Avatar)
    }

    /**
     * Sets the name of the webhook.
     * @method
     * @async
     * @param {string|dis-logs} name - The new name of the webhook.
     */
    async set_name(name = 'dis-logs') {
        if (name.length > 32) throw new Error('Webhook name cannot be longer than 32 characters!');

        const res = await centra(this.url, 'PATCH').body({
            name,
        }).header('Content-Type', 'application/json').send('form');

        if (res.statusCode !== 200) 
            this._log_npm(`[Error] while sending through the webhook!\n\nDiscord response: ${res.body.toString()}\nWebhook url: ${this.url}\n`);
    }

    /**
     * Sets the avatar of the webhook using a base64 encoded image.
     * @method
     * @async
     * @param {string|null} base64Avatar - The base64 encoded image for the avatar.
     */
    async set_avatar(base64Avatar = null) {
        const res = await centra(this.url, 'PATCH').body({
            avatar: base64Avatar ? `data:image/jpeg;base64,${base64Avatar}` : null,
        }).header('Content-Type', 'application/json').send('form');

        if (res.statusCode !== 200) 
            this._log_npm(`[Error] Discord api returned invalid status code for ${this.url}`, `Discord response: ${res.body.toString()}`);
    }

    /**
     * Deletes the webhook.
     * @method
     * @async
     */
    async delete() {
        const res = await centra(this.url, 'DELETE').body().send('form');

        if (res.statusCode !== 204)
            this._log_npm(`[Error] Discord api returned invalid status code for ${this.url}`, `Discord response: ${res.body.toString()}`);
        else
            this._log_npm("[Success] Webhook successfully deleted!");
    }

    /**
    * Gets the current time in HH:mm:ss format.
    * @returns {string} The formatted time string.
    */
    get_time() {
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const result = `${hours}:${minutes}:${seconds}`;
        return result;
    }

    /**
     * Logs a message to the console with a timestamp and red color.
     * @param {string} texts - The log message.
     */
    _log_npm(...texts) {
        console.log(`\x1b[31m[${this.get_time()}]\x1b[0m | `, ...texts);
    }

    /**
     * Logs a message to the console with a timestamp.
     * @param {string} texts - The log message.
     */
    _log_none(...texts) {
        console.log(`[${this.get_time()}] | `, ...texts);
    }

    /**
     * Logs a success message to the console with a timestamp and green color.
     * @param {string} texts - The success message.
     */
    _log_success(...texts) {
        console.log(`[\x1b[32m${this.get_time()}\x1b[0m] | `, ...texts);
    }

    /**
     * Logs a warning message to the console with a timestamp and yellow color.
     * @param {string} texts - The warning message.
     */
    _log_warn(...texts) {
        console.log(`[\x1b[33m${this.get_time()}\x1b[0m] | `, ...texts);
    }

    /**
     * Logs an error message to the console with a timestamp and red color.
     * @param {string} texts - The error message.
     */
    _log_error(...texts) {
        console.log(`[\x1b[31m${this.get_time()}\x1b[0m] | `, ...texts);
    }

    /**
     * Sends an embed message to Discord using a webhook.
     * @param {string} logText - The text to be included in the embed.
     * @param {number|null} embedColor - The color of the embed. If null, default color is used.
     * @returns {Promise<void>} A promise that resolves after sending the embed.
     */
    async _send_embed(logText, embedColor = null) {
        if (!this.url)
            return;

        const res = await centra(this.url + '?wait=true', 'POST').body({
            embeds: [
                {
                    color: embedColor,
                    description: `\`\`\`js\n${logText}\`\`\``,
                    timestamp: new Date(),
                    footer: {
                        text: 'dis-logs',
                    },
                },
            ],
        }).header('Content-Type', 'application/json').send('form');

        if (res.statusCode !== 200) 
            this._log_npm(`[Error] Discord api returned invalid status code for ${this.url}`, `\tDiscord response: ${res.body.toString()}`);
    }

    /**
     * Logs a message to the console and sends an embed to Discord.
     * @method
     * @async
     * @param {string} content - The log content.
     */
    async console(content) {
        this._log_none(content);
    }

    /**
     * Logs a success message to the console and sends a success embed to Discord.
     * @method
     * @async
     * @param {string} content - The success content.
     */
    async success(content) {
        this._send_embed(content, 6487842);

        if (this.cout)
            this._log_success(content);
    }

    /**
     * Logs a warning message to the console and sends a warning embed to Discord.
     * @method
     * @async
     * @param {string} content - The warning content.
     */
    async warn(content) {
        this._send_embed(content, 15466274);
        if (this.cout)
            this._log_warn(content);
    }

    /**
     * Logs an error message to the console and sends an error embed to Discord.
     * @method
     * @async
     * @param {string} content - The error content.
     */
    async error(content) {
        this._send_embed(content, 16720418);
        if (this.cout)
            this._log_error(content);
    }

    /**
     * Sends a message to Discord using an embed.
     * @method
     * @async
     * @param {string} content - The content to send.
     */
    async send(content) {
        this._send_embed(content);
        if (this.cout)
            this._log_none(content);
    }
}

module.exports.Webhook = Webhook;