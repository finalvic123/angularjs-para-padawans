angular.module('App', [])

    .controller('MainCtrl', function ($scope) {

/*
      $scope.mostrarH2 = function () {
        $scope.flag = true;
      }
*/
      $scope.author = "Felipe Bernardes";

      $scope.jarJarBinks = function() {
        alert("JAR JAR BINKSSSS agora é do " + $scope.nomeDoDonoDoJarJarBinks);
      };

        $scope.characters = [
            {"name": "Leia", "jedi": false},
            {"name": "Han Solo", "jedi": false },
            {"name": "Luke Skywalker", "jedi": true},
            {"name": "Darth Vader", "jedi": false},
            {"name": "R2D2", "jedi": true},
            {"name": "C3Po", "jedi": true},
        ];

    });
