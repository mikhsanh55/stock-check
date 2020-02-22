<template>
	<div class="container flex-grow-1 bg-main" id="content">
			<section class="table-wrap p-4">
				<header class="d-flex align-items-center justify-content-between mb-4">
					<div class="align-self-center">
						<span class="header-table-font table-caption text-dukomsel font-weight-bold">View History of changes</span>
					</div>
					<div class="table-settings">
							<button class="btn btn-light mr-2 header-table-font font-weight-bold"><i class="fas fa-filter"></i></button>
							<button class="btn btn-light header-table-font font-weight-bold"><i class="fas fa-cog"></i></button>
					</div>
				</header>
				<section class="d-flex justify-content-between align-items-center">
					<div class="d-flex justify-content-start align-items-center">
  					<input v-model="query" type="text" name="q" class="form-control input-sm header-table-font" placeholder="Mau cari apa"  @keyup.enter="search">
  					<button class="btn btn-light btn-box-shadow ml-2" @click.prevent="search"><i :class="proses_search == true ? 'fa fa-spinner' : 'fa fa-search'"></i></button>
					</div>
					<div>
						<span class="d-inline-block header-table-font align-self-center mr-3 ">Cari berdasarkan</span>
						<button v-for="(btn, i) in buttons" :key="btn" @click="setFilter(i)" :class="{'btn-box-shadow-clicked':i == isfiltered}" class="btn btn-sm pl-4 pr-4 pt-1 pb-1 m-2 btn-box-shadow header-table-font font-weight-bold">{{btn}}</button>
					</div>
				</section>
				<br>
        <!-- Data Table -->
				<v-client-table :data="data" :columns="columns" :options="options" id="gudang_table">
          <div slot="gc" slot-scope="props">
            {{ props.row.gc | makeInt }}
          </div>
          <div slot="bb" slot-scope="props">
            {{ props.row.bb | makeInt }}
          </div>
          <div slot="tu" slot-scope="props">
            {{ props.row.tu | makeInt }}
          </div>
          <div slot="cs" slot-scope="props">
            {{ props.row.cs | makeInt }}
          </div>
          <div slot="total" slot-scope="props">
            {{ props.row.total | makeInt }}
          </div>
          <div slot="hjual" slot-scope="props">
            {{ props.row.hjual | makeInt }}
          </div>
					<div slot="aksi" slot-scope="props">
						<router-link :to="'/gudang/detail/' + props.row.idproduk" class="btn btn-dukomsel btn-sm">
							<small><i class="fa fa-eye"></i></small>
						</router-link>
					</div>
				</v-client-table>
			</section>
      <Modal :visible="visible">
        <template #header>
          Login
        </template>
        <template #body>
          <form>
          <input type="text" name="username" class="form-control" placeholder="Username" />
          <input type="password" name="password" class="form-control" placeholder="Password" />
          </form>
        </template>
        <template #footer>
          <button class="btn btn-sm btn-light">Login</button>
        </template>
      </Modal>
		</div>
</template>
<script type="text/javascript">
import { Crud } from './../../helper/crud.js'
import Modal from '@/components/Modal.vue'
export default {
  name: 'Gudang',
  data () {
  	return {
      visible: false,
  		filterType: 'nama',
      proses_search: false,
  		isfiltered: false,
  		buttons: ['NAMA', 'KODE', 'SKU'],
  		data: '',
      query: null,
  		columns: ['nproduk', 'kproduk', 'idproduk', 'gc', 'bb', 'tu', 'cs', 'total', 'hjual', 'aksi'],
  		options: {
  			headings: {
  				nproduk: 'NAMA',
  				kproduk: 'KODE',
  				idproduk: 'SKU',
  				gc: 'GC',
  				bb: 'BB',
  				tu: 'TU',
  				cs: 'CS',
  				total: 'TOTAL',
  				hjual: 'HARGA',
  				aksi: ''
  			},
  			sortable: ['nproduk', 'idproduk', 'total', 'hjual'],
  			filterable: ['nproduk', 'kproduk', 'idproduk'],
  			columnsClasses: {
  				nproduk: 'section-table-font section-table-size p-4 ',
  				kproduk: 'section-table-font section-table-size p-4 ',
  				idproduk: 'section-table-font section-table-size p-4 ',
  				gc: 'section-table-font section-table-size p-4 font-weight-bold',
  				bb: 'section-table-font section-table-size p-4 font-weight-bold',
  				tu: 'section-table-font section-table-size p-4 font-weight-bold',
  				cs: 'section-table-font section-table-size p-4 font-weight-bold',
  				total: 'section-table-font section-table-size p-4 font-weight-bold',
  				hjual: 'section-table-font section-table-size p-4 font-weight-bold',
  				aksi: 'section-table-font section-table-size p-4 font-weight-bold'
  			}
  		}
  	}
  },
  filters: {
    makeInt: function (val) {
      return parseInt(val)
    }
  },
  components: {
    Modal
  },
  methods: {
    handleClick (arg1) {
      alert(arg1)
    },
    setCookie (name, value, days) {
      var expires = ''
      if (days) {
        var date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = '; expires=' + date.toUTCString()
      }
      document.cookie = name + '=' + (value || '') + expires + '; path=/'
    },
    getCookie (name) {
      var dc = document.cookie
      var prefix = name + '='
      var begin = dc.indexOf('; ' + prefix)
      if (begin === -1) {
        begin = dc.indexOf(prefix)
        if (begin !== 0) return null
      } else {
        begin += 2
        var end = document.cookie.indexOf(';', begin)
        if (end === -1) {
          end = dc.length
        }
      }
      // because unescape has been deprecated, replaced with decodeURI
      // return unescape(dc.substring(begin + prefix.length, end));
      return decodeURI(dc.substring(begin + prefix.length, end))
    },
  	setFilter (i) {
  		this.isfiltered = i
      if (i === 0) {
        this.filterType = 'nama'
        this.setCookie('filter', 'nama', 1)
      } else if (i === 1) {
        this.filterType = 'kode'
        this.setCookie('filter', 'kode', 1)
      } else {
        this.filterType = 'sku'
        this.setCookie('filter', 'sku', 1)
      }
  	},
    search () {
      if (this.query === null || this.query === '') {
        this.$swal('Produk tidak ditemukan', 'Periksa lagi keywordnya yah :)', 'warning')
        setTimeout(() => {
          this.$swal.close()
        }, 1500)
        return false
      } else {
        this.proses_search = true
        new Crud(`http://214.150.151.58/api-gudang/gudang/request?k=${this.query}&filter=${this.filterType}`).getData().then(res => {
          if (res.status === true) {
            this.proses_search = false
            this.data = res.data
          } else {
            this.proses_search = false
            this.$swal('Produk tidak ditemukan', 'Periksa lagi keywordnya yah :)', 'warning')
            setTimeout(() => {
              this.$swal.close()
            }, 1500)
            return false
          }
        })
          .catch(e => console.error('error ' + e))
      }
    }
  },
  created () {
  	new Crud('http://214.150.151.58/api-gudang/').getData().then(res => {
  		this.data = res.data
  	})

    // new Crud('http://214.150.151.58/api-gudang/gudang/check_empty_product_web').getData().then(res => {
    //   console.log(res)
    // })
    let cookie = this.getCookie('filter')
    if (cookie !== null) {
      if (cookie.toString() === 'kode') {
        this.isfiltered = 1
        this.filterType = 'kode'
      } else if (cookie.toString() === 'sku') {
        this.isfiltered = 2
        this.filterType = 'sku'
      } else {
        this.isfiltered = 0
        this.filterType = 'nama'
      }
    }
  }
}
</script>
<style type="text/css">
  .VuePagination {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  #VueTables_th--aksi {
    width:25px;
  }
  #gudang_table .row:first-child .col-md-12:first-child {
    display: flex;
    justify-content: space-between;
  }
</style>
