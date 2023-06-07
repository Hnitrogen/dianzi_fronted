<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :class="route_name == 'upload' ? 'nav-link active' : 'nav-link'"
                            :to="{ name: 'upload' }">上传数据</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="route_name == 'download' ? 'nav-link active' : 'nav-link'"
                            :to="{ name: 'download' }">下载数据</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        let route_name = computed(() => route.name)
        return {
            route_name,
        }
    }
}
</script>
  
<style scoped></style>
  