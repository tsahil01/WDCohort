function getLength(name) {
    try {
      console.log("Inside try block");
      return name.length;
    } catch (e) {
      console.log("Inside Catch");
    }
  }
  
  console.log(getLength())
  