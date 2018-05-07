var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Facebook = /** @class */ (function () {
    //initialize the class fields or properties//
    function Facebook(username, message, notification, friendRequst, status, photos, DOB, mutualFriends, lives_In, from) {
        var _this = this;
        this.getNotify = function () {
            return _this.notification;
        }; //end of method of mainclass//
        this.getDb = function () {
            return _this.DOB;
        };
        this.getStatus = function () {
            return _this.status;
        };
        this.setFrom = function (native) {
            _this.from = native;
        }; //setter method closed
        this.getFrom = function () {
            return _this.from;
        }; //getter method closed//
        this.userName = username;
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
    return Facebook;
}()); //end of Main class
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile(username, message, notification, friendRequst, status, photos, DOB, mutualFriends, lives_In, from) {
        var _this = _super.call(this, username, message, notification, friendRequst, status, photos, DOB, mutualFriends, lives_In, from) || this;
        _this.getUser = function () {
            return _this.userName;
        };
        _this.getlives = function () {
            return _this.lives_In;
        };
        _this.getMsg = function () {
            return _this.message;
        };
        return _this;
    } // end of constructor method//
    return Profile;
}(Facebook)); //end of subclass//
var userInfo = new Profile('sunil_ayar', 5, 15, 10, 'be good do good', '100 photos', '5-MAY', 50, 'Bangalore', 'Hassan');
console.log('UserName: ' + userInfo.getUser());
console.log('Notifications: ' + userInfo.getNotify());
console.log('DateofBirth: ' + userInfo.getDb());
console.log('LivesIn : ' + userInfo.getlives());
console.log('Status updated : ' + userInfo.getStatus());
//before modification of from field//
console.log('from : ' + userInfo.getFrom());
//modification for from field//
userInfo.setFrom('Kelavathi');
console.log('Native : ' + userInfo.getFrom());
console.log('Messsage : ' + userInfo.getMsg());
