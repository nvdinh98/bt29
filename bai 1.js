let arr = [ 2,3,4,5,6]
let count = 0;
function checkEven() {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 == 0) {

            document.writeln(arr[i])
        }
    }

}
checkEven()
