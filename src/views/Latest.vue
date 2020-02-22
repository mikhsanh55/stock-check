<template>
	<div class="container mb-4 flex-grow-1 bg-main" id="profile">
		<div class="m-4">
			<h4 class="text-left mt-4 mb-4 pb-4 pt-4 dukomsel-font">Produk Terbaru</h4>
			<v-client-table :data="data" :columns="columns" :options="options" id="gudang_table">
				<div slot="createdate" slot-scope="props">
					{{ props.row.createdate | makeDate }}
				</div>
				<div slot="createuser" slot-scope="props">
					{{props.row.createuser.charAt(0).toUpperCase() + props.row.createuser.slice(1) }}
				</div>
        <div slot="qty" slot-scope="props">
          {{ props.row.total | makeInt }}
        </div>
				<div slot="hjual" slot-scope="props">
					{{ props.row.hjual | makeInt }}
				</div>
			</v-client-table>
		</div>
	</div>
</template>
<script type="text/javascript">
import { Crud } from './../../helper/crud.js'
import { EventBus } from '@/bus.js'
export default {
  name: 'Latest',
  data () {
    return {
      data: [],
      columns: ['no', 'kproduk', 'nproduk', 'createdate', 'createuser', 'qty', 'hjual'],
      options: {
      	headings: {
      		no: 'No',
      		kproduk: 'Kode',
      		nproduk: 'Nama',
      		createdate: 'Tanggal Masuk Sistem',
      		createuser: 'Oleh',
          qty: 'Stok',
      		hjual: 'Harga'
      	},
      	sortable: ['no', 'kproduk', 'nproduk', 'createdate', 'createuser', 'hjual'],
      	filterable: ['kproduk', 'nproduk'],
      	columnsClasses: {
      		no: 'text-center align-middle section-table-font',
      		kproduk: 'align-middle section-table-font',
      		nproduk: 'align-middle section-table-font',
      		createdate: 'text-center align-middle section-table-font',
      		createuser: 'text-center align-middle section-table-font',
          qty: 'text-center align-middle section-table-font',
      		hjual: 'text-center align-middle section-table-font'
      	}
      }
    }
  },
  filters: {
    makeInt: function (val) {
      return parseInt(val)
    },
    makeDate: function (val) {
    	let date = ''; let month = ''; let year = ''
    	let arr = val.split(' ')
    	for (let i = 0; i < arr[0].length; i++) {
        if (i <= 3) {
          year += '' + arr[0][i]
        } else if (i > 3 && i <= 5) {
          month += '' + arr[0][i]
        } else {
          date += '' + arr[0][i]
        }
      }

      return date + '-' + month + '-' + year
    }
  },
  created () {
    EventBus.$on('display', (msg) => {
      console.warn(msg)
    })
    new Crud('http://214.150.151.58/api-gudang/gudang/notif').getData().then(res => {
      res.data.forEach((item, i) => {
        item.no = ++i
      })

      this.data = res.data
    })
  }
}
</script>
