let obj = new Object();
obj.name = 'gzj';
obj.age = '18';
console.log(obj);




let obj = {
    name:'gzj',
    height:'178',
    sex:'male',
    
}
console.log(obj);




function Person(name, age) {
    this.name = name
    this.age  = age
    this.sayname = () => {
      console.log(this.name)
    }
  }
  const p1 = new Person('gzj', 18)
  const p2 = new Person('yy', 18)
  