 const stringLength = (str) => {
  if(str.length < 1 || str.length > 10){
    throw new Error("This is not correct");
  } 
  return str.length;
}

export {stringLength};