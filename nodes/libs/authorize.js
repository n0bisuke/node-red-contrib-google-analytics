const {google} = require('googleapis');

//認証関数
module.exports = (credentialsStr, AccessTokenStr) => {
    try {
        const credentials = JSON.parse(credentialsStr);
        const {client_secret, client_id, redirect_uris} = credentials.installed;
        const oAuth2Client = new google.auth.OAuth2(
            client_id,
            client_secret,
            redirect_uris[0]
        );
        oAuth2Client.setCredentials(JSON.parse(AccessTokenStr));
    
        return oAuth2Client;
    } catch (error) {
        console.log(error);
    }
}

// const authorize = () => {
//     const credentials = JSON.parse(config.Credentials);
//     const {client_secret, client_id, redirect_uris} = credentials.installed;
//     const oAuth2Client = new google.auth.OAuth2(
//         client_id,
//         client_secret,
//         redirect_uris[0]
//     );
//     oAuth2Client.setCredentials(JSON.parse(config.AccessToken));

//     return oAuth2Client;
// }