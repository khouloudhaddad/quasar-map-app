<template>
  <q-page id="loginPage">
    <q-toolbar class="text-white bg-teal-8">
      <q-toolbar-title>Account</q-toolbar-title>
    </q-toolbar>

    <div class="text-h6 text-center q-pt-md">
      <q-avatar size="60px" color="green">JD</q-avatar>
      <div>John Doe</div>
    </div>

    <div class="menu">
      <q-separator inset />
      <q-list class="q-mx-md">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="primary" rounded text-color="white" icon="account_box" />
          </q-item-section>

          <q-item-section class="text-size">My Details</q-item-section>

          <q-item-section side>
            <q-icon name="arrow_right" size="33px" />
          </q-item-section>
        </q-item>
      </q-list>

      <q-separator inset />
      <q-list class="q-mx-md">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="red" rounded text-color="white" icon="logout" />
          </q-item-section>

          <q-item-section class="text-size">Logout</q-item-section>

          <q-item-section side>
            <q-icon name="arrow_right" size="33px" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>

  </q-page>
</template>

<script setup></script>


<style lang="scss">
#loginPage{
  .menu{
    margin:10px auto;
    width: 100%;
  }
  .text-size{
    font-size: 18px;
  }
}
</style>
