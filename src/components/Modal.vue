<template>
  <div>
    <div v-if="visible">
      <div class="modal fade" ref="modal" >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="header"></slot>
            </div>
            <div class="modal-body">
              <slot name="body"></slot>
            </div>
            <div class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Modal',
  props: {
    visible: Boolean
  }
}
</script>
