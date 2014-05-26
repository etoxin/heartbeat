angular.module('HeartBeat', ['ui.bootstrap'])
    .run(function($rootScope){
        console.log('HeartBeat', $rootScope);

        // we'll define a few vars.
        $rootScope.oscillators = [];

        // Key's to frequencies
        $rootScope.notes = [
            {name: "C", freq: 261.6},
            {name: "D", freq: 293.7},
            {name: "E", freq: 329.6},
            {name: "F", freq: 349.2},
            {name: "G", freq: 392.0},
            {name: "A", freq: 440.0},
            {name: "B", freq: 493.9}
        ];

        // properties for the synth.
        $rootScope.synthProperties = {
            frequency: 50,
            amountOfoscillators: 3,
            detune: 0.01,
            type: 'sawtooth'
        }

        var synth = new webkitAudioContext();
        for (var i = 0; i < $rootScope.synthProperties.amountOfoscillators; i++) {
            $rootScope.oscillators[i] = synth.createOscillator();
            $rootScope.oscillators[i].frequency.value = $rootScope.synthProperties.frequency - ($rootScope.synthProperties.detune * i);
            $rootScope.oscillators[i].type = $rootScope.synthProperties.type;
            $rootScope.oscillators[i].connect(synth.destination);
            $rootScope.oscillators[i].start(0);
        }


        // update the oscillators
        $rootScope.update = {
            frequency: function () {
                console.log('boom');
                $rootScope.oscillators.forEach(function(osc, index){
                    osc.frequency.value = $rootScope.synthProperties.frequency - ($rootScope.synthProperties.detune * i);
                    console.log(osc.frequency.value, $rootScope.synthProperties.frequency);
                })

            }
        }


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

            // here we have a list of the types of oscillators
            $scope.oscillators = [
                {type: "sine"},
                {type: "square"},
                {type: "sawtooth"},
                {type: "triangle"}
            ]
            $scope.oscillators = $scope.oscillators;
            $scope.oscillatorModel = 'sawtooth';
        })



        .controller('FrequencyCtrl', function($scope, $rootScope) {
            console.log('FrequencyCtrl', $scope);
            $scope.frequencyModel = $rootScope.synthProperties.frequency;

            $scope.changeFreq = function () {
                $rootScope.synthProperties.frequency = $scope.frequencyModel;
                $rootScope.update.frequency();
            }

        })



            .controller('NoteCtrl', function($scope, $rootScope) {
                console.log('NoteCtrl', $scope);
                $scope.notes = $rootScope.notes;
                $scope.noteModel = 'F';
            });
