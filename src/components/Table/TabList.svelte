<script>
  import Chart from "../Chart/Chart.svelte";
  import SingleTab from "./SingleTab.svelte";

  export let data;

  $: currentDayData = Object.entries(data[0]).map((item) => {
    return {
      [item[0]]: item[1],
    };
  });
</script>

<div class="container flex flex-row flex-grow flex-wrap justify-between">
  {#each currentDayData as item}
    <SingleTab key={Object.keys(item)[0]} value={Object.values(item)[0]} />
  {/each}
</div>

<Chart {data} />
