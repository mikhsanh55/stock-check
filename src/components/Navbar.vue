<template>
    <div id="navbar" class="m-0 p-0">
      <div class="bg-light d-flex justify-content-between">
      	<ul class="p-2 pl-3 m-0 align-items-center" id="brand-section">
      		<li>
      			<router-link to="/">
              <img src="./../assets/img/logo.png" width="50" height="50">
            </router-link>
      		</li>
      	</ul>
        <NavbarUser :data="user" @viewUser="displayDropdown" />
      </div>
    </div>
</template>
<script type="text/javascript">
import NavbarUser from './NavbarUser.vue'
export default {
  name: 'Navbar',
  data () {
    return {
      user: {
        name: null,
        role: null,
        image: null
      }
    }
  },
  methods: {
    displayDropdown () {
      // alert('Open the door')
    }
  },
  components: {
    NavbarUser
  }
}
</script>
