let random_number = randint(1, 6)
let user_number = game.askForNumber("pick number between 1 and 6")
forever(function () {
    if (random_number == user_number) {
        game.splash("you got the number correct!")
    } else {
        game.splash("you did not geuss the number correctly", "The correct number is:" + random_number)
    }
})
