export default {
    data() {
        return {
            appName: "FunTav E-Travel",
            sidebarColor: "dark",
            operationUrl: location.protocol+'//olympicgoes.com:82/xPDF/', 
            apiReport: '//172.18.129.235:81/',
            apiOperationUrl: '',
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
    }
}