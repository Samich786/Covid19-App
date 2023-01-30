<template>
<div>
  <SelectCountry/>
  
</div>
</template>

<script>
import DashBoard from '../components/DashBoard.vue';
import SelectCountry from '../components/SelectCountry.vue';
export default {
  name: 'IndexPage',
  components: {
    SelectCountry, DashBoard
  }
}
</script>
