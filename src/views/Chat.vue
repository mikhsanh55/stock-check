<template>
	<div class="container flex-grow-1 bg-main" id="chat-container">
		<button @click="test">Click</button>
	</div>
</template>
<script type="text/javascript">
import { EventBus } from '@/bus.js'
export default {
  name: 'Chat',
  methods: {
  	test () {
  		EventBus.emit('display', 'ashiap')
  	}
  }
}
</script>
