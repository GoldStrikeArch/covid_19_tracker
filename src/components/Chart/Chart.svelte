<script>
  import { createChart } from "./createChart";

  export let data;
</script>

<div class="container w-3/4">
  <canvas use:createChart={{ covidData: data }} />
</div>
