import ConfigurationService from './configuration'

class ProductServices {

    constructor() {
        this.config = new ConfigurationService();
    }

    async PrimaryProductList() {
        let baseURL = this.config.BackEnd_API_BaseURL + "/api/PrimaryProducts";
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

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

    async PrimaryProductDetails(PrimaryProductID) {
        let baseURL = this.config.BackEnd_API_BaseURL + "/api/PrimaryProducts/" + PrimaryProductID;
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

    async ProductList() {
        let baseURL = this.config.BackEnd_API_BaseURL + "/api/Products";
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
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

    async Formula(ProductPrimaryID) {
        let baseURL = this.config.BackEnd_API_BaseURL + "/api/PrimaryProducts/Formula/" + ProductPrimaryID;
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

    async UpsertFormula(Model,Type) {
        let baseURL = this.config.BackEnd_API_BaseURL + "/api/PrimaryProducts/Formula/" + Type;
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

    async UpsertPrimaryProduct(Model, Type) {
        let baseURL = this.config.BackEnd_API_BaseURL + "/api/PrimaryProducts/" + Type;
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

    async UpsertProduct(Model, Type) {
        let baseURL = this.config.BackEnd_API_BaseURL + "/api/Products/" + Type;
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
export default ProductServices;