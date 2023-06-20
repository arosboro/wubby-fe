<template>
  <div class="home">
    <h1>Welcome! Here you may begin your wubby adventure.</h1>
    <section class="namespace">
      <h2>Namespace</h2>
      <TextBase64Bytes label="name" />
      <TextBase64Bytes label="uri" />
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TextBase64Bytes from "@/components/TextBase64Bytes.vue";
import Utf8Encoding16 from "@/components/Utf8Encoding16.vue";

@Options({
  components: {
    TextBase64Bytes,
    Utf8Encoding16,
  },
})
export default class Studio extends Vue {}
</script>

<style scoped lang="less">
h1 {
  font-size: 3rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
}
section {
  margin: 0;
  padding: 0;
}

.namespace {
  h2 {
    font-size: 2rem;
    font-weight: 300;
    margin: 0;
    padding: 0;
  }
  width: 32em;
}
</style>
