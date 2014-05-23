angular.module('HeartBeat', ['ui.bootstrap'])
    .run(function($rootScope){
        console.log('HeartBeat', $rootScope);

        $rootScope.socket = io.connect('http://localhost');
    })



    .controller('SynthCtrl', function($scope, $rootScope) {
        console.log('SynthCtrl', $scope);

        $rootScope.socket.on('heartbeat', function (data) {
            console.log(data);
        });
    })



        .controller('OscillatorCtrl', function($scope, $rootScope) {
            console.log('OscillatorCtrl', $scope);

            $scope.oscillators = [
                {type: "sine"},
                {type: "square"},
                {type: "sawtooth"},
                {type: "triangle"}
            ]

            $scope.oscillatorModel = 'sawtooth';
        })



        .controller('FrequencyCtrl', function($scope, $rootScope) {
            console.log('FrequencyCtrl', $scope);
        })



            .controller('NoteCtrl', function($scope, $rootScope) {
                console.log('NoteCtrl', $scope);

                $scope.notes = [
                    {name: "C", freq: 261.6},
                    {name: "D", freq: 293.7},
                    {name: "E", freq: 329.6},
                    {name: "F", freq: 349.2},
                    {name: "G", freq: 392.0},
                    {name: "A", freq: 440.0},
                    {name: "B", freq: 493.9}
                ];

                $scope.noteModel = 'F';
            });
