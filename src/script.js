var contents = {
	  "intro": "<p>My name is Hannah Blows, and this is my application to Founders & Coders winter cohort beginning on 29 October 2018.</p><p>Click/tap around to learn more...</p>",
	  "restless": "<p>I have skills, a conscience, and I grow restless. I'll tear right through those mountains, I'll climb to the highest of heights and I will scream at the sun.</p>",
		"eager": "<p>I would be thrilled at the opportunity to join Founders & Coders because I am eager to be part of a fun and focused environment, collaboratively working and learning with other self-motivated people.</p><p>I have a tendency to isolate myself, which freelancing has exacerbated, so I am looking forward to learning full-time in a social framework.</p>",
		"neopets": "<p>The first ever websites I made were pet pages on Neopets when I was 10. Neopets had a help page that explained the basics of HTML, promising “It is very simple to learn and anyone can do it. You don't need to be a programmer or even to have really used a computer before.” In this friendly, low-barrier environment, I wrote and decorated stories about my digital pets. It felt good to have a little patch of internet that was all my own.</p>",
		"customise": "<p>My graphic design degree course wasn't digitally focused at all, but I grew my knowledge of CSS helping my friends customise their Indexhibit and Cargo sites which we were using as portfolios for our work. It was empowering being able to affect whole site changes with single lines of code, and personalise otherwise generic sites.</p>",
		"confidence": "<p>My first job out of uni was paper model-making for stop-frame animations with a small creative studio. They asked if I knew how to make a wbesite for them. My previous positive experiences playing with web development gave me the confidence to to say “yes”, which really meant “no, but I can work it out”. Studying PHP was a steep learning curve, but instilled me with a belief that I can teach myself anything.</p>",
		"new": "<p>With so many applications and possibilities, JavaScript seems like the obvious next language to learn to improve my web development capabilities. I am looking forward to the luxury of putting client work aside for a few months to acquire knowledge and skills full time, meet new people, and work on personal projects.</p>",
		"freelance": "<p>I am a self-taught programmer with a background in graphic design, and am currently working as a freelance web developer and designer. I collaborate mostly with creative individuals (designers, photographers, writers, artists) and small collectives/businesses (educational groups, studios, magazines, publishers, film collectives, chair-makers).</p>",
		"strike": "<p>I’m half the design duo, the web programmer, distributor, and a director at STRIKE! Magazine. I’ve been involved in the project in different ways for 3.5 years. Currently the collective is made up of 6 people all living in London.</p><p>We work together as volunteers to create a magazine, produce videos, and irregular events and actions. STRIKE! aims to speak to all those who foster a desire for the total reconstitution of what’s possible.</p>",
		"ambition": "<p>I have great ambition to build and create enriching things, but am not entirely sure what my purpose is yet. Things that resonate with me are usually a blend of the creative, artistic, social, technological, and political. I see programming as a tool and skill that I can grow, use to enhance the ideas of others, and help me tell my vision.</p>",
    "water": "<p>I may be a small bag of water, but I will always try my best.</p>"
	};

// document.getElementsByClassName("item").onclick = function() { console.log("Clack clack"); };

var classname = document.getElementsByClassName("item");

var myFunction = function() {
    var id = this.id;
    this.classList.add('clicked');
    document.getElementById("text").innerHTML = contents[id];
    document.getElementById("text").scroll({ top: 0, left: 0, behavior: 'smooth' });
};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction, false);
}

// function myFunction() {
//     let piece = contents[]
//     document.getElementById("text").innerHTML = contents.restless.content;
//     console.log("Click click");
// }

// $('.video img').click(function(){
//    modalContent.empty().append('<video src="' + $(this).data().srcmp4 + '"></video>');
//  });
