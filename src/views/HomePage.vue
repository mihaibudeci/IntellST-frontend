<template>
    <v-row class="col-12" dense>
      <v-col class="col-6">
        <v-card class="d-flex pa-2">
          <v-content>
            <BarChart/>
          </v-content>
        </v-card>
      </v-col>
      <v-col class="col-6">
        <v-card class="d-flex pa-2">
          <v-content>
            <LineChart/>
          </v-content>
        </v-card>
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