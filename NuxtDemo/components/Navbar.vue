<script setup>
  
  const route = useRoute()

  const links =[{
    label: 'FDM4',
    to: 'https://www.linkedin.com/company/fdm4-international/mycompany/'
  }]

  const programs =[{
    id:'oi',
    label: 'OrderInquiry'
  },{
    id:'oe',
    label: 'OrderEntry'
  }]

  const selected = ref("Search")

  var programHTML = ref(`<h1>No program</h1>`)

  async function getProgram(program){
    program = await $fetch('/api/program/' + program.label)  
    console.log(program)
    setProgramHtml(program)
  }

  function setProgramHtml(html) {
    programHTML = html
  }

</script>

<template>
  <!-- the application, honestly -->
  <div class="container flex flex-row border-b border-gray-200 dark:border-gray-800 items-end mx-auto">
    <!-- the actual navbar -->
      <UHorizontalNavigation :links="links" class="basis-1/2 mb-4"/>
      <!-- <UVerticalNavigation /> -->
      <UInputMenu v-model="selected" :options="programs" class="basis-1/4 mb-4" v-on:update:model-value="getProgram(selected)">
        <template #leading>
          
        </template>
      </UInputMenu>    
  </div>
  <!-- This is where programs go? -->
  <div class="container" v-html="programHTML">
  </div>
</template>
