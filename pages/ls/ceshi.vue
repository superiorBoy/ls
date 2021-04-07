<template>
    <view class="container">
       <jinEdit placeholder="请输入内容" @editOk="editOk" :html='aaaaa'></jinEdit> 
    </view>
</template>
<script>
import jinEdit from '../../components/jin-edit/jin-edit.vue';
	
    export default {
components: {
jinEdit
},
        data() {
            return {
            aaaaa:'22222'
            }
        },
        methods: {
           
			
        }
    }
</script>

<style>
  
</style>