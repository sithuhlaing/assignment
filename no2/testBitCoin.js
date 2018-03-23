var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var url = 'https://blockchain.info/charts/';
var port = 9945;

function BTC() {

    request('https://blockchain.info/de/ticker', (error, response, body) => {

        // parse the json answer and get the current bitcoin value
        const data = JSON.parse(body);
        value = (parseInt(data.THB.buy, 10) + parseInt(data.THB.sell, 10)) / 2;

        console.log(value);
    });
}

BTC();