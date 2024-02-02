<script setup>
const route = useRoute();

const links = [
  {
    label: "FDM4",
    to: "https://www.linkedin.com/company/fdm4-international/mycompany/",
  },
];

const programs = [
  {
    module: "oe",
    id: "order_inquiry",
    label: "Order Inquiry",
  },
  {
    module: "oe",
    id: "order_entry",
    label: "OrderEntry",
  },
];

const selected = ref("Search");

var programHTML = ref(`<h1>No program</h1>`);

async function getProgram(program) {
  program = await $fetch(
    "http://localhost:7878/" + program.module + "/" + program.id
  );
  console.log(program);
  programHTML = program;
  forceRender();
}

const renderComponent = ref(true);

const forceRender = async () => {
  // Here, we'll remove MyComponent
  renderComponent.value = false;

  // Then, wait for the change to get flushed to the DOM
  await nextTick();

  // Add MyComponent back in
  renderComponent.value = true;
};

const clear = async () => {
  programHTML = "";
  forceRender();
};
</script>

<template>
  <!-- the application, honestly -->
  <div
    class="container flex flex-row border-b border-gray-200 dark:border-gray-800 items-end mx-auto items-center"
  >
    <!-- the actual navbar -->
    <UHorizontalNavigation :links="links" class="basis-1/2" />
    <!-- <UVerticalNavigation /> -->
    <UInputMenu
      v-model="selected"
      :options="programs"
      class="basis-1/4"
      v-on:update:model-value="getProgram(selected)"
    >
    </UInputMenu>
    <UButton class="mx-4" @click="clear">Close Program ❌</UButton>
  </div>
  <!-- This is where programs go? -->
  <div v-if="renderComponent" class="container" v-html="programHTML"></div>
</template>
