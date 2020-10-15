var Rebase = require('re-base');
var firebase = require('firebase/app');
var database = require('firebase/database');
var app = firebase.initializeApp({
  apiKey: 'AIzaSyCIbzYulUSdpkR21ifJwJYNPaGIzc4OCUs',
  authDomain: 'cdbl-2cb16.firebaseapp.com',
  databaseURL: 'https://cdbl-2cb16.firebaseio.com',
  storageBucket: 'cdbl-2cb16.appspot.com',
  messagingSenderId: '83733164889'
});
var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base