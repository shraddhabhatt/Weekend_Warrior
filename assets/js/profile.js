$(document).ready(function(){
	// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

	var config = {
	    apiKey: "AIzaSyBJEf-9pGFWooqFdxd-sLAkozFU-YV369M",
	    authDomain: "project-weeken-warrior.firebaseapp.com",
	    databaseURL: "https://project-weeken-warrior.firebaseio.com",
	    projectId: "project-weeken-warrior",
	    storageBucket: "project-weeken-warrior.appspot.com",
	    messagingSenderId: "11980125710"
	  };
	    
	firebase.initializeApp(config);
	// Create a variable to reference the database
	var database = firebase.database();
	var newgamename,newgamecity,newgamedate, newgametime, gameacademy, gameaddress;
	var ref = firebase.database().ref('games');

    ref.orderByChild("gamedate").once('value').then(function(snapshot) {
        snapshot.forEach(userSnapshot => {
             userSnapshot.forEach(gameSnapshot =>{
            		  console.log("game name : "+gameSnapshot.val().gamename);
            		  gameacademy = gameSnapshot.val().academy;
                      newgamename = gameSnapshot.val().gamename;
                      newgamecity = gameSnapshot.val().gamecity;
                      newgamedate = gameSnapshot.val().gamedate;
                      newgametime = gameSnapshot.val().gametime;  
                      gameaddress = gameSnapshot.val().gameaddress;
                      //write fields to html

			$("#gameTable > tbody").append("<tr><td>" + newgamename + "</td><td>" + gameacademy + "</td><td>" + newgamecity + "</td><td>" + moment(newgamedate + " " + newgametime).format('MM/DD/YYYY HH:mm') + "</td></tr>");
            });
        });
        	$("#nextgame > tbody").append("<tr><td>" +  moment(newgamedate).format('dddd') + "</td><td>" + gameaddress+", "+newgamecity + "</td><td>" + newgametime + "</td></tr>");
   	});
   
});	

