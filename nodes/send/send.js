module.exports = (RED) => {
    'use strict';

    const authorize = require('../libs/authorize');
    const makeBody = require('./makeBody');
    const sendMessage = require('./func');
    
    const main = function(config){
        const node = this;
        RED.nodes.createNode(node, config);

        node.on('input', async msg => {  
            const messageBody = msg.payload;

            try {
                const auth = authorize(node.credentials.Credentials, node.credentials.AccessToken);

                const params = {
                    to: config.to,
                    from: config.from,
                    subject: config.subject,
                    message: messageBody || config.message
                };
            
                const raw = makeBody(params);
                const msg = await sendMessage(auth, raw);
                msg.payload = msg;
                node.send(msg);

            } catch (error) {
                console.log(error);
            }

        });
    }

    RED.nodes.registerType('Send', main, {
        credentials: {
            Credentials: {type:"password"},
            AccessToken: {type:"password"},
        },
    });
}