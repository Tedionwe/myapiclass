import User from "./user"







export default class Auth{
  
   users: Array<User> =[]
 


  constructor(){
   const user1 =new User("sarah", "sarah@yahoo.com","123456");
   const user2 =new User("paul", "paul@outlook.com","password");
   

    this.users =[user1,user2]
  }

  login(email:string,pwd:string){


    const user = this.users.find((e)=>{
        const isMatch= e.email === email && e.pwd ===pwd;
        return isMatch
    });

    if(!user) throw new Error("invalid Password or User");

    user.lastLogin = new Date().toDateString();

    return user.name +  "welcome back !";


  }


  register(email:string,pwd:string, name:string, _isVerified : boolean, _lastLogin :string){


    const user = this.users.find((e)=>{
        const isMatch= e.email === email && e.pwd ===pwd && e.name ===name;
        return isMatch
    });

    if(!user) throw new Error("invalid Password or User");

    user.lastLogin = new Date().toDateString();

    return user.name +  "welcome back !";


  }

}