<template>
  <el-time-picker v-model="innerTimePickerValue" />
</template>

<script>
export default {
  name: 'CustomTimePicker',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      innerTimePickerValue: null
    }
  },
  watch: {
    innerTimePickerValue(newV, oldV) {
      this.$emit('input', { h: newV.getHours(), m: newV.getMinutes(), s: newV.getSeconds() })
    }
  },
  mounted() {
    let v = this.value
    this.innerTimePickerValue = new Date(2006, 1, 1, v.h, v.m, v.s, 0)
  }
}

</script>

<style scoped>

</style>
