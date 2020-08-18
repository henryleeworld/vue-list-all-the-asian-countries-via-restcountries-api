new Vue({
    el: '#app',
    data() {
        return {
            loading: true,
            countries: null,
            errored: false
        };
    },
    mounted() {
        axios.get('https://restcountries.eu/rest/v2/region/asia').
        then(response => this.countries = response.data).
        catch(error => {
            console.log(error);
            this.errored = true;
        }).
        finally(() => this.loading = false);
    }
});