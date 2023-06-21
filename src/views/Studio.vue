<template>
  <div class="home">
    <h1>Welcome! Here you may begin your wubby adventure.</h1>
    <section class="namespace">
      <h2>Namespace</h2>
      <TextBase64Bytes
        label="name"
        :initValue="namespace.name.value"
        :initU64="namespace.name.u64"
        :initBytes="namespace.name.bytes"
        :initBase64="namespace.name.base64"
        @update="namespace.name = $event"
      />
      <TextBase64Bytes
        label="uri"
        :initValue="namespace.uri.value"
        :initU64="namespace.uri.u64"
        :initBytes="namespace.uri.bytes"
        :initBase64="namespace.uri.base64"
        @update="namespace.uri = $event"
      />
    </section>

    <h2>Run These Commands to get started:</h2>
    <code> {{ namespace.name.u64 }} {{ namespace.uri.u64 }} </code>
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
  data: function () {
    return {
      namespace: {
        name: {
          value: "",
          u64: 6288547170389161789n,
          bytes: [],
          base64: "",
        },
        uri: {
          value: "http://www.w3.org/1999/xhtml",
          u64: 0n,
          bytes: [],
          base64: "",
        },
      },
    };
  },
})
export default class Studio extends Vue {
  namespace!: {
    name: { value: string; u64: bigint; bytes: object; base64: string };
    uri: { value: string; u64: bigint; bytes: object; base64: string };
  };
}
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
