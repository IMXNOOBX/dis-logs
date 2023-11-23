const { Webhook } = require('../index'); // Here you would use require('dis-logs') instead
const { image } = require('./image');

async function main() {
    if (process.argv.length < 3) {
        throw new Error("Please provide a webhook URL as an argument.");
    }

    const log = new Webhook(process.argv[2]);

	/**
	 * @description set the name of the webhook
	 */
    log.set_name("Test For The Documentation");

	/**
	 * @description set the avatar of the webhook
	 * @see https://onlinejpgtools.com/convert-jpg-to-base64 to convert your image to base64
	 */
    log.set_avatar(image);

	// Wait for the avatar to be set and avoid rate limits
	await sleep(3000);

    /**
	 * @description locally log to the console
	 */
    log.console("This log only will be printed in the Terminal!");

	/**
	 * @description log a success type log to discord
	 */
    log.success("This will be sent with a green success color");
    await sleep(1000);

    /**
	 * @description log a warning type log to discord
	 */
    log.warn("This will be sent with a yellow warn color");
    await sleep(1000);

	/**
	 * @description log a error type log to discord
	 */
    log.error("This will be sent with a red error color");
    await sleep(1000);

    /**
	 * @description log to discord
	 */
    log.send("This will be sent without any color");
    await sleep(1000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

main().catch(error => console.error(error));
