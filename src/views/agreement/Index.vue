<template>
    <div class="container">
        <div style="height: 20px"/>
        <div style="text-align: center">
            <h4>{{ agreements.main.title}}</h4>
            <label>{{ agreements.main.date }}</label><br/>
            <label>{{ agreements.main.description }}</label>
        </div>
        <hr>
        <div :key="agreement.title" v-for="agreement in agreements.body" v-cloak>
            <h5>{{ agreement.subject }}</h5>
            <div :key="item.id" v-for="item in agreement.data" v-cloak>
                <label>{{ item.title }}</label>
            </div>
        </div>

        <hr>
        <div :key="agreement.subject" v-for="agreement in agreements.body" v-cloak>
            <h5>{{ agreement.subject }}</h5>
            <div :key="item.id" v-for="item in agreement.data" v-cloak>
                <label>{{ item.title }}</label>
                <pre style="font-size: smaller; white-space:pre-wrap;">{{ item.content }}</pre>
                <br/>
            </div>
            <br/>
        </div>
    </div>
</template>

<script>
import agreements from './data.json'
export default {
  metaInfo () {
    return { title: '이용약관' }
  },
  data () {
    return {
      agreements: agreements,
      show: true
    }
  }
}
</script>
