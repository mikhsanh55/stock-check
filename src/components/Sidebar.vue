<template>
	<div class="bg-dukomsel border-right" id="sidebar">
		<ul class="p-2 pt-3">
			<li><router-link to="/" class="text-light d-block p-4 sidebar-link round-border-radius"><i class="fas fa-home"></i></router-link></li>
			<li><router-link to="/latest-product" title="Latest Product" class="text-light d-block p-4 sidebar-link round-border-radius"><i class="fas fa-bell"></i></router-link></li>
			<li><router-link to="/profile" title="Member Online Division" class="text-light d-block p-4 sidebar-link round-border-radius"><i class="fas fa-user-friends"></i></router-link></li>
			<li><router-link to="/chat" title="Chatting" class="text-light d-block p-4 sidebar-link round-border-radius"><i class="far fa-comments"></i></router-link></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default {
  name: 'Sidebar'
}
</script>
