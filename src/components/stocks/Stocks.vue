<template>
    <div>
        <app-stock 
        v-for="stock in stocks" :stock="stock" :key="stock.id" 
        >
 <!-- :name="name" :price="price" is="stocks"  -->
            
        </app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
    components: {
     appStock: Stock
    },
    props: ['stock'],
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>
