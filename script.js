var contents = {
	  "intro": "My name is Hannah Blows, and this is my application to Founders & Coders winter cohort beginning on 29 October 2018.",
	  "restless": "I have skills, a conscience, and I grow restless. I'll tear right through those mountains, I'll climb to the highest of heights and I will scream at the sun.",
    "neopets": "The first ever websites I made were pet pages on Neopets when I was 10. Neopets had a help page that explained the basics of HTML, promising “It is very simple to learn and anyone can do it. You don't need to be a programmer or even to have really used a computer before.” In this friendly, low-barrier environment, I wrote and decorated stories about my digital pets.",
		"customise": "My next interaction with coding was during my graphic design degree. The course wasn't digitally focused at all, but I grew my knowledge of CSS helping my friends customise their Indexhibit and Cargo portfolio sites.",
		"freelance": "I am a self-taught programmer with a background in graphic design, and am currently working as a freelance web developer and designer. I collaborate mostly with creative individuals (designers, photographers, writers, artists) and small collectives/businesses (educational groups, studios, magazines, publishers, film collectives, chair-makers).",
    "ambition": "I have great ambition to build and create enriching things, but am not entirely sure what my purpose is yet. Things that resonate with me are usually a blend of the creative, artistic, social, technological, and political. I see programming as a tool and skill that I can grow, use to enhance the ideas of others, and help me tell my vision.",
    "water": "I may be a small bag of water, but I will always try my best.",
    "strike": "I’m half the design duo, the web programmer, distributor, and a director at STRIKE! Magazine. I’ve been involved in the project in different ways for 3.5 years. Currently the collective is made up of 6 people all living in London. We work together as volunteers to create a magazine, produce videos, and irregular events and actions. STRIKE! aims to speak to all those who foster a desire for the total reconstitution of what’s possible.",
    "eager": "I would be thrilled at the opportunity to join Founders & Coders because I am eager to be part of a fun and focused environment, collaboratively working and learning with other self-motivated people. I have a tendency to isolate myself, which freelancing has exacerbated, so I am looking forward to learning full-time in a social framework.",
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
