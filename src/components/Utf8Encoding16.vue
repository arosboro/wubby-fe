<template>
  <input v-model="value" v-on:keyup="update" />
  <pre>
    { "a0": {{ a0 }}, "a1": {{ a1 }}, "a2": {{ a2 }}, "a3": {{ a3 }}, "a4": {{
      a4
    }}, "a5": {{ a5 }}, "a6": {{ a6 }}, "a7": {{ a7 }}, "a8": {{ a8 }}, "a9": {{
      a9
    }}, "a10": {{ a10 }}, "a11": {{ a11 }}, "a12": {{ a12 }}, "a13": {{
      a13
    }}, "a14": {{ a14 }}, "a15": {{ a15 }} }
  </pre>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  data: function () {
    return {
      a0: 0,
      a1: 0,
      a2: 0,
      a3: 0,
      a4: 0,
      a5: 0,
      a6: 0,
      a7: 0,
      a8: 0,
      a9: 0,
      a10: 0,
      a11: 0,
      a12: 0,
      a13: 0,
      a14: 0,
      a15: 0,
    };
  },
  methods: {
    update() {
      const utf8_string = this.value;
      this.a0 = utf8_string.charCodeAt(0) || 0;
      this.a1 = utf8_string.charCodeAt(1) || 0;
      this.a2 = utf8_string.charCodeAt(2) || 0;
      this.a3 = utf8_string.charCodeAt(3) || 0;
      this.a4 = utf8_string.charCodeAt(4) || 0;
      this.a5 = utf8_string.charCodeAt(5) || 0;
      this.a6 = utf8_string.charCodeAt(6) || 0;
      this.a7 = utf8_string.charCodeAt(7) || 0;
      this.a8 = utf8_string.charCodeAt(8) || 0;
      this.a9 = utf8_string.charCodeAt(9) || 0;
      this.a10 = utf8_string.charCodeAt(10) || 0;
      this.a11 = utf8_string.charCodeAt(11) || 0;
      this.a12 = utf8_string.charCodeAt(12) || 0;
      this.a13 = utf8_string.charCodeAt(13) || 0;
      this.a14 = utf8_string.charCodeAt(14) || 0;
      this.a15 = utf8_string.charCodeAt(15) || 0;
    },
  },
})
export default class Utf8Encoding16 extends Vue {
  value!: string;
  a0!: number;
  a1!: number;
  a2!: number;
  a3!: number;
  a4!: number;
  a5!: number;
  a6!: number;
  a7!: number;
  a8!: number;
  a9!: number;
  a10!: number;
  a11!: number;
  a12!: number;
  a13!: number;
  a14!: number;
  a15!: number;
  update!: () => void;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
