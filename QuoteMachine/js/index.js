var projectName = "quote-machine";
localStorage.setItem('exp', 'quote-machine');
var quotesData = void 0;

function InFrame() {
  try {
    return window.self !== window.top;
  }
  catch (e) {
    return ture;
  }
}


var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var currrentQuote = "";
var currentAuthor = "";

function openURL(url)
{
  window.open(url, 'Share', 'width=550 height=400 toolbar=0 scrollbar=1 location=0 statusbar=0 menubar=0 resizable=0');
}

function getQuotes() {
  return $.ajax({
    headers: {
      Accept: "application/json" },

    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function success(jsonQuotes) {
      if (typeof jsonQuotes === 'string')
      {
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotesData');
        console.log(quotesData);
      }
    } });

}

function getRandomQuote() {
  return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
}

function getQuote() {
  var randomQuote = getRandomQuote();
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  if (InFrame()) {
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    $('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?         posttype=quote&tags=quotes,freecodecamp&caption=' + encodeURIComponent(currentAuthor) + '&content=' + encodeURIComponent(currentQuote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
  }

  $('#quote-text').animate(
  { opacity: 0 }, 500,
  function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').html(randomQuote.quote);
  });


  $('#quote-author').animate(
  { opacity: 0 }, 500,
  function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').html(randomQuote.author);
  });


  var color = Math.floor(Math.random() * colors.length);
  $('html body').animate(
  {
    backgroundColor: colors[color],
    color: colors[color] },
  1000);


  $('.button').animate(
  {
    backgroundColor: colors[color] },
  1000);

}

$(document).ready(function () {
  getQuotes().then(function () {getQuote();});

  $('#new-quote').on('click', getQuote);

  $('#tweet-quote').on('click', function () {
    if (!InFrame()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }
  });

  $('#tumblr-quote').on('click', function () {
    if (!InFrame()) {
      openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + encodeURIComponent(currentAuthor) + '&content=' + encodeURIComponent(currentQuote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
    }
  });
});