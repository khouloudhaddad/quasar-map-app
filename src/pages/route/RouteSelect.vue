<template>
  <q-page id="routeSelect">
    <q-toolbar class="text-white bg-teal-8">
      <q-toolbar-title>  Route </q-toolbar-title>
      <q-btn to="/route/add-route" flat round dense icon="add" color="red" />
    </q-toolbar>

    <div class="q-pa-md form-style">
      <div class="text-h6 q-pb-md">Where would you like to go?</div>

      <q-input outlined stack-label label="From" >
        <template v-slot:append>
          <q-icon name="close" />
        </template>
      </q-input>

      <q-input class="q-pt-md" outlined stack-label label="To" >
        <template v-slot:append>
          <q-icon name="close" />
        </template>
      </q-input>

     <div class="q-pt-md">
       <q-btn size="lg" class="full-width" color="black" label="Search" />
     </div>
    </div>
  </q-page>
</template>

<script setup></script>

<style lang="scss">
#routeSelect {
  .form-style {
    margin: 0 auto;
    height: calc(100vh-100px);
    max-width: 500px;
  }
}
</style>
