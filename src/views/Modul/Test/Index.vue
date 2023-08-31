<template>
  <TemplateForm v-if="create || update || view"/>
  <div v-else class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">

      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card mb-12">
          <div class="card-header pb-0">
            <div class="row">
              <div class="col-6 d-flex align-items-center">
                <h6 class="mb-0">Units</h6>
              </div>
              <div class="col-6 text-end">
                <soft-button color="dark" variant="gradient" @click="this.setCreating()">
                  <i class="fas fa-plus me-2"></i>
                  Add New
                </soft-button>
              </div>
            </div>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th
                      class="text-uppercase text-secondary opacity-7"
                    >
                      No
                    </th>
                    <th
                      class=" text-uppercase text-secondary   opacity-7"
                    >
                      Name
                    </th>
                    <th class="text-secondary opacity-7 text-end"> Action </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in data" :key="index">
                    <td style="padding-left : 24px !important; padding-right : 24px !important;">{{ index + 1 }}</td>
                    <td style="padding-left : 24px !important; padding-right : 24px !important;">{{ item.name }}</td>
                    <td class="align-items-right " style="padding-left : 24px !important; padding-right : 24px !important;">
                      <div class="text-end">
                        <button
                          type="button"
                          class="mb-0 btn"
                          :class="`btn-success`"
                          @click="setUpdating(item.id)"
                        > 
                          <font-awesome-icon :icon="faPencil" />
                        </button>
                          |
                        <button
                          type="button"
                          class="mb-0 btn"
                          :class="`btn-info`"
                          @click="setViewing(item.id)"
                        > 
                          <font-awesome-icon :icon="faEye" />
                        </button>
                          |
                        <button
                          type="button"
                          class="mb-0 btn"
                          :class="`btn-danger`"
                          @click="showModalConfirm('delete','Delete',item.id)"
                        > 
                          <font-awesome-icon :icon="faTrash" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer">
            <div class="row">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SoftButton from "@/components/SoftButton.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTrash,faPencil,faEye
} from "@fortawesome/free-solid-svg-icons";
import TemplateForm from "./TemplateForm";
export default {
  name: "Test",
  components: {
    SoftButton,
    FontAwesomeIcon,
    TemplateForm
  },
  data (){
    return { 
      data : [
        {
          id : 1,
          name :"name 1 ",
        },
        {
          id : 2,
          name :"name 2 ",
        }
      ],
      faEye,
      faTrash, 
      faPencil,
      create : false,
      update : false,
      view : false
    }
  },
  beforeMount(){
    this.testCall()
    this.getDetail()
    console.log("getting data")
  },
  methods : {
    async getDetail (){
        // const res = await this.apiGets("Api/units.php?all")
        // this.data = res.data.data;
    },
    delete(id){
      this.showModalInfo("Berhasil","Data "+id+" telah terhapus","success")
    }
  }
};
</script>
