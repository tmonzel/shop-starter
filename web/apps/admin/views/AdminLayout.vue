<template>
  <div class="p-1 bg-light d-flex justify-content-end">
    <button class="btn" @click="auth.logout">Logout</button>
  </div>

  <div class="d-flex">
    <div class="col py-5 px-4" style="max-width: 250px;">
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Übersicht</router-link>
        </li>
        <li class="nav-item">
          <router-link 
            class="nav-link" 
            to="/products"
            :class="{ active: currentRoute.fullPath.startsWith('/products') }"
          >Produkte</router-link>
        </li>
        <li class="nav-item">
          <router-link 
            class="nav-link" 
            to="/customers" 
            :class="{ active: currentRoute.fullPath.startsWith('/customers') }"
          >Kunden</router-link>
        </li>
        <!--<li class="nav-item">
          <router-link class="nav-link" to="/users">Benutzer</router-link>
        </li>-->
      </ul>
  {{  }}
    </div>
    <div class="col p-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { router } from '@admin/routing';
import { defineComponent } from 'vue';
import { auth } from '../auth';

export default defineComponent({
  name: 'AdminLayout',

  setup() {
    return {
      auth,
      currentRoute: router.currentRoute
    }
  }
});
</script>

<style lang="scss">
@import "@admin/boot";

.nav-link {
  color: $dark;
  
  &.active {
    background-color: $dark !important;
  }
}
</style>
