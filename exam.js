const readPkg = require('read-pkg');

(async () => {
    console.log(await readPkg());
    //=> {name: 'read-pkg', …}
 
    console.log(await readPkg({cwd: 'some-other-directory'}));
    //=> {name: 'unicorn', …}
})();