/* B"H
*/
const axios = require('axios').default;

const Users = [
    { Name: 'Moshe', Password: '2020', Email: 'plotkinm@newpaltz.edu', userId: 0 },
    { Name: 'Bracha', Password: '5780', Email: 'chabad@newpaltz.edu', userId: 1},
    { Name: 'Bernie', Password: '2020', Email: 'bernie@newpaltz.edu', userId: 2 },    
];

function getOrCreate(response){
    console.log(response.data);
    let user = Users.find(x => x.Email == response.data.email);
    if(!user){
        Users.push({ Name: response.data.name, Password: null, Email: response.data.email, userId: Users.length });
        user = Users[Users.length - 1];
    }
    // no need to check password. We got the email address directly from an oauth provider
    return user;

}

module.exports = {
    async Login(email, password) {
    
        let response;
        switch (email) {
            case "google":
                // You can also try https://people.googleapis.com/v1/people/me for more information
                response = await axios.get("https://www.googleapis.com/userinfo/v2/me", { headers: { Authorization: `Bearer ${password}` } })
                return getOrCreate(response);

            case "facebook":
                response = await axios.get(`https://graph.facebook.com/v3.0/me?fields=id,email,name,picture&access_token=${password}`);
                return getOrCreate(response);

            default:
        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong Password');
    
        return user;
        }
   },
    Get(userId) {
        return Users[userId]
    }
}
