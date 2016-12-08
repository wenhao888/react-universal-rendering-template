import express from "express";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';


import FileStreamRotator from 'file-stream-rotator';
import fs from 'fs';
import morgan from 'morgan';
import path from 'path';


import render from "./render";


var app = express();

/**
 * set up mvc
 */
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views',  __dirname +'/templates');


/**
 * set tup logging
 *
 */
var logDirectory = path.join(__dirname, 'log');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
var accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: path.join(logDirectory, 'access-%DATE%.log'),
    frequency: 'daily',
    verbose: false
});
app.use(morgan('combined', {stream: accessLogStream}));


/**
 * page render will react pages
 */
app.use(render);


app.listen(3000, () => console.log('server listening on port 3000!')
);

