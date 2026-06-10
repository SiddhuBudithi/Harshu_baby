const screen = document.getElementById("screen");

let girlfriendName = "";

const photos = [
"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg"
];

let photoIndex = 0;

start();

function start(){

screen.innerHTML = `
<div class="card">
<h1>❤️ Hi Beautiful ❤️</h1>

<p>
I made something for you...
</p>

<button onclick="nameScreen()">
Open
</button>
</div>
`;
}

function nameScreen(){

screen.innerHTML = `
<div class="card">

<h2>What's your name?</h2>

<input id="nameInput" placeholder="Enter your name">

<button onclick="saveName()">
Continue
</button>

</div>
`;
}

function saveName(){

girlfriendName =
document.getElementById("nameInput").value || "Beautiful";

question1();
}

function question1(){

screen.innerHTML = `
<div class="card">

<h2>Hi ${girlfriendName} ❤️</h2>

<p>How angry are you with Sidd?</p>

<button onclick="tinyAngry()">Tiny Bit 😒</button>

<button onclick="veryAngry()">
Very 😡
</button>

<button onclick="volcanoAngry()">
Volcano Level 🌋
</button>

</div>
`;
}

function tinyAngry(){

screen.innerHTML = `
<div class="card">

<h2>That's good 😌</h2>

<p>
So you're not THAT angry right?
</p>

<button onclick="loveQuestion()">
Maybe ❤️
</button>

<button onclick="loveQuestion()">
Not Really ❤️
</button>

</div>
`;
}

function veryAngry(){

screen.innerHTML = `
<div class="card">

<h2>Uh Oh 😅</h2>

<p>
What should Sidd do?
</p>

<button onclick="veryPath2()">
Apologize Properly
</button>

<button onclick="veryPath2()">
Give Hugs
</button>

</div>
`;
}

function veryPath2(){

screen.innerHTML = `
<div class="card">

<h2>Fair Enough 🥺</h2>

<p>
Do you think he feels bad?
</p>

<button onclick="loveQuestion()">
Yes
</button>

<button onclick="loveQuestion()">
Very Yes
</button>

</div>
`;
}

function volcanoAngry(){

screen.innerHTML = `
<div class="card">

<h2>🚨 Emergency Mode Activated 🚨</h2>

<p>
Sidd has been informed that
he is in danger.
</p>

<button onclick="volcanoStep2()">
Continue
</button>

</div>
`;
}

function volcanoStep2(){

screen.innerHTML = `
<div class="card">

<h2>Question 😭</h2>

<p>
Should Sidd be worried?
</p>

<button onclick="volcanoStep3()">
Yes
</button>

<button onclick="volcanoStep3()">
Definitely
</button>

</div>
`;
}

function volcanoStep3(){

screen.innerHTML = `
<div class="card">

<h2>Last Question 😭</h2>

<p>
Can Sidd survive this situation?
</p>

<button onclick="loveQuestion()">
Maybe
</button>

<button onclick="loveQuestion()">
Only If I Forgive Him
</button>

</div>
`;
}

function loveQuestion(){

screen.innerHTML = `
<div class="card">

<h2>One Important Question 😌</h2>

<p>
Do you still love Sidd?
</p>

<button onclick="cuteQuestion()">
Of Course ❤️
</button>

<button onclick="cuteQuestion()">
Obviously ❤️❤️
</button>

</div>
`;
}

function cuteQuestion(){

screen.innerHTML = `
<div class="card">

<h2>Another Question 😏</h2>

<p>
Who's the most annoying person?
</p>

<button onclick="cuteQuestion2()">
Sidd 😒
</button>

<button onclick="cuteQuestion2()">
Definitely Sidd 😒
</button>

</div>
`;
}

function cuteQuestion2(){

screen.innerHTML = `
<div class="card">

<h2>And Yet... ❤️</h2>

<p>
Why do you keep him around?
</p>

<button onclick="cuteQuestion3()">
Because I Love Him ❤️
</button>

<button onclick="cuteQuestion3()">
He's My Favorite Idiot ❤️
</button>

</div>
`;
}

function cuteQuestion3(){

screen.innerHTML = `
<div class="card">

<h2>Final Check 🥺</h2>

<p>
Would a hug help right now?
</p>

<button onclick="moodScreen()">
Yes 🥺
</button>

<button onclick="moodScreen()">
Absolutely ❤️
</button>

</div>
`;
}

function moodScreen(){

screen.innerHTML = `
<div class="card">

<h2>How are you feeling?</h2>

<input type="range"
min="1"
max="10"
value="5"
class="slider">

<br><br>

<button onclick="showSlideshow()">
Continue
</button>

</div>
`;
}

function showSlideshow(){

screen.innerHTML = `
<div class="card">

<h2>Awww nanna cutu 😘</h2>

<img id="slide" src="${photos[0]}">

<br>

<button onclick="prevPhoto()">⬅</button>
<button onclick="nextPhoto()">➡</button>

<br>

<button onclick="loveSection()">
Continue ❤️
</button>

</div>
`;
}

function nextPhoto(){

photoIndex =
(photoIndex + 1) % photos.length;

document.getElementById("slide").src =
photos[photoIndex];
}

function prevPhoto(){

photoIndex =
(photoIndex - 1 + photos.length) %
photos.length;

document.getElementById("slide").src =
photos[photoIndex];
}

function loveSection(){

screen.innerHTML = `
<div class="card">

<h2>3 Things I Love About You ❤️</h2>

<ul>
<li>Your smile brightens my day.</li>
<li>You support me even when I'm difficult.</li>
<li>You make ordinary moments special.</li>
</ul>

<button onclick="sorrySection()">
Next
</button>

</div>
`;
}

function sorrySection(){

screen.innerHTML = `
<div class="card">

<h2>3 Things I'm Sorry For 😔</h2>

<ul>
<li>Not listening properly sometimes.</li>
<li>Making you feel upset.</li>
<li>Being stubborn when I shouldn't be.</li>
</ul>

<button onclick="promiseSection()">
Next
</button>

</div>
`;
}

function promiseSection(){

screen.innerHTML = `
<div class="card">

<h2>3 Promises I'll Keep 🌹</h2>

<ul>
<li>I will communicate better.</li>
<li>I will listen more carefully.</li>
<li>I will keep making you smile.</li>
</ul>

<button onclick="forgivePage()">
Continue
</button>

</div>
`;
}

function forgivePage(){

screen.innerHTML = `
<div class="card">

<h2>Will You Forgive Sidd? 🥺</h2>

<button onclick="celebrate()">
Yes ❤️
</button>

<button id="noBtn">
No 😏
</button>

</div>
`;

const noBtn =
document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{

const x =
Math.random() * (window.innerWidth - 150);

const y =
Math.random() * (window.innerHeight - 100);

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";
});
}

function celebrate(){

launchConfetti();

screen.innerHTML = `
<div class="card">

<h1>🎉 Thank You ${girlfriendName} 🎉</h1>

<p>

You are incredibly important to me.

Thank you for being patient with me.

I love you ❤️

</p>

<h2>Forever Yours ❤️</h2>

</div>
`;
}

function launchConfetti(){

confetti({
particleCount:200,
spread:180
});

for(let i=0;i<50;i++){

setTimeout(createHeart,i*200);
}
}

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left =
Math.random()*100 + "vw";

heart.style.animationDuration =
3 + Math.random()*4 + "s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);
}