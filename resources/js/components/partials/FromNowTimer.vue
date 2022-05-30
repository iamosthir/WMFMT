<template>
  <span class="time">{{ ago }}</span>
</template>

<script>
export default {
    props:["date"],
    data(){
        return{
            ago: moment(this.date).fromNow(),
        }
    },
    // mounted(){
    //     this.ago = moment(this.date).formNow();
    // },
    created() {
        setInterval(() => {
            this.ago = moment(this.date).fromNow();
        }, 60000);
    },

}
</script>

<style>

</style>