/**
 * Created by Tristan on 17/3/27.
 */

let oauthService = {
    passwordAuth: async (clientId, username, password) => {

        return {clientId: clientId, username: username, password: password}
    },

    codeAuth: async () => {

    }
}

module.exports = oauthService