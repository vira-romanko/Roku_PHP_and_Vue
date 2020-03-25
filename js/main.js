import router from "./components/Router.js";

(() => {
    const myVM = new Vue({
        router,

        data:{
            username: "foo"
        }
        
    }).$mount("#app");
})();