'use strict'

const puppeteer = require("puppeteer");
//This is just a demo function I put together that works locally
async function main(args) {
  const browser = await puppeteer.launch(
    {executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'}
  );
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
  
  return {
  body: 'page created by puppeteer.'
  }
}

exports.main = main


app.use(session({
  secret: process.env.SG_Secret,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
  mongoUrl: process.env.DB_CS,
  mongoOptions: {
  sslCert: mongoCertPath,
  }
  })
  }));


  app.use(session({
    secret: process.env.SG_Secret,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
    mongoUrl: process.env.DB_CS,
    mongoOptions: {
    sslCert: mongoCertPath,
    rejectUnauthorized: false
    }
    })}));