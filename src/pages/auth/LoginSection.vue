<template>
  <q-page id="loginPage">
    <q-toolbar class="text-white bg-teal-8">
      <q-toolbar-title>Login</q-toolbar-title>
    </q-toolbar>

    <q-scroll-area class="form-style">
      <div class="text-h6 text-center q-pt-md">
        <q-img src="../../../public/favicon.ico" height="60px" width="60px" />
        <div>Locations Charge Map</div>
      </div>

      <div class="q-pa-md q-gutter-md">
        <div class="text-center"> Register and Get Extra features!</div>


        <q-input outlined stack-label label="Email" >
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>

        <q-input outlined stack-label label="Password" >
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>

        <q-input outlined stack-label label="Confirm Password" >
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>

        <div>
          <q-btn color="black" class="full-width" size="lg" label="Login" />
        </div>

        <div class="q-px-md q-mt-xl text-center">
          <div class="q-mb-md no-account">Don't have an account?</div>

          <q-btn color="teal" outline rounded to="/auth/register" size="15px" >Register Here</q-btn>
        </div>
      </div>
    </q-scroll-area>

  </q-page>
</template>

<script setup></script>


<style lang="scss">
#loginPage{
  .form-style {
    margin: 0 auto;
    height: calc(80vh - 100px);
    max-width: 500px;
  }

  .no-account{
    font-size: 17px;
  }
}
</style>
