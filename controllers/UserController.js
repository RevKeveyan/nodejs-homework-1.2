const axios = require('axios')
const { API_URL } = require('../constants');

exports.getUsers = async (req,res) => {
    try{
        const users = await axios.get(`${API_URL}/users`);

        res.status(200).json({
            success: true,
            status:200,
            data: users.data,
        });
    }catch(error){
        res.status(500).json({
            satus: 500, // dzerov en talis chenq kara erroric stananq
            massahe:'Something went wrong',
            data:null,
        });
    }
}

exports.getUser = async(req,res) =>{
    try{
        const {id} = req.params;
        const user = await axios.get(`${API_URL}/users/${id}`);

        res.status(200).json({
            success: true,
            status:200,
            data: user.data,
        });
    }catch(error){
        res.status(500).json({
            satus: 500, // dzerov en talis chenq kara erroric stananq
            massahe:'Something went wrong',
            data:null,
        });
    }
}