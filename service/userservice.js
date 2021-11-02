define([''], function () {

    var methods = {};
    methods.signup = async function (obj) {
        // console.log('hey')
        // console.log(obj)
        // console.log("abcd", obj)
        let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', obj)
        return response;
    }
    methods.signin = async function (obj1) {
        console.log("a1b1", obj1)
        let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', obj1)
        return response;
    }
    return methods;
})

