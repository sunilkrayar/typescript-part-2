class Facebook{
   protected userName : string;
   protected message : number;
   public notification : number;
   public friendRequst : number;
   public status : string;
   public photos : any;
   public DOB  : string;
   public mutualFriends :number;
   protected lives_In :string;
   private from :string;

   //initialize the class fields or properties//
constructor(username : string,message :number,notification:number,friendRequst:number,status:string,photos:any,DOB:string,mutualFriends:number,lives_In:string,from:string){

this.userName =username;
this.message = message;
this.notification = notification;
this.friendRequst = friendRequst;
this.status = status;
this.photos = photos;
this.DOB = DOB;
this.mutualFriends = mutualFriends;
this.lives_In = lives_In;
this.from = from;
} // end of constructor method//

getNotify = ()=>{

    return this.notification;
}//end of method of mainclass//
getDb = ()=>{
    return this.DOB;
}
getStatus = ()=>{
    return this.status;
}
setFrom = (native:string)=>{
    this.from = native;
}//setter method closed
getFrom = ()=>{
    return this.from;
}//getter method closed//

}//end of Main class

class Profile extends Facebook{

constructor(username : string,message :number,notification:number,friendRequst:number,status:string,photos:any,DOB:string,mutualFriends:number,lives_In:string,from:string){
    super(username,message,notification,friendRequst,status,photos,DOB,mutualFriends,lives_In,from);
} // end of constructor method//
 getUser = ()=>{
     return this.userName;
 }
 getlives = ()=>{
     return this.lives_In;
 }
 getMsg = ()=>{
     return this.message;
 }

} //end of subclass//


let userInfo = new Profile('sunil_ayar',5,15,10,'be good do good','100 photos','5-MAY',50,'Bangalore','Hassan')

console.log('UserName: ' +userInfo.getUser());

console.log('Notifications: '+ userInfo.getNotify());

console.log('DateofBirth: ' +userInfo.getDb());

console.log('LivesIn : '+userInfo.getlives());

console.log('Status updated : '+userInfo.getStatus());

//before modification of from field//

console.log('from : ' +userInfo.getFrom());

//modification for from field//
userInfo.setFrom('Kelavathi');
console.log('Native : '+ userInfo.getFrom());

console.log('Messsage : ' +userInfo.getMsg());
