export default {
    data() {
        return {
            appName: "FunTav E-Travel",
            sidebarColor: "dark",
            operationUrl: location.protocol+'', 
            apiReport: '',
            apiOperationUrl: 'http://localhost/phpCrud/',
        };
    },
    created(){
    },
    methods: {
        testCall(){
            console.log("its work")
        },
        async apiGets(url, params = {}, isLoading = false) {
            let loader;
            if(isLoading) {
                loader = this.$loading.show({"z-index": 999999,});
            }
            var headers = { 
                "Access-Control-Allow-Origin": "*" 
            } 
            try {
                const response = await this.axios.get(this.apiOperationUrl + url, {params}, {headers});
                if(isLoading) loader.hide();
                if(response.status == 200) {
                    return response;
                } else {
                    return Promise.reject(response.statusText)
                }
            } catch (error) {
                if(isLoading) loader.hide();
                // this.$notify({
                //     group: 'notification',
                //     type: 'error',
                //     title: "Warning!",
                //     text: defaultErrors(error.response.data.errors)
                // });
                return Promise.reject(error.response ? error.response: 'ops something went wrong')
            }
        },
        async apiPosts(url, params = {}) {  //'application/x-www-form-urlencoded'
            let loader = this.$loading.show({
                "z-index": 999999,
            });
            var headers = { 
                accept: '*/*', 'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
            try {
                const response = await this.axios.post(this.apiOperationUrl + url, params, {headers});
                loader.hide();
                return {
                    data	:   response.data,
                    status	:   response.status
                }
            } catch (error) {
                loader.hide();
                return {
                    data	:   error.response.data,
                    status	:	error.response.status
                }   
            }
        },
        
        async apiDeletes(url, params = {}) {
            let loader = this.$loading.show({
                "z-index": 999999,
            });
            var headers = {
                "Access-Control-Allow-Origin": "*"
            }
            try {
                const response = await this.axios.delete(this.apiOperationUrl + url, params, {headers});
                loader.hide();
                return {
                    data	:   response.data,
                    status	:   response.status
                }
            } catch (error) {
                loader.hide();
                return {
                    data	:   error.response.data,
                    status	:	error.response.status
                }   
            }
        },
        async apiPuts(url, params = {}) {
            let loader = this.$loading.show({
                "z-index": 999999,
            });
            var headers = {
                "Access-Control-Allow-Origin": "*"
            }
            try {
                const response = await this.axios.put(this.apiOperationUrl + url, params, {headers});
                loader.hide();
                return {
                    data	:   response.data,
                    status	:   response.status
                }
            } catch (error) {
                loader.hide();
                return {
                    data	:   error.response.data,
                    status	:	error.response.status
                }   
            }
        },
        async apiPatchs(url, params = {}) {
            let loader = this.$loading.show({
                "z-index": 999999,
            });
            var headers = {
                "Access-Control-Allow-Origin": "*"
            }
            try {
                const response = await this.axios.patch(this.apiOperationUrl + url, params, {headers});
                loader.hide();
                return {
                    data	:   response.data,
                    status	:   response.status,
                }
            } catch (error) {
                loader.hide();
                return {
                    data	:   error.response.data,
                    status	:	error.response.status
                }   
            }
        },
    }
}