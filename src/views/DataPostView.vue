<template>
    <ContentField>
        <div class="title">上传数据</div>

        <div class="input-group" style="margin-top: 20px;">
            <!-- @change="xxx" 后面不能带括号，这个xxx是个字符串 -->
            <input @change="uploadFile" type="file" class="form-control" id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
            <button @click="submitFile" class="btn btn-outline-secondary" type="button"
                id="inputGroupFileAddon04">上传</button>
        </div>
    </ContentField>
</template>
  
<script>
import http from '../main'
import ContentField from '../components/ContentField.vue'
// import BaseURL from '../main'

export default {
    components: {
        ContentField,
    },
    beforeRouteEnter(from, to, next) {
        document.title = '文件上传';
        next();
    },
    methods: {
        // this是当前组件的实例化对象 --- methods中的uploadFile是组件的内部函数
        uploadFile(event) {
            this.file = event.target.files[0];      // 获取文件流
            // this.name = event.target.files[0].name;     // 获取文件标题
            console.log(this.file);
        },
        submitFile() {
            var formData = new FormData();
            formData.append('my_file', this.file);
            // formData.append('my_file_title', this.title);

            http.post('/file/upload/', formData)
                .then(resp => {
                    console.log("上传成功！")
                    console.log(resp);
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
}
</script>
  
<style scoped></style>