<template>
  <div class="timer">
    <el-card>
      <span class="timer-description">{{ timerDescription }}</span>
      <span style="float:right; margin-bottom: 21px">
        <el-button
          class="play-button"
          style="margin: 0 6px"
          icon="el-icon-caret-right"
          type="primary"
          @click="goPlayPage"
          round
        />
        <el-button
          v-show="showEdit"
          style="margin: 0 6px"
          type="danger"
          icon="el-icon-edit"
          round
        />
        <el-button
          v-show="showEdit"
          style="margin: 0 6px"
          type="warning"
          icon="el-icon-delete"
          round
        />
      </span>
    </el-card>
  </div>
</template>

<script>
import { formatSeconds } from '@/utils/time'

export default {
  name: 'Timer',
  props: {
    totalSeconds: {
      type: Number,
      require: true
    },
    showEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    timerDescription() {
      return formatSeconds(this.totalSeconds)
    }
  },
  methods: {
    goPlayPage() {
      this.$router.push({ name: 'player', params: { totalSeconds: this.totalSeconds, alarmPoints: [] }})
    }
  }
}
</script>

<style scoped>
.timer-description {
  font-size: 200%;
}

</style>
