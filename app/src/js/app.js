'use strict';

const firebaseConfig =  require('./config').firebase;
const google = require('./Authentication').googleAuth;
const github = require('./Authentication').githubAuth;
const twitter = require('./Authentication').twitterAuth;


const googleBtn = document.getElementById('google');
const githubBtn = document.getElementById('github');
const twitterBtn = document.getElementById('twitter');

const initApp = () => {
    firebase.initializeApp(firebaseConfig);
};

// Initialize Firebase
initApp();

googleBtn.addEventListener('click', google ,false);
githubBtn.addEventListener('click', github, false);
twitterBtn.addEventListener('click', twitter, false);