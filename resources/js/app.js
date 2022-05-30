
// window.Vue = require('vue').default;

// Imports

import Vue from "vue";

import AdminRouter from "./routes/admin";

import VueProgressBar from "vue-progressbar";

import Form from 'vform';

import {
    Button,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess
} from 'vform/src/components/bootstrap5';

import moment from "moment";

import Swal from "sweetalert2";

import 'dtoaster/dist/dtoaster.css';
import DToaster from 'dtoaster';
import ToasterPresets from './presets/toast/toast.json';
Vue.use(DToaster, {
    presets: ToasterPresets,
    position: 'top-right',
    containerOffset: '45px',
});

// End


window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


// 
window.Form = Form;
// 
window.moment = moment;
// 
window.swal = Swal;
// 

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('skeleton', require('./components/partials/CustomSkeleton.vue').default);
Vue.component("pagination",require("laravel-vue-pagination"));
// Form
Vue.component(Button.name, Button)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertErrors.name, AlertErrors)
Vue.component(AlertSuccess.name, AlertSuccess)
// 


// Service Form
Vue.component("service-form",require("./components/ServiceForm.vue").default);

// Admin Notification
Vue.component("admin-notification",require("./components/AdminNotificationBar.vue").default);
// End

Vue.use(VueProgressBar, {
    color: 'rgb(98, 255, 84)',
    failedColor: 'red',
    thickness: '5px'
});

AdminRouter.beforeEach((to, from, next) => {
    document.title = to.meta.title || "Dashboard";
    Vue.prototype.$Progress.start();
    next();
});

AdminRouter.afterEach(() => {
    Vue.prototype.$Progress.finish();
});


if(document.getElementById("admin"))
{
    const app = new Vue({
        el: '#admin',
        router: AdminRouter,
    });
}


if (document.getElementById("register-form"))
{
    const registerForm = new Vue({
        el: "#register-form",
        data() {
            return {
                formStep: 1,
                verifyPhoneForm: new Form({
                    phone : "",
                }),
                userName: "",
                registerForm: new Form({
                    name: "",
                    email : "",
                    phone: "",
                    pswrd: "",
                    pswrd_confirmation: "",
                    company: "",
                    address: "",
                }),
            }
        },

        methods : {
            verifyPhone() {
                this.verifyPhoneForm.post("/customer-verify-phone").then(resp=>{
                    return resp.data;
                }).then(data=>{
                    if(data.status == "ok") {
                        this.registerForm.name = data.customer.customer_name;
                        this.registerForm.phone = this.verifyPhoneForm.phone;
                        this.registerForm.address = data.customer.customer_location;
                        this.formStep = 2;
                    }
                }).catch(err=>{
                    console.error(err.response.data);
                })
            },

            register() {
                this.registerForm.post("/customer-register").then(resp=>{
                    return resp.data;
                }).then(data=>{
                    if(data.status == "ok") {
                        window.location.href = "/customer-login"
                    }
                }).catch(err=>{
                    console.error(err.response.data);
                })
            }
        }
    })
}



// Customer machine list
const customerApi = "/customer/api/";
if(document.getElementById("myMachines"))
{
    const customerMachines = new Vue({
        el: "#myMachines",
        data() {
            return {
                paginateData: {},
                machines: [],
                isLoading: true,
                isSearching: false,
                searchText: "",
                searchedMachines: [],

            }
        },
        methods: {
            getMachineList(page = 1) {
                axios.get(customerApi+"customer-machine-list/?page="+page).then(resp=>{
                    return resp.data;
                }).then(data=>{
                    
                    this.paginateData = data;
                    this.machines = data.data;
                    this.isLoading = false;

                }).catch(err=>{
                    console.error(err.response.data);
                });
            },

            openSearchBox() {
                $(".search-container").addClass("search-active");
            },
            closeSearchBox() {
                $(".search-container").removeClass("search-active");
                this.isSearching = false;
                this.searchText = "";
                this.searchedMachines = [];
            },

            search() {

                var _self = this;
                
                _self.isSearching = true;

                if(window.searchTimer) {
                    clearTimeout(window.searchTimer)
                }

                window.searchTimer = setTimeout(function() {

                    if(_self.searchText != "") 
                    {
                        _self.isSearching = true;
                        axios.get(customerApi+"search-machines",{
                            params: {
                                searchText : _self.searchText
                            }
                        }).then(resp=>{
                            return resp.data;
                        }).then(data=>{
                            _self.searchedMachines = data;
                            _self.isSearching = false;
                        }).catch(err=>{
                            console.error(err.response.data);
                        })
                    }
                    else
                    {
                        _self.isSearching = false;
                    }

                }, 800);

            }
        },
        mounted() {
            this.getMachineList();
        }
    })
}