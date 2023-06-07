<template>
    <ContentField>
        <!-- <div>ListView1111</div> -->
        <div v-for="data in dataset" :key="data" class="download-box">
            <div class="download-box-title" style="width: 200px; margin: auto; padding-left: 20px;"> {{ data.title }}</div>
            <button @click="click_down(data.id)" type="button" class="btn btn-primary">下载</button>
        </div>
    </ContentField>
</template>

<script>
import http from '../main'
import { ref } from 'vue'
import ContentField from '../components/ContentField.vue';

export default {
    components: {
        ContentField
    },
    setup() {
        let dataset = ref('');
        const click_down = (id) => {
            console.log(id);
            // 创建一个 a标签的dom来触发点击链接事件
            const link = document.createElement('a');
            let turl = 'http://localhost:8000/file/download/' + id + '/'
            link.href = turl
            link.click()
        }

        function getDataList() {
            http.get('/file/get/')
                .then(resp => {
                    dataset.value = resp.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }
        getDataList();

        return {
            getDataList, dataset, click_down,
        }
    }
}
</script>

<style scoped>
.btn {
    width: 200px;
    margin-left: 80%;
}

.download-box {
    display: flex;
    /* height: 60px; */
    width: 100%;
    margin: 20px 0px 20px 0px;
    /* border: 1px solid #000; */
    border-radius: 4px;
}

.download-box:hover {
    background-color: rgb(232, 232, 232);
}
</style>