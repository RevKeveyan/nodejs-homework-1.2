const axios = require('axios')
const { API_URL } = require('../constants');

exports.getPosts = async (req,res) => {
    try{
        const users = await axios.get(`${API_URL}/posts`);

        res.status(200).json({
            success: true,
            status:200,
            data: users.data,
        });
    }catch(error){
        res.status(500).json({
            status: 500, // dzerov en talis chenq kara erroric stananq
            massage:'Something went wrong',
            data:null,
        });
    }
}
exports.getPost = async (req,res) => {
    try{
        const {userId} = req.params;
        const posts = await axios.get(`${API_URL}/posts?${userId}`);
        res.status(200).json({
            success: true,
            status:200,
            data: posts.data,
        });
    }catch(error){
        res.status(500).json({
            status: 500,
            massage:'Something went wrong',
            data:null,
        });
    }
}

exports.getPostById = async (req,res) => {
    try{
        const {userId} = req.params;
        const {postId} = req.params;

        const posts = await axios.get(`${API_URL}/posts?${userId}`);
        res.status(200).json({
            success: true,
            status:200,
            data: posts.data.filter(elem => elem.id === +postId),
        });
    }catch(error){
        res.status(500).json({
            status: 500,
            massage:'Something went wrong',
            data:null,
        });
    }
}