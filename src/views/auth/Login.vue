<template>
	<div id="form-wrapper" class="d-flex">
		<section class="login-image">
		</section>
		<section class="login-form d-flex justify-content-start w-100 align-items-start">
			<form>
				<header>
					<h3 class="title-form font-weight-bold">Gudang Butik Dukomsel</h3>
					<p class="text-left">Login untuk mendapatkan fitur premium</p>
				</header>
				<div class="form-group">
					<label>Username</label>
					<input type="text" name="username" class="form-control pt-4 pb-4" placeholder="Username">
				</div>
				<div class="form-group">
					<label>Password</label>
					<input :type="typePassword" name="password" class="form-control pt-4 pb-4" placeholder="Password">
				</div>
				<button type="submit" class="btn w-100 mt-4 p-2" @click.prevent="login">Login</button>
				<small class="d-block text-center mt-4">Belum punya akun? <a href="/daftar">Daftar</a></small>
			</form>
		</section>
	</div>
</template>
<script type="text/javascript">
export default {
  name: 'Login',
  data () {
  	return {
  		typePassword: 'password'
  	}
  },
  methods: {
  	login () {

  	}
  }
}
</script>
