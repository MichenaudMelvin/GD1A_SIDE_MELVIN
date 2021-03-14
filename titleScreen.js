class TitleScreen extends Phaser.Scene{
    constructor(){
        super({key: 'titleScreen'});
    }
    preload(){
        this.load.image('background', 'assets/fond.png');
    }
    
    create(){
        let background = this.add.sprite(0, 0, 'background');
        background.setOrigin(0,0);
    }
}
export default TitleScreen;