// http://aviadas.com/blog/2015/09/06/building-realtime-apps-with-react/

var init = function() {
    
}

var socket = io('http://localhost:8080');
socket.on('msg', function(data) {
    switch (data.action) {
        case 'info':
            console.log(data.data);
            break;
        case 'showRoom':
            if (data.data) {
                $('#room').fadeIn();
                $('#login').fadeOut();
            } else {
                $('#room').fadeOut();
                $('#login').fadeIn();
            }
            break;
    }
});

$(document).ready(function () {
    init();
    
    $('#btn-join').click(function (e) {
        var date = new Date();
        socket.emit('join', {name: $('#name').val(), date: date.toISOString()});
    });
});