const fs = require('fs');

const validateApi = (req, res) => {
   try{
    const path = req.body.path;
    const check = fs.existsSync(path);
    if(check){
        process.env['gitPath'] = path;
    }
    res.json(check);
   }
   catch(err){
    res.status(400).json(err)
   }
}



module.exports = (app) => {  
    app.route('/validatePath')
        .post(validateApi)
}