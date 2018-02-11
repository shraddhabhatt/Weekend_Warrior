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

	var academy, gamename, gamedate, gametime, gameaddress, gamecity, gamezipcode;
	$("#addnewgame").on("click", function(event){

		academy = $("#academy").val().trim();
		gamename = $("#gameEvent").val().trim();
		gamedate = moment($("#gameDate").val().trim()).format('MM/DD/YYYY');
		gametime = $("#gameTime").val().trim();
		gameaddress = $("#gameLocation").val().trim();
		gamecity = $("#gameCity").val().trim();
		gamezipcode = $("#gameZipcode").val().trim();

		var gameinfo = {
			academy: academy,
			gamename: gamename,
			gamedate: gamedate,
			gametime: gametime,
			gameaddress: gameaddress,
			gamecity: gamecity,
			gamezipcode: gamezipcode
		}

		firebase.database().ref('games/'+academy+'/'+gamename).set(gameinfo);
		$("#academy").val("");
		$("#gameEvent").val("");
		$("#gameDate").val("");
		$("#gameTime").val("");
		$("#gameLocation").val("");
		$("#gameCity").val("");
		$("#gameZipcode").val("");
	});

	database.ref('games/Baseball').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newgamename = childSnapshot.val().gamename;
	var newgameaddress = childSnapshot.val().gameaddress;
	var newgamecity = childSnapshot.val().gamecity;
	var newgamezipcode = childSnapshot.val().gamezipcode;
	var newgamedate = childSnapshot.val().gamedate;
	var newgametime = childSnapshot.val().gametime;
	var gameacademy = childSnapshot.val().academy;

	//write fields to html

	$("#baseball > tbody").append("<tr><td>" + newgamename + "</td><td>" + newgameaddress+", "+newgamecity + "</td><td>" + moment(newgamedate + " " + newgametime).format('MM/DD/YYYY HH:mm') + "</td></tr>");

    });	

    database.ref('games/Football').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newgamename = childSnapshot.val().gamename;
	var newgameaddress = childSnapshot.val().gameaddress;
	var newgamecity = childSnapshot.val().gamecity;
	var newgamezipcode = childSnapshot.val().gamezipcode;
	var newgamedate = childSnapshot.val().gamedate;
	var newgametime = childSnapshot.val().gametime;
	var gameacademy = childSnapshot.val().academy;

	//write fields to html

	$("#football > tbody").append("<tr><td>" + newgamename + "</td><td>" + newgameaddress+", "+newgamecity + "</td><td>" + moment(newgamedate + " " + newgametime).format('MM/DD/YYYY HH:mm') + "</td></tr>");

    });	

    database.ref('games/Soccer').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newgamename = childSnapshot.val().gamename;
	var newgameaddress = childSnapshot.val().gameaddress;
	var newgamecity = childSnapshot.val().gamecity;
	var newgamezipcode = childSnapshot.val().gamezipcode;
	var newgamedate = childSnapshot.val().gamedate;
	var newgametime = childSnapshot.val().gametime;
	var gameacademy = childSnapshot.val().academy;

	//write fields to html

	$("#soccer > tbody").append("<tr><td>" + newgamename + "</td><td>" + newgameaddress+", "+newgamecity + "</td><td>" + moment(newgamedate + " " + newgametime).format('MM/DD/YYYY HH:mm') + "</td></tr>");

    });	

    database.ref('games/Hockey').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newgamename = childSnapshot.val().gamename;
	var newgameaddress = childSnapshot.val().gameaddress;
	var newgamecity = childSnapshot.val().gamecity;
	var newgamezipcode = childSnapshot.val().gamezipcode;
	var newgamedate = childSnapshot.val().gamedate;
	var newgametime = childSnapshot.val().gametime;
	var gameacademy = childSnapshot.val().academy;

	//write fields to html

	$("#hockey > tbody").append("<tr><td>" + newgamename + "</td><td>" + newgameaddress+", "+newgamecity + "</td><td>" + moment(newgamedate + " " + newgametime).format('MM/DD/YYYY HH:mm') + "</td></tr>");

    });	
	var teamacademy, teamname, teamsize;
    $("#addnewteam").on("click", function(event){

		teamacademy = $("#teamacademy").val().trim();
		teamname = $("#teamname").val().trim();
		teamsize = $("#teamsize").val().trim();
		 
		var teaminfo = {
			academy: teamacademy,
			teamname: teamname,
			teamsize: teamsize,
			teamwin: 2,
			teamloss: 1
		}

		firebase.database().ref('teams/'+teamacademy+'/'+teamname).set(teaminfo);
		$("#teamacademy").val("");
		$("#teamname").val("");
		$("#teamsize").val("");
	});

	database.ref('teams/Baseball').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newteamname = childSnapshot.val().teamname;
	var gameacademy = childSnapshot.val().academy;
	var teamwin = childSnapshot.val().teamwin;
	var teamloss = childSnapshot.val().teamloss;

	//write fields to html

	$("#teams > tbody").append("<tr><td>" + newteamname + "</td><td>" + gameacademy + "</td><td>" + teamwin +' / '+ teamloss +"</td></tr>");
    });	
    database.ref('teams/Hockey').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newteamname = childSnapshot.val().teamname;
	var gameacademy = childSnapshot.val().academy;
	var teamwin = childSnapshot.val().teamwin;
	var teamloss = childSnapshot.val().teamloss;

	//write fields to html

	$("#teams > tbody").append("<tr><td>" + newteamname + "</td><td>" + gameacademy + "</td><td>" + teamwin +' / '+ teamloss +"</td></tr>");

	});	
    database.ref('teams/Football').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newteamname = childSnapshot.val().teamname;
	var gameacademy = childSnapshot.val().academy;
	var teamwin = childSnapshot.val().teamwin;
	var teamloss = childSnapshot.val().teamloss;

	//write fields to html

	$("#teams > tbody").append("<tr><td>" + newteamname + "</td><td>" + gameacademy + "</td><td>" + teamwin +' / '+ teamloss +"</td></tr>");

    });	
    database.ref('teams/Soccer').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newteamname = childSnapshot.val().teamname;
	var gameacademy = childSnapshot.val().academy;
	var teamwin = childSnapshot.val().teamwin;
	var teamloss = childSnapshot.val().teamloss;

	//write fields to html

	$("#teams > tbody").append("<tr><td>" + newteamname + "</td><td>" + gameacademy + "</td><td>" + teamwin +' / '+ teamloss +"</td></tr>");
	
	});

	var phoneList = [];
	var emailList = [];
	var ref = firebase.database().ref('users');
    ref.once('value').then(function(snapshot) {
        snapshot.forEach(userSnapshot => {
            var k = userSnapshot.key;
            ref.child(k+"/parent").once("value", teamsSnapshot => {
            	console.log("Email Notification :: "+teamsSnapshot.val().emailnotify);
            	if(teamsSnapshot.val().emailnotify === "on"){
                    emailList.push(teamsSnapshot.val().email);
                    console.log("Email :: "+teamsSnapshot.val().email + emailList);
            	}
                console.log("Text Notification :: "+teamsSnapshot.val().textnotify);
             	if(teamsSnapshot.val().emailnotify === "on"){
                   	phoneList.push(teamsSnapshot.val().phone);
                    console.log("Phone :: "+teamsSnapshot.val().phone + phoneList);
                }
            });
        });
    });

    $("#emailNotification").on("click", function(event){
		event.preventDefault()
		for (var i = 0; i < emailList.length; i++) {
		    var queryURL = "https://api.mailgun.net/v3/";
		    var hdrVal = "Basic " + btoa("api:key-8ce149dcc54510054cb3cfe66d228d4c");
		    $.ajax({
		        url: "https://us-central1-empower-hope.cloudfunctions.net/api/mailgun-api/sandbox340a602d270f4b699673a555c306dc9c.mailgun.org/messages",
		        method: "POST",
		        headers: {"Authorization": hdrVal},
		        data: {
		          from: "trivedishraddha99@gmail.com",
		          to: emailList[i],
		          subject: "Weekend Warrior Weather Cancellation",
		          text: "Todays game has been cancelled. Log onto the Weekend Warrior website to review scheduling changes. These changes will be viewable on your profile page. Thank you."
		        },
		      success: function (data) {
		        console.log(data);
		      },
		      error: function(){
		         console.log("Cannot get data");
		      }

		    }).then(function(response) {
		        var results = response;

		    });
		}
	});

	  var twilioURL = encodeURI('https://api.twilio.com/2010-04-01/Accounts/ACf541d846122b00cf1b3008b10b0aed5f/Messages.json');
      var SID = 'ACf541d846122b00cf1b3008b10b0aed5f';
      var Key = '403ebd7116f88af782649c9559d4617e'

    $("#textNotification").on("click", function(event){
		event.preventDefault();
		for (var i = 0; i < phoneList.length; i++) {
			var phNmbr = "+1" + phoneList[i];
			console.log("PHONE NUMBER ::" + phNmbr);
		    $.ajax({
		      url: twilioURL,
		      type: 'POST',
		      data: {
		        "To" : phNmbr,
		        "From" : "+19782917568",
		        "Body" : "Today's game is cancelled because of weather"
		      },
		      beforeSend: function (xhr) {
		        xhr.setRequestHeader ("Authorization", "Basic " + btoa(SID + ':' + Key));
		      },
		      success: function (data) {
		        console.log(data);
		        },
		      error: function(){
		         console.log("Cannot get data");
		      }

	    	}).then(function(response) {
	        	var results = response;
	    	});
		}
    });	