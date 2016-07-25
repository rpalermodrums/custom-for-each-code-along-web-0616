function forEach(iterable, callback){
  if (Array.isArray(iterable)){
    for (var i = 0; i < iterable.length; i++) {
      const element = iterable[i];
      callback(element, i, iterable);
    }
  } else if (typeof iterable === 'object'){
    for (key in iterable){
      value = iterable[key]
      callback(value, key, iterable)
    }
  }
}
