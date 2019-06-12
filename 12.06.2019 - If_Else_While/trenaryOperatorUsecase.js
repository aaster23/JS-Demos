let func = () => {
    return 1;
}
console.log(func());

var a = '  ';
if(a.trim() ? true : false){
    console.log('true')
} else {
    console.log('false')
}
if(a){
    console.log('whitespace true')
}