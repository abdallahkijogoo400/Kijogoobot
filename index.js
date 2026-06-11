const { default: makeWASocket } = require("@whiskeysockets/baileys")

async function startBot() {
    const sock = makeWASocket({})

    console.log("Kijogoo Bot Started")
}

startBot()
