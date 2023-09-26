<template>
  <el-input
    v-model="textarea"
    :autosize="{ minRows: 2, maxRows: 4 }"
    type="textarea"
    placeholder="Please input"
  />
  <button id="start" @click="playChuck">Play</button>
</template>


<script setup>
import { ref } from 'vue';
import { Chuck } from 'webchuck';

const textarea = ref('');
const theChuck = ref(null);

const playChuck = async () => {
  try {
    const audioContext = new AudioContext();
    if (audioContext.state === "suspended") {
        await audioContext.resume();
    }
    theChuck.value = await Chuck.init([],audioContext);
    theChuck.value.runCode(`
    SinOsc sin => dac;
    440 => sin.freq;
    1::second => now;
    `);
  } catch (error) {
    console.error('Error initializing Chuck:', error);
  }
};
</script>


<script>
export default {
  name: "HomePage",
};
</script>

<style>
/* ... your styles ... */
</style>
