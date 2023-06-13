<template>
    <div class="table-wrap">
        <div class="d-flex">
            <div class="table-col table-col--left">
                <v-simple-table dense>
                    <template v-slot:default>
                        <tbody>
                            <tr>
                                <th></th>
                                <td></td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
            <div class="table-col table-col--right">
                <v-simple-table dense>

                </v-simple-table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.table-wrap {
  width: 100%;
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
}
.table-col {
  width: 50%;
  tr {
    &:hover {
      td {
        background: #f0f3f4 !important;
      }
    }
    th {
      width: 30%;
      background: #f0f3f4 !important;
    }
    td {
      background: #fff !important;
    }
  }
}
</style>