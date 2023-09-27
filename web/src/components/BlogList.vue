<template>
  <div v-bind="containerProps" style="height: 700px; overflow-y: auto">
    <div v-bind="wrapperProps">
      <div v-for="blog in list" :key="blog.index" class="my-2 card bg-gray-200 text-gray-900">
        <div class="card-body">
          <h2 class="card-title">{{ blog.data.title }}</h2>
          {{ blog.data.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useVirtualList } from '@vueuse/core';
import { ref, onMounted } from "vue";
import axios from "axios";

const blogs = ref([]);

const { list, containerProps, wrapperProps } = useVirtualList(blogs, {
  itemHeight: 200,
})

const getBlogs = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log("response: ", response.data);
      blogs.value = response.data;
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

onMounted(getBlogs);
</script>
