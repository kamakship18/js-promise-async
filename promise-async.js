const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies

   // Progression 2: using setTimeout() - use 1000 units for time parameter
   function getCookies(){
      setTimeout(()=>{
        let output = "";
        cookies.forEach(cookie=>{
          output+=`<li>${cookie.name}</li>`
        });
        document.body.innerHTML = output;
      },1000);
    };
    
//Progression 3: Create a function to creat cookies and create an object of Promise.
function createCookie(newCookie){
   return new Promise((resolve,reject)=>{
 
     // Progression 4: adding two parameters and using setTimeout()
     setTimeout(()=>{
       
       // Progression 5: handling errors and adding new cookie to the list
       cookies.push(newCookie);
       const error = false;
       if(error){
         reject("No cookies")
       }else{
         resolve("Cookie");
       }
      },2000)
   })
}
       
// Progression 7: creating a new async function
async function milk(){
   await createCookie(newCookie).then(getCookies);
}
// calling the new async function
milk();
