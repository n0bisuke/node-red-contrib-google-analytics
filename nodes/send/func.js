'use strict'

const {google} = require('googleapis');

//メッセージ取得関数
const sendMessage = async (auth, raw) => {
    const gmail = google.gmail({version: 'v1', auth});

    const res = await gmail.users.messages.send({
        userId: 'me',
        resource: {raw: raw}
    });
    return res.data;
}

module.exports = sendMessage;