<template>
  <fieldset class="text-base64-bytes">
    <legend>{{ label }}</legend>
    <input
      v-model="value"
      v-on:keyup="update"
      v-on:blur="decode"
      v-show="!detail"
    />
    <pre v-show="detail">
      base64: {{ base64 }}
      u64: {{ u64 }}
      decoded: {{ decoded }}
    </pre>
    <i v-on:click="toggleDetail">ⓘ</i>
  </fieldset>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    label: String,
  },
  data: function () {
    return {
      detail: false,
      base64: "",
      bytes: [],
      u64: BigInt(0),
      decoded: "",
    };
  },
  methods: {
    update() {
      const value = this.value;
      // to base64
      this.base64 = btoa(value);
      // base64 to bytes
      this.bytes = [];
      for (let i = 0; i < this.base64.length; i++) {
        this.bytes.push(this.base64.charCodeAt(i));
      }
      // base64 to u64
      this.u64 = BigInt(0);
      for (let i = 0; i < this.bytes.length; i++) {
        this.u64 = this.u64 << 8n;
        this.u64 = this.u64 | BigInt(this.bytes[i]);
      }
    },
    decode() {
      // reverse u64 to bytes
      let u64 = this.u64;
      let bytes = [];
      // mask 8 bits at a time, shifting them to the right until u64 is 0
      while (u64 > 0) {
        let char: bigint = u64 & 0xffn;
        bytes.push(parseInt(char.toString()));
        u64 = u64 >> 8n;
      }
      // reverse bytes to base64
      let base64 = "";
      for (let i = bytes.length - 1; i >= 0; i--) {
        base64 += String.fromCharCode(bytes[i]);
      }
      // reverse base64 to string
      this.decoded = atob(base64);
    },
    toggleDetail() {
      this.detail = !this.detail;
    },
  },
})
export default class TextBase64Bytes extends Vue {
  label!: string;
  value!: string;
  detail!: boolean;
  base64!: string;
  bytes!: number[];
  u64!: bigint;
  decoded!: string;
  update!: () => void;
  decode!: () => void;
  toggleDetail!: () => void;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
fieldset {
  margin: 1em;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}
label,
input,
pre {
  display: inline-block;
  margin-right: 1em;
  vertical-align: middle;
  width: 88%;
  // big number should wrap to next line
}
i {
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
}
</style>
