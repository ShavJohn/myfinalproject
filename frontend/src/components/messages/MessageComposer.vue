<template>
    <div class="composer">
        <textarea v-model="message" @keydown.enter="send" placeholder="Message..."></textarea>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: ''
            }
        },
        computed: {
          contacts(){
            return this.$store.getters.getContact
          },
        },
        methods: {
            send(e){
                e.preventDefault();

                if(this.message == ''){
                    return;
                }

                this.$emit('send', this.message);
                this.message = '';
            }
        },
    }
</script>

<style scoped>

</style>
