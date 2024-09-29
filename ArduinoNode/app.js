const Board = require('firmata');

Board.requestPort(function (err, port) {
    if (err) {
        console.log(err);
        return;
    }

    const board = new Board(port.comName);
    
    board.on('ready', () => {
        console.log('Arduino listo');
        board.pinMode(13, board.MODES.OUTPUT);
        board.digitalWrite(13, board.HIGH);
    });
});