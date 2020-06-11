<script>
import { Line } from '../BaseCharts'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday ', 'Sunday'],
      datasets: [
        {
          label: 'Data',
          backgroundColor: '#d01919',
          data: [40, 39, 10, 40, 39, 80, 40]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>