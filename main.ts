sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)

})
scene.setBackgroundColor(9)
let mySprite = sprites.create(assets.image`Heart`, SpriteKind.Player)
controller.moveSprite(mySprite)
let taco = sprites.create(assets.image`Taco`, SpriteKind.Food)
