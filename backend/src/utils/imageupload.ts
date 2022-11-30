const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');


export const uploadimage = (file:any) => {
    const newdate = new Date().toLocaleDateString("fr-CA");    
    var dir = `public/uploads/${newdate}`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    
    const ext = file.name.split(".")[1]
    const filename = Date.now() + uuidv4() + '.' + ext;
    const filepath =    'images/' + newdate + '/' + filename;
    const newpath = path.join(process.cwd(), dir, filename);

  
    const files = file.mv(newpath, function (err:any) {
        if (err) console.log(err);
        else console.log('uploaddd');
    })

    return filepath;



}
