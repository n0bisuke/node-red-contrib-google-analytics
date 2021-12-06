'use strict'

const makeBody = (params) => {
    params.subject = new Buffer.from(params.subject).toString('base64'); //日本語対応
    const str = `Content-Type: text/plain; charset=\"UTF-8\"\n`
              + `MIME-Version: 1.0\n`
              + `Content-Transfer-Encoding: 7bit\n`
              + `to: ${params.to} \n`
              + `from: ${params.from} \n`
              + `subject: =?UTF-8?B?${params.subject}?= \n\n`
              +  params.message;
    return new Buffer.from(str).toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
}

module.exports = makeBody;