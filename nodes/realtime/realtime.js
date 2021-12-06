module.exports = (RED) => {
    'use strict';

    const {BetaAnalyticsDataClient} = require('@google-analytics/data');
    const analyticsDataClient = new BetaAnalyticsDataClient();
    
    const main = function(config){
        const node = this;
        RED.nodes.createNode(node, config);

        node.on('input', async msg => {  
            // const messageBody = msg.payload;
            try {
                const propertyId = config.propertyId;

                const [response] = await analyticsDataClient.runRealtimeReport({
                    // The property parameter value must be in the form `properties/1234`
                    // where `1234` is a GA4 property Id.
                    property: `properties/${propertyId}`,
                    dimensions: [
                    {
                        name: 'audienceName',
                    },
                    ],
                    metrics: [
                    {
                        name: 'activeUsers',
                    },
                    ],
                });
                // console.log('Report result:');
                // response.rows.forEach(row => {
                //     console.log(row.dimensionValues[0], row.metricValues[0]);
                // });
                const val = response.rows[0].metricValues[0].value;
                console.log(`人数:`,response.rows[0].metricValues[0].value);

                const msg = response.rows[0].metricValues[0];
                msg.payload = msg;
                node.send(msg);

            } catch (error) {
                console.log(error);
            }

        });
    }

    RED.nodes.registerType('Realtime', main, {
        credentials: {
            // Credentials: {type:"password"},
            // AccessToken: {type:"password"},
        },
    });
}