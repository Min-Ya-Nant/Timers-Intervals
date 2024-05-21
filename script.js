var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'ကမ္ဘာ မီးလောင် သားကောင် ချနင်း ဆိုတဲ့ စကားအတိုင်း မြန်မာနိုင်ငံမှာ ဖြစ်ပွားနေတဲ့ ပြည်တွင်းစစ်မှာ ပြည်သူတစ်ရပ်လုံးဟာ စစ်မီးလျံကြားမှာ သားကောင်တွေအဖြစ် ချနင်းခံနေကြရပါတယ်။ နစက နှင့် pdf ခေါ် တော်လှန်ရေးရဲဘော်တွေအကြား အသေအကြေများရတာ စစ်ရှောင်စခန်းတွေတိုးလာရတာ အိုးမဲ့အိမ်မဲ့တွေများလာကြတာက ပြည်သူလူထုတွေပါပဲ။ စစ်မီးတွေငြိမ်းပြီး စစ်မှန်တဲ့ ဒီမိုကရေစီ အစိုးရတစ်ရပ် အမြန် ပေါ်ထွန်းစေချင်လှပါဘိ။ ပြည်သူလူထုကို ပြန်စောင့်ရှောက်သော သားသမီးလို ဆက်ဆံသော အမိနိုင်ငံတော်၊ အဖနိုင်ငံတော်ကြီး အမြန်ပေါ်ပေါက်ပါစေ၊ မြန်မာနိုင်ငံသူ နိုင်ငံသား ပြည်သူလူထုတွေ အားလုံး မင်းဆိုး မင်းညှစ်ရန်များမှ အမြန်လွှတ်မြောက်ကြပါစေ။';
var words = message.split(' ');
 // Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  // TODO: Add a comment describing the functionality of the setInterval() method:
   // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // TODO: Add comments describing the functionality of the `if` statement:
 // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) { // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } // TODO: Add comments describing the functionality of the `else if` statement: // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
    else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';  
      // Decrement `timeLeft` by 1
      timeLeft--;
    } // TODO: Add comments describing the functionality of the `else` statement:
    else { 
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
