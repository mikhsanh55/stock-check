<template>
	<button @click="handleInChild">TEST</button>
</template>
<script type="text/javascript">
export default {
  name: 'Test',
  methods: {
    handleInChild: function () {
      this.$emit('fromTest')
    }
  }
}
</script>
