const fs = require('fs');

const name = process.env.npm_package_name;
const outdir = process.env.npm_package_outdir;
const exename = process.env.npm_package_exename;

const moveExec = (postfix) => {
    if (fs.existsSync(`${name}-${postfix}`)) {
        if (fs.existsSync(`${outdir}/${exename}-${postfix}`))
            fs.unlinkSync(`${outdir}/${exename}-${postfix}`);
        fs.renameSync(`${name}-${postfix}`, `${outdir}/${exename}-${postfix}`);
    }
}

const mkdirif = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        console.log(`Created new ${dir} directory`);
    }
}

const renameExecs = () => {
    mkdirif(outdir);
    moveExec('win.exe');
    moveExec('linux');
    moveExec('macos');
    console.log('Renamed created executables');
}

renameExecs();
