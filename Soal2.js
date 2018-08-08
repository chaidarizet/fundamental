input = "5%2a7ba"
var container = input.split("");
var angka1=container[0];
var huruf = container[0];
for (i=0; i<container.length;i++)
{
    if (container[i]>angka1){
    angka = container[i];
    i++
}

if(container[i]<huruf){
    i++
}
}console.log('angka nya ada: '+ huruf)
console.log('hurufnya : ' + angka)