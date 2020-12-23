// From https://stackoverflow.com/a/55049611

/**
 * Option 1: Provide a HTTP endpoint
 * For this option, you setup a server which handles the incoming request and runs the task (making a screenshot) for you:
 * 
 * Start the application with node server.js
 * and you can now pass the URL to your server and get a screenshot back from your server:
 * http://localhost:4000/screenshot?url=https://example.com/
 * 
 * The response from the server could then be used as as the source of an image element in your application.
 */

const puppeteer = require('puppeteer');
const express = require('express');

const app = express();

app.get('/screenshot', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(req.query.url); // URL is given by the "user" (your client-side application)
    const screenshotBuffer = await page.screenshot();

    // Respond with the image
    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': screenshotBuffer.length
    });
    res.end(screenshotBuffer);

    await browser.close();
})

app.listen(4000);
