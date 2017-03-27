/**
 * Created by Tristan on 17/3/27.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    client_id: String,
    client_secret: String,
    auth_type: Array,
    create_time: Date
});

const Client = mongoose.model('client_table', clientSchema);