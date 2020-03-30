/* B"H
*/
const Users = [
    { Name: 'Moshe', Password: '2020', Email: 'plotkinm@newpaltz.edu' },
    { Name: 'Bracha', Password: '5780', Email: 'chabad@newpaltz.edu' },
    
];

module.exports = {
    CurrentUser: null,

    Login(email, password) {
    
        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong Password');
    
        return this.CurrentUser = user;
    }
}
