import router from "./components/Router.js";

(() => {
    const myVM = new Vue({
        router,

        data:{
            user:{

                username: "foo",
                admin: 1,
                avatar: "olaf"

            }
            
        }
        
    }).$mount("#app");
})();