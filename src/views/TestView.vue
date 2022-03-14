<template>
    <div>
        <span>{{ $route.params }}测试页面</span>
    <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
    </el-row>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "testView",
    data(){
        return {
            host: {}
        }
    },
    mounted(){
        this.getHostById()
    },
    methods:{
        getHostById(){
            axios.get('http://127.0.0.1:8060/cmdb/api/v1/host/id').
            then( resp => {
                this.host = resp.data.data
            }).
            catch( err => {
                this.host = err
            })
        }
    }
}
</script>