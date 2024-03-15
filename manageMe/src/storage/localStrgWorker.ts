export class localStrgWorker {

  static add(key:string,item:projectType){
    localStorage.setItem(key,JSON.stringify(item));
  }

  static getAllItems():Array<projectType>{
    var list = new Array<projectType>();

    for(var i =0;i<localStorage.length;i++){
      var key = localStorage.key(i);
      if(key != null){
        var value = localStorage.getItem(key);
        if(value != null){
          var item = JSON.parse(value)
          list.push(item);
        }
      }
    }
    return list;
  }
}