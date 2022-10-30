Array.prototype._push=function(...value){
    for(var i=0;i<arguments.length;i++)
    {
        this[this.length]=arguments[i];
    }
}
var arr=['eat','sleep','c-language'];

arr._push('HTML','CSS','JavaScript');
console.log(arr);