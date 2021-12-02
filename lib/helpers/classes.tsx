function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}
function classNameFactory(prefix:string){
  return function (name?: string){
    return [`mui-${prefix}`,name].filter(Boolean).join('-')
  }
}
export {classNameFactory,classes};
