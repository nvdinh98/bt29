let arr = [ 2,3,4,5,6]
let count = 0;
function checkIndex() {
    for (let i = 0; i < arr.length ; i++) {
        count++;
        console.log(count)
    }
    document.writeln("so luong phan tu co trong mang la " + count)

}
checkIndex()