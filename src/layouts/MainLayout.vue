<template>
  <q-layout>
    <q-header  class="bg-teal">
      <q-toolbar>

        <q-toolbar-title>Charges Locations Map</q-toolbar-title>

         <q-btn flat round dense icon="login" />

      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
            <q-tabs
              class="text-light bg-teal"
            >
              <q-tab name="/map" icon="explore" label="Map" />
              <q-tab name="/route" icon="directions" label="Routes" />
              <q-tab name="/auth" icon="login" label="Auth" />
            </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>

</script>
