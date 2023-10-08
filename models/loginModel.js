const mongoose = require('mongoose');

const loginSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        created: {
            type: Date,
            required: true,
            default: Date.now,
        }
    },
)

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;