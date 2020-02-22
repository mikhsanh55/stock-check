<template>
	<div class="container flex-grow-1 bg-main" id="detail-gudang">
    <br><br>
		<section class="table-wrap p-4">
			<DetailTable :data="data" />
		</section>
	</div>
</template>
<script type="text/javascript">
import { Crud } from './../../helper/crud.js'
import DetailTable from './../components/DetailGudang.vue'
export default {
  name: 'DetailProduk',
  data () {
    return {
      data: ''
    }
  },
  components: {
    DetailTable
  },
  created () {
    new Crud('http://214.150.151.58/api-gudang/gudang/detail/' + this.$route.params.id).getData()
      .then(res => {
        console.log(res.data)
        this.data = res.data
      })
  }
}
</script>
