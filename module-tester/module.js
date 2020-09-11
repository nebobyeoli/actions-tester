import * as puppeteer from 'puppeteer';
// const puppeteer = require('puppeteer');

const lunge = async () => {
    puppeteer.launch({headless:false}).then(async browser => {
        await browser.newPage();
        await browser.close();
    });
    console.log('lunge has wooked');
}

const sayHello = () => {
    lunge();
    console.log('Hello World!');
}

module.exports.sayHello = sayHello;
// export { sayHello as sayHello };
