var x = 1
while (x <= 100) {
    var check = 0
    var anwser = ''
    if (x % 3 == 0) {
        anwser = 'Fizz'
        check = check + 1
    }
    if (x % 5 == 0) {
        anwser = anwser + 'Buzz'
        check = check + 1
    }
    if (check > 0) {
        console.log(anwser)
    }
    else {
        console.log(x)
    }
    x = x + 1
}