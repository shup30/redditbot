require('dotenv').config();

const Snoowrap = require('snoowrap');
const { CommentStream } = require("snoostorm");



const r = new Snoowrap({
    userAgent: 'reddit-bot-node',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});

const stream = new CommentStream(r, { subreddit: "soccer", results: 50 });

const dirtext = "Valverde Stays!\n\n *** \n ^(Beep boop this is bot send no reply)";

const list = {
    r1: {
      text: '#Hey This is Bot!\n\n *** \n ^(Beep boop this is bot send no reply)',
    },
    r2: {
        text: '##This is very good bot\n\n *** \n ^(Beep boop this is bot send no reply!)',
    },
    r3: {
        text: '###This bot knows how to play football!\n\n *** \n ^(Beep boop this is bot send no reply)',
    },
};
  


// On comment, perform whatever logic you want to do
stream.on('item', comment => {

    if (comment.body.includes('target')) {

        const length = Object.keys(list).length;

        //generate a random number that's between 0 and the length of your object
        const random_number = Math.floor((Math.random() * length) + 0);

        //get your random item from the object
        const random_item = list[Object.keys(list)[random_number]];


        console.log(random_item);
        console.log(random_item.text);
        comment.reply(random_item.text);
    }
});
  