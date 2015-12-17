var users = [
  { name : 'vasya',
    email : 'vasya@email.com',
    balance : 9001,
    password : '123'
     },


  { name : 'Bob',
    email: 'bob@email.com',
    balance : 10,
    password : 'secret' }
];

export default function(auth, cb) {

  var _email = auth.email;
  var _password = auth.password;

  var invalid = function() {
    setTimeout(function() {
      cb({'error': 'No such user with this login and password'});
    });
  }

  var user = users.filter(function(u) {
    return u.email.toLowerCase() == _email.toLowerCase();
  })[0];

  if(!user) {
    return invalid();
  }

  if(user.password !== _password) {
    return invalid();
  }

  setTimeout(function() {
    cb({
      name : user.name,
      email : user.email,
      balance : user.balance
    });
  });
};
