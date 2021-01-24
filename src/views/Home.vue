<template>
    <div>
        <h1>Welcome to {{title2}}!</h1>
        <input type = "text" v-model="input1" />
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>

        <!-- 선택한 값을 region 변수로 잡음 -->
        <select class="form-control" v-model="region" @change="changeRegion">
            <!-- options를 하나씩 돌리면서 data와 index를 가져옴, key는 필수 지정 -->
            <option :key="i" :value ="d.v" v-for="(d, i) in options">{{d.t}}</option>
        </select>

        <!-- tableShow가 true일때만 table이 보임 -->
        <table class="table table-bordered" v-show="tableShow">
            <tr :key="i" v-for="(d, i) in options">
              <td>{{d.v}}</td>
              <td>{{d.t}}</td>    
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    //vue.js의 변수, html에 적어서 쓸 수 있음
    data(){
        return {
            title: "개발자의 품격",
            title2: "Seoul",
            input1: "abcd",
            //배열 변수
            options: [
                {v: "S", t: "Seoul"},
                {v: "J", t: "Jeju"},
                {v: "B", t: "Busan"},
            ],
            region: "J",
            tableShow: false,
        };
    },
    //데이터의 변동을 캐치 가능
    watch: {
        input1(){
            console.log(this.input1);
        }
    },
    //vue.js에서 모든 method는 여기다 정리
    methods:{
        getData() {
            alert(this.input1);
        },
        setData() {
            this.input1 = "12345";
        },
        changeRegion() {
            alert(this.region);
        }
    },
    //vue.js의 LifeCycle
    beforeCreate() {
        console.log("beforeCreate");
    },
    created(){
        console.log("created");
    },
    beforeMount(){
        console.log("beforeMount");
    },
    mounted(){
        console.log("mounted");
    },
    beforeUpdate(){
        console.log("beforeUpdate");
    },
    updated(){
        console.log("updated");
    },
    beforeDestroy(){
        console.log("beforeDestroy");
    },
    destroyed(){
        console.log("destroyed");
    },
}
</script>