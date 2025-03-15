world: {
    Hatch.move
    Zander444DreamhackZandersEntry.setVolume(25);
    move: {
        Player.disableFlyMode();
        Hatch.onKeyDown(function (event) {
            b = (Camera.getZ() - 5)
            if (event.key == 'b') {
                a = (5);
                Camera.setZ(a - b);
            } else if (event.key == 'v') {
                Camera.setZ(b);
            } else if (event.key == 'w') {
                Player.moveForward(10)
            } else if (event.key == 's') {
                Player.moveBackward(10);
            } else if (event.key == 'a') {
                Player.turnRight()
            } else if (event.key == 'd') {
                Player.turnLeft()
            }
        });
    }
};
Hatch.world
//sets up the world
Hatch.setWorldGravity(
    Math.sin(
        Cylinder2.getPosition()
    )
);
// edits the world
Hatch.log(Math.sin(
    Cylinder2.getPosition()
));
// sets it up to get going
// sets up the player
settupsoundbuffer: {
    Zander444DreamhackZandersEntry.setX(
        Player.getX()
    );

    Zander444DreamhackZandersEntry.setY(
        Player.getY()
    );


    Zander444DreamhackZandersEntry.setZ(
        Player.getZ()
    );
    // makes the music follow the player
    Hatch.sunlookat
};
Hatch.settupsoundbuffer
sunlookat: {
    Torus.rotateTowards(Player);
    Light.setX(
        Torus.getX()
    );
    Light.setY(
        Torus.getY()
    );
    Light.setZ(
        Torus.getZ()
    );
};
worldname: {

    KeyboardInput.onValueChange(function (value) {
            Text3D.setText(
        KeyboardInput.getInputValue()
    );
    vald = (value)
    });
}

KeyboardInput.onCloseKeyHit(function () {
    KeyboardInput.setLabel('welcome to: ' + vald)
});
