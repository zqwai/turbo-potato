<template>
    <p class="text-center pt-5">
        &copy; {{anther}}
        <em>{{ new Date().getFullYear() + 10 }}</em>.
    </p>
</template>
<script>
export default {
  // name: 'appfooter',
  data() {
    return {
      anther: '气味',
    };
  },
};
</script>
