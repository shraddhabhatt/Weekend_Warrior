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

	$("#signup-form").validate({
		errorClass: 'invalid',
             errorPlacement: function (error, element) {
        $(element)
            .closest("form")
            .find("label[for='" + element.attr("id") + "']")
            .attr('data-error', error.text());
    	},
	    // Specify validation rules
	    rules: {
	      firstname: "required",
	      lastname: "required",
	      username: "required",
	      email: {
	        required: true,
	        email: true
	      },
	      password: {
	        required: true,
	        minlength: 5
	      },
	      confirm_password: {
	         required: true,
	         minlength: 6,
	         equalTo: "#password"
	       }
	    },
	    // Specify validation error messages
	    messages: {
	      firstname: "Please enter your firstname",
	      lastname: "Please enter your lastname",
	      username: "Create your own username",
	      password: {
	        required: "Please provide a password",
	        minlength: "Your password must be at least 6 characters long"
	      },
	      confirm_password: {
	        required: "Please provide a password",
	        minlength: "Your password must be at least 6 characters long",
	        equalTo: "Password doesn't match"
	      },
	      email: "Please enter a valid email address"
	    },
	    // Make sure the form is submitted to the destination defined
	    // in the "action" attribute of the form when valid
	    submitHandler: function(form) {
	    	signup();
	    }
	  });
});
function clearform()
{
	$("#email").val("");
	$("#password").val("");
	$("#first_name").val("");
	$("#last_name").val("");
	$("#username").val("");
	$("#email-signin").val("");
	$("#password-signin").val("");
}
function signup(){
		
		let email = $("#email").val().trim();
		let password = $("#password").val().trim();
		let firstname = $("#first_name").val().trim();
		let lastname = $("#last_name").val().trim();
		let username = $("#username").val().trim();

		console.log("email:: "+email+"  password ::: "+password);

		firebase.auth().createUserWithEmailAndPassword(email, password).then(function(result) {
			  
			  firebase.database().ref('users/'+username+'/parent').set({
			  			 firstname: firstname,
   						 lastname: lastname,
   						 username:username,
   						 email: email,
   						 emailverified: false,
   						 password: password,
   						 address: " ",
   						 city: " ",
   						 zipcode: 00000,
   						 phone: 9999999999,
   						 textnotify: false,
   						 emailnotify: false
  					});
			  firebase.database().ref('users/'+username).update({
			  		usertype: "parent"
			  });
			  sessionStorage.setItem("email", email);
  			  sessionStorage.setItem("username", username);

  			  var user = firebase.auth().currentUser;
			  user.sendEmailVerification().then(function(){

			  		console.log("Email Sent Successfully to user"+user.email);
  					clearform();
  					window.location.href = "wwoption.html";

  				// Email sent.
			 }).catch(function(error) {
  				// An error happened.
  				console.log("Errors when sending email :: "+error);
			});
			  // ...
			}).catch(function(error) {
  				// An error happened.
  			console.log("Errors in authentication :: "+error);
		});
 }
 $("#connect").on("click", function(){
 		
 		event.preventDefault();

		console.log("inside connect");
		var username;

 		let email_signin = $("#email-signin").val().trim();
		let password_signin = $("#password-signin").val().trim();
		let username_signin = $("#username-signin").val().trim();

 		firebase.auth().signInWithEmailAndPassword(email_signin, password_signin).catch(function(error) {
			  // Handle Errors here.
			  var errorMessage = error.message;
			  // The email of the user's account used.
			  var email = error.email;
			  console.log("error in sign-in :: "+ errorMessage + " :: "+email);
		});
 		
 		firebase.auth().onAuthStateChanged(function(user) {
  		if (user!=null) {
  			var current_user_email = user.email;
    		console.log("auth changed :: SUCCCCESSSSS "+email_signin+" : "+username_signin);
    		sessionStorage.setItem("email", email_signin);
  			sessionStorage.setItem("username", username_signin);

  			firebase.database().ref('users').child(username_signin).once('value').then(function(snapshot) {
    					console.log(snapshot.val().usertype);
    					if(snapshot.val().usertype == 'admin'){
    						window.location.href = "adminpage1.html";
    					}
    					else if(snapshot.val().usertype == 'parent'){
    						window.location.href = "wwoption.html";
    					}
  				});
  			} else {
    		// No user is signed in.
    		console.log("auth changed FAILLLUREEEELOLNO:: "+user);
  		}
	});

});
 $("#googlesignin").on("click", function(){

 		console.log("User Inside!! ");
 			var provider = new firebase.auth.GoogleAuthProvider();
			provider.addScope("profile");
			provider.addScope("email");
			firebase.auth().signInWithPopup(provider).then(function(result) {
			  // This gives you a Google Access Token. You can use it to access the Google API.
			  var token = result.credential.accessToken;
			  // The signed-in user info.
			  var user = result.user;

			  console.log("Auth :: "+user);
			  window.location.href = "wwoption.html";
			
			}).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // The email of the user's account used.
			  var email = error.email;
			  // The firebase.auth.AuthCredential type that was used.
			  var credential = error.credential;
	  		  // ...
	  		 console.log("Error in google signin:: "+ errorCode);
			
			});
	});
 	$("#fbsignin").on("click", function() 	{

 		var provider = new firebase.auth.FacebookAuthProvider();
 		provider.addScope("profile");
		provider.addScope("email");
			
 		firebase.auth().signInWithPopup(provider).then(function(result) {
  		// This gives you a Facebook Access Token. You can use it to access the Facebook API.
  		var token = result.credential.accessToken;
  		// The signed-in user info.
  		var user = result.user;
  		console.log("FB Login :: "+user);
  		window.location.href = "wwoptions.html";
  		// ...
		}).catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		// The email of the user's account used.
  		var email = error.email;
  		// The firebase.auth.AuthCredential type that was used.
  		var credential = error.credential;
  		// ...
  		console.log("FB Erorr:: "+errorMessage);
		});
 	});
