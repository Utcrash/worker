const simpleGit = require('simple-git');


const git = simpleGit(process.env['gitPath'] || '/home/utkarsh/work/data-stack/ds-ui-author')

const gitStatus = async (req, res) => {
  try{
    const result = await git.status
    res.json(result)
  }
  catch(err){
    res.status(400).json(err)
  }
}

const syncFork = async (req, res) => {
  try{
    const branch = req.body.branch;
    await git.fetch('upstream');
    const res = await git.checkout(branch);
    console.log(res) 
    await git.merge('upstream/'+branch);
    res.json('Completed')
  }
  catch(err){
    res.status(400).json(err)
  }
}

module.exports = (app) => {  
    app.route('/gitStatus')
        .get(gitStatus),
    app.route('/syncFork').post(syncFork)
}