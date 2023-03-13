import { defineComponent, ref } from 'vue'
 
export default defineComponent({
     name:'ComponentName',
 
     setup(){
                        //tipado ts para indicar que es tipo number
        const counter = ref<number>(0)

         return{
            counter
        }
    }
});