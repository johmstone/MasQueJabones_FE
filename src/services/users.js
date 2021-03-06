import ConfigurationService from './configuration'

class UsersService {

    constructor() {
        this.config = new ConfigurationService();
    }

    async List() {
        let baseURL = this.config.BackEnd_API_BaseURL + "/api/Users";
        let User = JSON.parse(localStorage.getItem('User'));

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + User.Token);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        return await fetch(baseURL, requestOptions)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then(json => { return json; })
            .catch(err => console.log(err));
    }

    async Details(UserID) {
        let baseURL = this.config.BackEnd_API_BaseURL + "/api/Users/" + UserID;
        let User = JSON.parse(localStorage.getItem('User'));

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + User.Token);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        return await fetch(baseURL, requestOptions)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then(json => { return json; })
            .catch(err => console.log(err));
    }

    async Upsert(model,Type) {
        let baseURL = this.config.BackEnd_API_BaseURL + "/api/Users/" + Type;
        let User = JSON.parse(localStorage.getItem('User'));

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + User.Token);

        var raw = JSON.stringify(model);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return await fetch(baseURL, requestOptions)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then(json => { return json; })
            .catch(err => console.log(err));
    }

    async AdminResetPwd(UserID) {
        let baseURL = this.config.BackEnd_API_BaseURL + "/api/Users/AdminResetPassword";
        let User = JSON.parse(localStorage.getItem('User'));

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + User.Token);

        var raw = JSON.stringify(UserID);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return await fetch(baseURL, requestOptions)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then(json => { return json; })
            .catch(err => console.log(err));
    }

    async UsersAddress(Type, UserID) {
        let baseURL = this.config.BackEnd_API_BaseURL + "/api/Users/" + Type + "/" + UserID;
        let User = JSON.parse(localStorage.getItem('User'));

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + User.Token);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        return await fetch(baseURL, requestOptions)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then(json => { return json; })
            .catch(err => console.log(err));
    }

    async UpsertDeliveryAddress(Model,Type) {
        let baseURL = this.config.BackEnd_API_BaseURL + "/api/Users/DeliveryAddress/" + Type;
        let User = JSON.parse(localStorage.getItem('User'));

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + User.Token);

        var raw = JSON.stringify(Model);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return await fetch(baseURL, requestOptions)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then(json => { return json; })
            .catch(err => console.log(err));
    }

    async UsersFacturationInfo(UserID) {
        let baseURL = this.config.BackEnd_API_BaseURL + "/api/Users/FacturationInfo/" + UserID;
        let User = JSON.parse(localStorage.getItem('User'));

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + User.Token);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        return await fetch(baseURL, requestOptions)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then(json => { return json; })
            .catch(err => console.log(err));
    }

    async UpsertFacturationInfo(Model,Type) {
        let baseURL = this.config.BackEnd_API_BaseURL + "/api/Users/FacturationInfo/" + Type;
        let User = JSON.parse(localStorage.getItem('User'));

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + User.Token);

        var raw = JSON.stringify(Model);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return await fetch(baseURL, requestOptions)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then(json => { return json; })
            .catch(err => console.log(err));
    }

}

export default UsersService;