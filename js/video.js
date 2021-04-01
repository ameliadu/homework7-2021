var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click",function(){
	console.log("Play Video");
	video.play()
	document.getElementById("volume").innerHTML = video.volume * 100 + "%"
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#pause").addEventListener("click",function(){
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow Video");
	video.playbackRate *= 0.95;
	console.log(video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Fast Video");
	video.playbackRate %= .95;
	console.log(video.playbackRate)
})

document.querySelector("#vintage").addEventListener("click",function(){
	console.log("Change CSS");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click",function(){
	console.log("Change CSS");
	video.classList.remove("oldSchool");
});

document.querySelector("#mute").addEventListener("click",function(){
	console.log("Muting");
	video.muted = true;
	//if video.muted == true
	//video.muted = false
	//else
	//video.muted = true
});





