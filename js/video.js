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
	console.log(video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Fast Video");
	video.playbackRate *= 1.05;
	console.log(video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("skip ahead");
	video.curentTime(video.currentTime()+10);
	console.log(video.currentTime)
})

document.querySelector("#slider").addEventListener("click", function(){
	console.log(this.value);
	var slider = this.value;
	video.volume = slider / 100;
	document.getElementById("volume").innerHTML = video.volume * 100 + "%"
	
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
	if (video.muted == true){
		video.muted = false;
	}
	else{
		video.muted = true
	}

});





