const fs = require('fs');
function logReqRes(filenme){
        fs.appendFile(
            fielename,
            `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}\n`,
            (err, data) => {
                next();
            }
        );
    return (req, res, next)
}

module.exports = {
    logReqRes,
}