<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar unelevated style="height: 70px" class="bg-white text-blue-grey-14 ">
      <div class="text-h6 q-ml-lg">Movie</div>
      <q-space />
      <div v-if="$q.screen.md || $q.screen.lg || $q.screen.xl || $q.screen.sm">
        <q-btn flat :to="{ name: 'homeUser' }">Home</q-btn>
        <q-btn flat :to="{ name: 'myOrder' }">Pesanan Saya</q-btn>
        <q-btn flat>Tentang</q-btn>
        <q-btn @click="logout()" flat>Log Out</q-btn>
      </div>
      <q-btn flat round icon="shopping_cart"/>
      <q-btn flat  v-if="$q.screen.xs " @click="drawer = !drawer" icon="menu"/>
    </q-toolbar>
    <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="500"
        side="right"
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu list">

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>
              <q-item-section>
                Home
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
      </q-drawer>
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    logout () {
      this.$q.localStorage.remove()
      this.$router.push({ name: 'loginPage' })
    }
  }
}
</script>
