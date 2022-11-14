<template>
  <div>
    <!--  https://blog.51cto.com/u_15715491/5465186-->
    <!--  https://www.jianshu.com/p/5d7d2493244f-->
    <!--    https://juejin.cn/post/6998078886080675871-->
    <el-row type="flex" justify="center">
      <el-col :span="24">
        <div class="circleBox">
          <el-progress
            :width="300"
            :show-text="true"
            :stroke-width="6"
            type="circle"
            :format="progressContent"
            :percentage="progressPercentage"
          />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="2">
        <el-button type="info"
                   @click="cancelBtn"
                   round>Cancel</el-button>
      </el-col>
      <el-col :span="6" :offset="10">
        <el-button v-if="isRunning" type="warning" round @click="pause">Pause</el-button>
        <el-button v-else :offset="12" type="success" round @click="start">Start</el-button>
      </el-col>
    </el-row>
    <!--    https://juejin.cn/post/6855574111838535693-->
    <div hidden>
      <audio
        ref="audio"
        src="@/assets/odeBowl.wav"
        controls
        muted
      />
    </div>
  </div>
</template>

<script>
import { formatSeconds } from '@/utils/time'
export default {
  props: {
    totalSeconds: {
      type: Number,
      require: true
    },
    alarmPoints: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      remainSeconds: 100,
      timerId: '',
      isRunning: false,
      audio: null
    }
  },
  computed: {
    progressPercentage() {
      return (this.remainSeconds / this.totalSeconds) * 100
    }
  },
  mounted() {
    this.initAudio()
    this.remainSeconds = this.totalSeconds
    this.start()
  },
  methods: {
    initAudio() {
      this.audio = this.$refs.audio
      this.audio.pause()
    },
    start() {
      this.isRunning = true
      this.timerId = setInterval(this.updateRemainTime, 1000)
    },
    pause() {
      this.isRunning = false
      clearInterval(this.timerId)
    },
    progressContent(percentageVal) {
      return formatSeconds(this.remainSeconds)
    },
    cancelBtn() {
      this.pause()
      this.$router.go(-1)
    },
    updateRemainTime() {
      if (this.remainSeconds <= 0) {
        clearInterval(this.timerId)
        this.isRunning = false
        this.alarm()
        return
      }
      this.remainSeconds -= 1
      if (this.remainSeconds % 3 === 0) {
        this.alarm()
      }
    },
    alarm() {
      // const currentMinutes = this.totalMinutes - this.remainSeconds
      // if ([10, 20, 30].includes(currentMinutes)) {
      //   this.playSound()
      // }
      this.playSound()
    },
    playSound() {
      if (this.audio.paused) {
        this.audio.play()
      } else {
        this.audio.currentTime = 0// play from start
      }
    }
  }
}
</script>

<style scoped>

.remain-minutes {
  font-size: 500%;
}

.circleBox {
  margin: 0 auto;
  text-align: center;
}

el-progress {
  margin: auto;
  width: 80%
}

.circleCenter {
  position: absolute;
  top: 50px;
  left: 60px;
}

</style>
