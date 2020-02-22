<template>
  <main>
	  <Navbar />
	  <Sidebar />
	  <div class="container-wrapper">
	    <router-view></router-view>
	  </div>
  </main>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'home',
  components: {
    Sidebar,
    Navbar
  }
}
</script>
