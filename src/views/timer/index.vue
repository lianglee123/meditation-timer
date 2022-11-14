<template>
  <div class="app-container">
    <div class="timer-container">
      <el-row
        v-for="timer in timers"
        :key="timer.id"
      >
        <el-col>
          <timer :total-seconds="timer.totalSeconds"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Timer from './timer'

export default {
  name: 'Index',
  components: { Timer },
  data() {
    return {}
  },
  computed: {
    timers() {
      return this.$store.getters.timers
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 6px;
  &:last-child {
   margin-bottom: 0;
 }
}

.timer-container {
  background-color: #fafafa;
  min-height: 500px;
}
</style>
