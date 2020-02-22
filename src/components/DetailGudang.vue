<template>
	<table class="table table-bordered table-striped">
		<tr>
			<th class="section-table-font section-table-size w-25">Nama Produk</th>
			<td class="section-table-font section-table-size">{{data.nproduk}}</td>
		</tr>
		<tr>
			<th class=" w-25 section-table-font section-table-size">Kode Produk</th>
			<td class="section-table-font section-table-size">{{data.kproduk}}</td>
		</tr>
		<tr>
			<th class=" w-25 section-table-font section-table-size">SKU Produk</th>
			<td class="section-table-font section-table-size">{{data.idproduk}}</td>
		</tr>
		<tr>
			<th class=" w-25 section-table-font section-table-size">Jumlah Produk</th>
			<td class="section-table-font section-table-size">{{data.total}}</td>
		</tr>
	</table>
</template>
<script type="text/javascript">
export default {
  name: 'DetailTable',
  props: ['data']
}
</script>
