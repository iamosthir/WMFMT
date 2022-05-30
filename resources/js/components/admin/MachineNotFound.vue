<template>
<div class="row">
    
    <div class="col-12">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-6 mt-5">
                        <div class="card" style="background-color: #f7f7f7">
                            <div class="card-body">
                                <div class="text-center">
                                    <img style="width: 40%; margin: 0 auto;" src="/img/not-found.png" alt="">
                                    <h3 style="font-family: 'Segoe UI'" class="mt-4">We can't find any machines with label "<b>{{ label }}</b>"</h3>
                                    <p class="text-muted mt-2">Want to add a new record with this label? click the button bellow</p>
                                    <router-link :to="{name: 'add-machine'}" class="btn btn-primary mt-3">Add a new machine data</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            label: this.$route.params.label
        }
    }
}
</script>

<style>

</style>