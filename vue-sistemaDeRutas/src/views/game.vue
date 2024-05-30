<template>
   <h1>Estamos en el juego</h1>
   <p>{{ $route.params.name}}</p>
   <button @click="load">Volver</button>
</template>

<script>
import {useRoute,useRouter} from "vue-router"
  export default{
        setup(){
            const route = useRoute();
            const router = useRouter();
            console.log(router);
            const load = () =>{
                console.log("Volver a la home");
                setTimeout(() =>{
                    console.log("home");
                    router.push("/")
                },3000);
            };

            return{
                load,
            };
        },

        
  };
</script>