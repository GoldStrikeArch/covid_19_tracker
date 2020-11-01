<script>
  import TabList from "./TabList.svelte";

  async function fetchTotal() {
    const res = await fetch("https://api.covidtracking.com/v1/us/daily.json");
    const json = await res.json();

    const transformedData = parseTotalData(json);

    if (res.ok) {
      return transformedData;
    } else {
      throw new Error(json);
    }
  }

  function parseTotalData(data) {
    return data.map((item) => {
      return {
        date: item.date,
        totalCases: item.positive,
        caseIncrease: item.positiveIncrease,
        totalTests: item.totalTestResults,
        testsIncrease: item.totalTestResultsIncrease,
        death: item.death,
        deathIncrease: item.deathIncrease,
        recovered: item.recovered,
        currentlyHospitalized: item.hospitalizedCurrently,
        totalHospitalized: item.hospitalizedCumulative,
        hospitalizedIncrease: item.hospitalizedIncrease,
        onVentilatorCurrently: item.onVentilatorCurrently,
        dateChecked: item.dateChecked,
      };
    });
  }
</script>

{#await fetchTotal()}
  <p>Loading...</p>
{:then data}
  <TabList {data} />
{:catch error}
  <p>{error.message}</p>
{/await}
