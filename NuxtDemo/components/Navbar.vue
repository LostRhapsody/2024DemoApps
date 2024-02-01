<script setup>

  const route = useRoute()

  const links =[{
    label: 'FDM4',
    to: 'https://www.linkedin.com/company/fdm4-international/mycompany/'
  }]

  const programs =[{
    id:'oi',
    label: 'Order Inquiry'
  },{
    id:'oe',
    label: 'Order Entry'
  }]

  const selected = ref("Search")

  async function getProgram(program){
    // console.log(program.id)
    // alert(program.id)
    const getProgram = await $fetch('/api/program/' + program.label)
  }

</script>

<template>
  <!-- the application, honestly -->
  <div class="container flex flex-row border-b border-gray-200 dark:border-gray-800 items-end mx-auto">
    <!-- the actual navbar -->
    <UHorizontalNavigation :links="links" class="basis-1/2"/>
    <UVerticalNavigation />
    <UInputMenu v-model="selected" :options="programs" class="basis-1/4" v-on:update:model-value="getProgram(selected)">
      <template #leading>
        
      </template>
    </UInputMenu>
    <!-- This is where programs go? -->
    <div class="container" v-html="programHTML">

    </div>
  </div>
</template>
