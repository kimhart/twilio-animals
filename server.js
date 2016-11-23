let express = require('express');
let twilio = require('twilio');
let client = new twilio.RestClient(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
let app = express();

let babies = ['https://i.ytimg.com/vi/1LqyOX12_nQ/maxresdefault.jpg','http://i.dailymail.co.uk/i/pix/2016/07/27/16/36A26A8400000578-0-image-a-88_1469632813381.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/0f/b8/c3/0fb8c3b6e42bd338b7d4312c46db7584.jpg', 'http://i.imgur.com/btWw5zw.jpg?1', 'http://www.babyanimalzoo.com/wp-content/uploads/2012/01/baby-fox.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/66/28/98/66289885c532c534671091e42578beab.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/d8/7f/0e/d87f0e1ecddb955a74f41e1032a8a136.jpg', 'http://www.funchap.com/wp-content/uploads/2014/03/baby-elephant-and-egrets.jpg', 'https://s-media-cache-ak0.pinimg.com/236x/8d/43/b3/8d43b3d3f8cb8afcc7c6977ed24ed7f1.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/e0/26/82/e0268295c6e08a069cacfa989c3aa0e1.jpg', 'http://vignette2.wikia.nocookie.net/meerkats/images/6/68/Baby_meerkat.jpg/revision/latest?cb=20121206203706', 'http://news.nationalgeographic.com/content/dam/news/2016/07/19/slothlove/01_slothlove_leaves.adapt.768.1.jpg', 'https://s-media-cache-ak0.pinimg.com/originals/65/cb/43/65cb437350d0050b7f051341183fc1ae.jpg'];


function send() {
  let randomBaby = babies[Math.floor(Math.random() * babies.length)];

  client.messages.create({
    body: 'Have a happy day!',
    from:  process.env.TWILIO_PHONE_NUMBER,
    to:  process.env.CELL_PHONE_NUMBER,
    MediaUrl: randomBaby
    }, function(err, message) {
      console.log(message.sid);
  });
};

function callEveryHour() {
  setInterval(send, 5000);
}

callEveryHour();

