<template>
  <v-row class="container">
    <v-col cols="sm">
      <div class="Chart pa-2">
        <h1 style="text-align:center;">Number of entries per day</h1>
        <BarChart/>
    </div>
    </v-col>

    <v-col cols="sm">
      <div class="Chart pa-2">
        <h1 style="text-align:center;">Number of people detected</h1>
        <LineChart/>
    </div>
    </v-col>

    <v-col cols="sm">
      <div class="Chart pa-2">
        <h1 style="text-align:center;">Number of returns of banned people</h1>
        <BarChart/>
    </div>
    </v-col>

    <v-col cols="sm">
      <div class="Chart pa-2">
        <h1 style="text-align:center;">Number of people with fever</h1>
        <LineChart/>
    </div>
    </v-col>
  </v-row>
</template>

<script>
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';

export default {
  components: {
    BarChart,
    LineChart,
  }
};
</script>

<style scoped>

  .container {
    max-width: 800px;
  }

  h1 {
    font-family: 'Helvetica', Arial;
    color: #6a6a6a;
    text-transform: uppercase;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 15px;
    font-size: 28px;
    margin-top: 0;
  }

  .Chart {
    padding: 20px;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, .4);
    border-radius: 20px;
  }
</style>
