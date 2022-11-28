export  function isBlank(txt){
    if(txt.length <= 0 ) 
    return true
    else
    return false;
};
export function isLength(txt){
  if(txt.length <= 0 && txt.length >= 15 ){
    return true
  }
  else
  return false;
};

export function isMassageLength(txt){
  if(txt.length < 5 && txt.length > 0 ){
    return true
  }else if(txt.length> 5 && txt.length >50){
    return true
  }
  else
  return false;
};

// export function validateEmail(email){
//     return String(!email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   };
export function validateEmail(email){
  if(!email.toLowerCase().match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))  
   { 
     return true;
   }
  else{
     return false;
    }
  };

export function isMobile(contact){
    if(contact.length <= 12 && contact.length>=10 ) 
      return false
    else if(contact.length > 13)
      return true
    else
    return true;
  }
export function isValid(contact){
  console.log(contact);
  // const PHONE_REGEX = new RegExp(/"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gmi); 
  // var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  //   if(re){
  //     return false
  //   }else{
  //     return true
  //   }

    // return re.test(contact); 
  // if(contact.match(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i)){
  //     return false;
  //       }
  //     else
  //     {
  //       return true;
  //     }
}

export function isNumber(text){
  var reg =/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/;
  if(reg.test(text)){
    return true;
  }
  return false;
}

export function isImpty(text){
  if(text!==null)
    return true;
  else
    return false;
}