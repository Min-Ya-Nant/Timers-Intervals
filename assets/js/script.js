var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'ကမ္ဘာကြီးရဲ့ နေရာအသီးသီးမှာ စိတ်ချမ်းသာ ကိုယ်ချမ်းသာနဲ့ နေထိုင်နေကြတဲ့ ကမ္ဘာ အရပ်ရပ်က လူကြီး လူကောင်းများ ခင်ဗျာ... ယခု မြန်မာနိုင်ငံမှာ ဖြစ်ပွားနေတဲ့ ပြည်တွင်းစစ်မှာ ပြည်သူလူထု အများစုဟာ စိတ်ဆင်းရဲ ကိုယ်ဆင်းရဲ ဒုက္ခများစွာနဲ့ ကြုံတွေ့နေကြရပါတယ်။ အာဏာသိမ်း စစ်ကောင်စီအစိုးရနဲ့ တော်လှန်ရေးရဲဘော်တွေကြားမှာ ပြည်သူလူထု အများစုဟာ ကျွဲနှစ်ကောင်ကြားက မြေဇာပင်လို ကြေမွပျက်စီး အသက် အိုး အိမ် စည်းစိမ် အားလုံး ဆုံးရှုံးလျက် ရှိနေကြပါတယ်။ ကမ္ဘာသူ ကမ္ဘာသားအားလုံး လူသားချင်း စာနာမှု ကရုဏာ ရှေးရှုစွာဖြင့် မြန်မာပြည်အရေး ဝိုင်းဝန်း ဆွေးနွေး အဖြေရှာပေးပြီး အကူအညီ ပေးကြပါလို့ မေတ္တာရပ်ခံပါတယ်။ .';
var words = message.split(' ');

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
     // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();
