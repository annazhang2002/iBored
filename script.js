function resetVariables()
{
	window.localStorage.setItem('likesSports','false');
	window.localStorage.setItem('likesArt','false');
	window.localStorage.setItem('likesWriting','false');
}

function setColor()
{
	if (window.localStorage.getItem('likesSports') == 'true')
	{
		document.getElementById("sports").style.backgroundColor = "lemonchiffon";
		document.getElementById("sports").style.borderColor = "black";
	}
	if (window.localStorage.getItem('likesArt') == 'true')
	{
		document.getElementById("art").style.backgroundColor = "lemonchiffon";
		document.getElementById("art").style.borderColor = "black";
	}
	if (window.localStorage.getItem('likesWriting') == 'true')
	{
		document.getElementById("writing").style.backgroundColor = "lemonchiffon";
		document.getElementById("writing").style.borderColor = "black";
	}
}


function checkYellowSports()
{
	if (document.getElementById("sports").style.backgroundColor == "lemonchiffon")
	{
		return true;
	}
	else
	{
		return false;
	}
}

function checkYellowArt()
{
	if (document.getElementById("art").style.backgroundColor == "lemonchiffon")
	{
		return true;
	}
	else
	{
		return false;
	}
}

function checkYellowWriting()
{
	if (document.getElementById("writing").style.backgroundColor == "lemonchiffon")
	{
		return true;
	}
	else
	{
		return false;
	}
}

function colorChangeOnClickSports() 
{
	if (checkYellowSports() == true)
	{
		window.localStorage.setItem('likesSports', 'false');
		document.getElementById("sports").style.backgroundColor = "white";
		document.getElementById("sports").style.borderColor = "#99ccff";
	}
	else
	{
		window.localStorage.setItem('likesSports', 'true');
		document.getElementById("sports").style.backgroundColor = "lemonchiffon";
		document.getElementById("sports").style.borderColor = "black";
	}
}

function colorChangeOnClickArt()
{
	if (checkYellowArt() == true)
	{
		window.localStorage.setItem('likesArt', 'false');
		document.getElementById("art").style.backgroundColor = "white";
		document.getElementById("art").style.borderColor = "#99ccff";
	}
	else
	{
		window.localStorage.setItem('likesArt', 'true');
		document.getElementById("art").style.backgroundColor = "lemonchiffon";
		document.getElementById("art").style.borderColor = "black";
	}
}

function colorChangeOnClickWriting()
{
	if (checkYellowWriting() == true)
	{
		window.localStorage.setItem('likesWriting', 'false');
		document.getElementById("writing").style.backgroundColor = "white";
		document.getElementById("writing").style.borderColor = "#99ccff";
	}
	else
	{
		window.localStorage.setItem('likesWriting', 'true');
		document.getElementById("writing").style.backgroundColor = "lemonchiffon";
		document.getElementById("writing").style.borderColor = "black";
	}
}
var hiking;
var draw;
var run;
var swim;
var poem;
var activities = [];
var count = 0;

function getActivity()
{
	activities = [];
	document.getElementById("prev").style.backgroundColor = "white";
	document.getElementById("next").style.backgroundColor = "white";
	document.getElementById("prev").innerHTML = "<";
	document.getElementById("next").innerHTML = ">";
	if (window.localStorage.getItem('likesSports') == 'true')
	{
		hiking = {name:"Go Hiking", location:"Sawyer Trail", image:"hiking.jpg",description:"directions"};
		run = {name:"Go for a Run", location:"Your Neighborhood", image:"running.jpg",description:"get outside and go for a jog around the block"};
		swim = {name:"Swim!", location:"Local Swimming Pool", image:"swimming.jpg",description:"visit your local swimming pool with you towel, swim goggles and swimsuit to go swimming"};
		activities.push(hiking);
		activities.push(run);
		activities.push(swim);
	}

	if (window.localStorage.getItem('likesArt') == 'true')
	{
		draw = {name:"Draw a Picture", location:"Your Home", image:"draw.jpg", description: "draw a cat with the diagram above"};
		origami = {name:"Fold an Origami Crane", location:"Your Home", image:"origami.jpg", description:"Follow the diagram above and fold along the proper lines to create the crane"};
		activities.push(draw);
		activities.push(origami)
	}

	if (window.localStorage.getItem('likesWriting') == 'true')
	{
		poem = {name:"Write a Poem", location:"Your Home", image:"poem.jpg", description: "write a poem about your relationship with nature"};
		story = {name:"Write a Short Story", location:"Your Home", image: "story.jpg", description:"Take time to write a short story about a family that ends up moving and describe the effects that occur. Be creative!"};
		activities.push(poem);
		activities.push(story);
	}

	if (activities.length < 1)
	{
		document.getElementById("activityName").innerHTML = "Oops! You forgot to select any interests. Go back and pick some!";
		document.getElementById("activityImage").src = "oops.gif";
		document.getElementById("prevNext").innerHTML = "";
	}
	
	/*let random = Math.floor(Math.random() * activities.length);
	var order = [];
	var inArray = false;
	while (inArray = true)
	{
		if (random == order[i])
		{
			random = Math.floor(Math.random() * activities.length);
		}
	}*/
	
	if (count < activities.length)
	{
			document.getElementById("activityName").innerHTML = activities[count].name;
			document.getElementById("activityLocation").innerHTML = "Location : " + activities[count].location;
			document.getElementById("activityImage").src = activities[count].image;
			document.getElementById("activityDesc").innerHTML = activities[count].description;
	}
	count++;
	activites = [];
}

function decreaseCount()
{
	if (count > 1)
	{
		count -= 2;
	}
	else
	{
		count--;
	}
}