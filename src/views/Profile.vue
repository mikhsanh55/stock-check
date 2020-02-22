<template>
	<div class="container mb-4 flex-grow-1 bg-main" id="profile">
		<div class="m-4">
			<h4 class="text-left mt-4 mb-4 pb-4 pt-4 dukomsel-font">Member</h4>
			<v-client-table :data="people" :columns="tableFields" :options="tableOptions" id="profile_table">
				<div slot="aksi" slot-scope="props">
					<router-link :to="'/profile/detail/' + props.row.no" :title="'Detail ' + props.row.name" class="btn btn-light btn-sm text-danger">
						<i class="fa fa-info-circle"></i>
					</router-link>
				</div>
			</v-client-table>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
  name: 'Profile',
  data () {
  	return {
  		people: [
  			{
  				no: 1,
	  			name: 'Hafidz Ari Fitrah',
	  			role: 'Supervisor',
	  			email: 'hafidz@dukomsel.co.id'
	  		}, {
	  			no: 2,
	  			name: 'Irfan Karnen',
	  			role: 'Admin',
	  			email: 'irfan@butikdukomsel.com'
	  		},
	  		{
	  			no: 3,
	  			name: 'Saleh Cahyadi',
	  			role: 'Admin',
	  			email: 'saleh@dukomsel.co.id'
	  		},
	  		{
	  			no: 4,
	  			name: 'Selvi Novita Sari',
	  			role: 'Admin',
	  			email: 'selvi.novitasari@butikdukomsel.com'
	  		},
	  		{
	  			no: 4,
	  			name: 'Yana Sandi Akbar',
	  			role: 'Admin',
	  			email: 'yana@butikdukomsel.com'
	  		},
	  		{
	  			no: 5,
	  			name: 'Rivaldi Rohman Handaka',
	  			role: 'Designer',
	  			email: 'rivaldihandaka@butikdukomsel.com'
	  		},
	  		{
	  			no: 6,
	  			name: 'M Ikhsan Hamidan',
	  			role: 'Web Programmer',
	  			email: 'ikhsan@butikdukomsel.com'
	  		}
  		],
  		tableFields: ['no', 'name', 'role', 'email', 'aksi'],
  		tableOptions: {
  			headings: {
  				no: 'No',
  				name: 'Nama',
  				role: 'Role',
  				email: 'Email',
  				aksi: 'Aksi'
  			},
  			sortable: ['no', 'name', 'email'],
  			filterable: ['no', 'name', 'email'],
  			columnsClasses: {
  				no: 'text-center align-middle section-table-font p-3',
  				name: 'text-left align-middle section-table-font p-3',
  				role: 'text-center align-middle section-table-font p-3',
  				email: 'text-center align-middle section-table-font p-3',
  				aksi: 'text-center align-middle section-table-font p-3'
  			}
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
  #profile_table .row:first-child .col-md-12:first-child {
    display: flex;
    justify-content: space-between;
  }
</style>
