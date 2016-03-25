$(document).ready(function() {
  // Store the quotes in an array
  var quotes = [
    "Few companies that installed computers to reduce the employment of clerks have realized their expectations.... They now need more, and more expensive clerks even though they call them 'operators' or 'programmers.' ~Peter F. Drucker",
    "Programming is like sex. One mistake and you have to support it for the rest of your life. ~Michael Sinz",
    "All programmers are playwrights and all computers are lousy actors. ~Author Unknown",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. ~Martin Golding",
    "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you are as clever as you can be when you write it, how will you ever debug it? ~Brian Kernighan",
    "[A]nd then it occurred to me that a computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things. They are, in short, a perfect match. ~Bill Bryson",
    "A good programmer is someone who always looks both ways before crossing a one-way street. ~Doug Linder",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ~Martin Fowler",
    "Any sufficiently advanced bug is indistinguishable from a feature. ~Rich Kulawiec",
    "Beta. Software undergoes beta testing shortly before it's released. Beta is Latin for 'still doesn't work.' ~Author Unknown",
    "Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time. ~N.J. Rubenking",
    "One man's crappy software is another man's full time job. ~Jessica Gaston, 2008",
    "If debugging is the process of removing bugs, then programming must be the process of putting them in. ~Edsger Dijkstra",
    "Programming is similar to a game of golf. The point is not getting the ball in the hole but how many strokes it takes. ~Harlan Mills",
    "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning. ~Rich Cook",
    "Programs for sale: fast, reliable, cheap - choose two. ~Author Unknown",
    "Program, n. A magic spell cast over a computer allowing it to turn one's input into error messages; v. tr. To engage in a pastime similar to banging one's head against a wall, but with fewer opportunities for reward. ~Author Unknown",
    "The best performance improvement is the transition from the nonworking state to the working state. ~J. Osterhout",
    "The only way for errors to occur in a program is by being put there by the author. No other mechanisms are known. Programs can't acquire bugs by sitting around with other buggy programs. ~Harlan Mills",
    "There are two ways to write error-free programs; only the third one works. ~Alan J. Perlis",
    "One man's constant is another man's variable. ~Alan J. Perlis",
    "There does not now, nor will there ever exist, a programming language in which it is the least bit hard to write bad programs. ~Lawrence Flon",
    "When debugging, novices insert corrective code; experts remove defective code. ~Richard Pattis",
    "When you catch bugs early, you also get fewer compound bugs. Compound bugs are two separate bugs that interact: you trip going downstairs, and when you reach for the handrail it comes off in your hand. ~Paul Graham, The Other Road Ahead, 2001"
  ];
  
  // run putQuote immediately
  putQuote();
  // and again whenever the button is clicked
  $('#showQuote').click(putQuote);
  
  function putQuote() {
    // get a random number in the range of the indexes of the quotes array
    // and get the quote at that index
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    // split the quote into an array in order to have author on separate line
    quoteArray = randomQuote.split(' ~');
    // and put the quote in the quoteHolder well
    $('#quoteHolder').html('<p>' + quoteArray[0] + '</p><p class="text-right">~ ' + quoteArray[1] + '</p>');
    }
  
  $('#tweetIt').click(function(e){
    // tell browser not to do the default action
    e.preventDefault();
    // get the quote from the quoteHolder
    var quote  = $('#quoteHolder').text();
   // trigger a new window with the Twitter dialog
    window.open('http://twitter.com/share?url=undefined&text=' + quote, 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
  });
});