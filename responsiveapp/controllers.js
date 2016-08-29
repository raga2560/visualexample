angular.module('myapp.controllers', [])


.controller('CreateusersCtrl', function($scope, $stateParams, UsersService) {
	
	$scope.username = "Hello";
	$scope.emailid = "";
	// $scope.teamname = "";
	UsersService
           .getusers().then(function (res) {
			   $scope.users = res.data;
			   
            }, function (res) {
               // error
            });
			
	$scope.submit = function() {
		alert('submited');
	  //alert ($scope.formData.group2[1]);
	  //alert(angular.toJson($scope.selection));
	  var submitobject = {
			username: $scope.username,
			emailid: $scope.emailid
	  };
	  
	  UsersService.send(submitobject)
	 .success(function(dataFromServer, status, headers, config) {
          alert(dataFromServer.id + "submitted successfully");
		//  $scope.settings.registered = true;
		 // $scope.settings.confirmed = true;
       })
        .error(function(data, status, headers, config) {
          alert("Submitting form failed!");
       });
	   
	}
})

.controller('CreatenewsCtrl', function($scope, $stateParams, $state, NewsService) {
	
	$scope.content = "Hello";
	$scope.description = "";
	$scope.teamname = "teamc";
	
	$scope.submit = function() {
	//  alert('submited');
	  //alert ($scope.formData.group2[1]);
	  //alert(angular.toJson($scope.selection));
	  var submitobject = {
			teamname: $scope.teamname,
			content: $scope.content,
			description: $scope.description
	  };
	  
	  NewsService.send(submitobject)
	 .success(function(dataFromServer, status, headers, config) {
          alert(dataFromServer.id + "submitted successfully");
		  $state.go('viewnews');
		 // $scope.settings.registered = true;
		 // $scope.settings.confirmed = true;
       })
        .error(function(data, status, headers, config) {
          alert("Submitting form failed!");
       });
	   
	   
    
	
  };
  
})

.controller('ViewnewsCtrl', function($scope, $stateParams, NewsService) {
	
		NewsService
           .getnews().then(function (res) {
			   $scope.news = res.data;
			   
            }, function (res) {
               // error
            });
			
})


.controller('CreateQuestionAnswerCtrl', function($scope, $stateParams, QuestionService) {
	
	$scope.content = "Hello";
	$scope.description = "";
	$scope.options = new Array(0);
	$scope.answers = [];
	$scope.confirm = function() {
	$scope.options.length =0;
		 for (var i=0; i<  $scope.optioncount; i++)
	{
		var a1 ={};
		a1.option = i+1;
		a1.name = '';
		$scope.options.push(a1);
		
	} ;

		};

       QuestionService
           .getquestions().then(function (res) {
			   $scope.questions = res.data;
			   
			   // alert($stateParams.questionid);
			   for(var i=0; i< $scope.questions.length; i++)
			   {
				   if($scope.questions[i].id == $stateParams.questionid)
				   {
					   $scope.question = $scope.questions[i];
					   break;
				   }
				   
			   }
			    //$scope.qroute = "questionroutedetail";
               // success
            }, function (res) {
               // error
            });
			
			
			
	$scope.submit = function() {
	  alert('submited');
	  //alert ($scope.formData.group2[1]);
	  //alert(angular.toJson($scope.selection));
	  var submitobject = {
			content: $scope.content,
			description: $scope.description,
			options: $scope.options,
			answers : $scope.answers
	  };
	  
	  QuestionService.send(submitobject)
	 .success(function(dataFromServer, status, headers, config) {
          alert(dataFromServer.id + "submitted successfully");
		 // $scope.settings.registered = true;
		 // $scope.settings.confirmed = true;
       })
        .error(function(data, status, headers, config) {
          alert("Submitting form failed!");
       });
	   
	   
    
	
  };
  
   })
   
   
.controller('GetQuestionCtrl', function($scope, $stateParams, QuestionService) {
       QuestionService
           .getquestions().then(function (res) {
			   $scope.questions = res.data;
			   
			   // alert($stateParams.questionid);
			   for(var i=0; i< $scope.questions.length; i++)
			   {
				   if($scope.questions[i].id == $stateParams.questionid)
				   {
					   $scope.question = $scope.questions[i];
					   break;
				   }
				   
			   }
			    //$scope.qroute = "questionroutedetail";
               // success
            }, function (res) {
               // error
            });
   })
   
.controller('QuestionCtrl', function($scope, QuestionService) {
       QuestionService
           .getquestions().then(function (res) {
			   $scope.questions = res.data;
			   for(var i=0; i< $scope.questions.length; i++)
			   {
				   if($scope.questions[i].type == 'multiselect')
				   {
					   $scope.questions[i].qroute = "questionroutedetail";
				   }
				   else {
					   $scope.questions[i].qroute = "questionroutedetail";
				   }
			   }
			    //$scope.qroute = "questionroutedetail";
               // success
            }, function (res) {
               // error
            });
   });
   
	
