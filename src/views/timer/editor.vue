<template>
  <div class="app-container">
    <el-form label-width="120px" label-position="right">
      <el-form-item label="Total Minutes">
        <custom-time-picker v-model="totalTime" />
      </el-form-item>
      <el-form-item
        v-for="(point, index) in alarmPoints"
        :key="index"
        :label="'Alarm Point'"
      >
        <custom-time-picker v-model="alarmPoints[index]" />
        <el-button style="margin-left: 10px" icon="el-icon-delete" @click.prevent="removeAlarmPoint(point, index)" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">Submit</el-button>
        <el-button @click="addAlarmPoint">Add Alarm Point</el-button>
        <el-button @click="cancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import CustomTimePicker from './custom-time-picker'
export default {
  name: 'Editor',
  components: {
    'custom-time-picker': CustomTimePicker
  },
  data() {
    return {
      totalSeconds: 1200,
      alarmPoints: [{ h: 0, m: 0, s: 0 }, { h: 0, m: 10, s: 0 }],
      totalTime: { h: 0, m: 20, s: 0 },
      defaultMinute: 20,
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
    removeAlarmPoint(point, index) {
      this.alarmPoints.splice(index, 1)
    },
    addAlarmPoint() {
      this.alarmPoints.push({ h: 0, m: 0, s: 0 })
    },
    cancel() {
      this.$emit('cancel')
      this.$router.go(-1)
    },
    submit() {

    }
  }

}
</script>

<style scoped>

</style>
