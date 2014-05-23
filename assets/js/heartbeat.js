var socket = io.connect('http://localhost');

function SynthCtrl($scope){
    console.log('SynthCtrl', $scope);
}

    function OscillatorCtrl($scope) {
        console.log('OscillatorCtrl', $scope);
    }


    function FrequencyCtrl($scope) {
        console.log('FrequencyCtrl', $scope);
    }


        function NoteCtrl($scope) {
            console.log('NoteCtrl', $scope);
        }







socket.on('heartbeat', function (data) {
    console.log(data);
});
