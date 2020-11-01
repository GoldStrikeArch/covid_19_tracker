<script>
  import { totalDataLabelMap } from "../../utils/helpers";
  export let key = "";
  export let value = "";

  $: label = totalDataLabelMap[key];
</script>

<div
  class="border-gray-500 rounded-lg border flex flex-col items-center justify-between">
  <h1>{label}</h1>
  <h1>{value}</h1>
</div>
