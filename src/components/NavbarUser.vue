<template>
  <div class="navbar-user-wrapper">
  	<ul class="p-2 pl-3 m-0 align-items-center border-left" id="user-section">
      <li class="d-flex align-items-center" v-if="data.name !== null">
        <div class="d-flex flex-column p-0 m-0 mr-3">
          <ul>
            <li class="text-dark section-table-font"><small class="font-weight-bold">{{data.name}}</small></li>
            <li class="text-left section-table-font"><small class="text-secondary">{{data.role}}</small></li>
          </ul>
        </div>
        <div class="mr-3">
            <img :src="data.image" class="avatar-rounded user-profile-img" @click="viewDetailUser">
        </div>
      </li>
      <li v-else class="d-flex align-items-center">
        <div class="d-flex flex-column p-0 m-0 mr-3">
          <ul>
            <li class="text-dark section-table-font"><small class="font-weight-bold">User</small></li>
            <li class="text-left section-table-font"><small class="text-secondary">Admin</small></li>
          </ul>
        </div>
        <div class="mr-3">
            <!-- <img src="./../assets/img/logo.png" width="50" height="50" class="avatar-rounded user-profile-img" @click="viewDetailUser"> -->
            <router-link to="/login" class="btn btn-outline-danger btn-sm align-middle" >Login</router-link>
        </div>
      </li>
    </ul>
    <ul class="d-none" id="user-profile-dropdown">
      <li><router-link to="/user-profile"><small>Profile</small></router-link></li>
    </ul>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'NavbarUser',
  data () {
    return {
      visible: false
    }
  },
  props: {
    data: Object
  },
  methods: {
    viewDetailUser () {
      this.$emit('viewUser')
    }
  }
}
</script>
<style type="text/css" scoped>
  .navbar-user-wrapper {
    position: relative;
  }
  .user-profile-img:hover {
    cursor: pointer;
  }
  .user-profile-dropdown {
    position: absolute;
    top:0;
    left: 10;
    z-index: 3;
  }
</style>
