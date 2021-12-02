export function classes(...className:(string | undefined)[]){
   return  className.filter(Boolean).join(' ')
}