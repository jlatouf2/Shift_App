angular.module('starter').factory('AuthService' ,
  function ($rootScope, $localStorage) {
    $rootScope.lineups2 = ['Jarred', 'Jacob', 'Johna!'];
    $rootScope.storesAvailable = ['BestBuy', 'Kmart', 'Target', 'Zehrs'];
    $rootScope.peopleLine = ['Marcus', 'Dom', 'Brain'];
    $rootScope.face = ['img/adam.jpg', 'img/ben.png', 'img/max.png'];

    $rootScope.linemodal = 3;

//$scope.green = $scope.names;

$rootScope.lines = ['Line1', 'Line2'];

    $rootScope.chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png',
      distance: 20
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png',
      distance: 40
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg',
      distance: 30
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png',
      distance: 10
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png',
      distance: 50
    }];

/*
  NOTE; JSON OBJECTS
  <img ng-src="{{chat.face}}" style="width: 64px; height: 64px">

  <ion-view view-title="{{chat.name}}">

$rootScope.jsonObj =  {items: [
    {id: "1", name: "Snatch", type: "crime"},
    {id: "2", name: "Witches of Eastwick", type: "comedy"},
    {id: "3", name: "X-Men", type: "action"},
    {id: "4", name: "Ordinary People", type: "drama"},
    {id: "5", name: "Billy Elliot", type: "drama"},
    {id: "6", name: "Toy Story", type: "children"}
]};
*/

    //This can be used to store values even When browser is changed:
    $localStorage.LocalArray= ['Dave', 'Dan', 'Doc'];

    $rootScope.grabStorename = 'Walmart';

    var People = [
      {
        name: "Joe Watkins",
        position: "UX Developer",
        skills: "HTML CSS Javascript"
      },
      {
        name: "Jen Smithers",
        position: "Dev Ops",
        skills: "Alien Server Technology"
      },
      {
        name: "Paul Anderson",
        position: "Designer",
        skills: "UI & UX Design"
      },
      {
        name: "Samantha Barton",
        position: "Javascript Ninja",
        skills: "All things JS"
      }
    ];

    return People;
});
