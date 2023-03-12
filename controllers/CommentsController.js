const axios = require('axios')
const { API_URL } = require('../constants');

exports.getComments = async (req,res) => {
    try{
        const comments = await axios.get(`${API_URL}/comments`);

        res.status(200).json({
            success: true,
            status:200,
            data: comments.data,
        });
    }catch(error){
        res.status(500).json({
            satus: 500, // dzerov en talis chenq kara erroric stananq
            massahe:'Something went wrong',
            data:null,
        });
    }
}
exports.getComment = async (req,res) => {
    try{
        const {userId} = req.params;
        const {postId} = req.params;
        
        const posts = await axios.get(`${API_URL}/posts?${postId}`);
        res.status(200).json({
            success: true,
            status:200,
            data: posts.data.filter(elem => elem.userId === +userId),
        });
    }catch(error){
        res.status(500).json({
            status: 500,
            massage:'Something went wrong',
            data:null,
        });
    }
}