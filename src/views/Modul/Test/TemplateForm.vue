<template>
    <div class="py-4 container-fluid">
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
                <h6 class="mb-0">Form Test</h6>
              </div>
              <div class="col-6 text-end">
              </div>
            </div>
          </div>

          <div class="card-body px-0 pt-0 pb-2">
            <div class="row">
              <div class="col-12">
                <hr>
              </div>
            </div>
          </div>
          
          <div class="card-header pb-0">
            <div class="row">
              <div class="col-6 align-items-center">
                <h6 class="mb-0">Detail</h6>
              </div>
              <div class="col-6 text-end">
                <div class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0">
                  <div class="nav-wrapper position-relative end-0">
                    <ul class="p-1 bg-transparent nav nav-pills nav-fill" role="tablist">
                      
                      <li class="nav-item">
                        <button class="btn btn-sm btn-danger"> <i class="fas fa-trash me-2"></i> Clear </button>
                      </li>
                      <li class="nav-item">
                        <button class="btn btn-sm btn-success"> <i class="fas fa-plus me-2"></i> Add </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="row">
              <div class="col-12">
                <hr>
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
                        <th class="text-secondary opacity-7"> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- <tr v-for="(item,index) in data" :key="index">
                        <td style="padding-left : 24px !important; padding-right : 24px !important;">{{ index + 1 }}</td>
                        <td style="padding-left : 24px !important; padding-right : 24px !important;"><p class="text-xs font-weight-bold mb-0">{{ item.name }}</p></td>
                        <td class="align-items-right" style="padding-left : 24px !important; padding-right : 24px !important;">
                          
                          <button
                            type="button"
                            class="mb-0 btn"
                            :class="`btn-success`"
                          > 
                            <font-awesome-icon :icon="faPencil" />
                          </button>
                        |
                          <button
                            type="button"
                            class="mb-0 btn"
                            :class="`btn-danger`"
                          > 
                            <font-awesome-icon :icon="faTrash" />
                          </button>
                        </td>
                      </tr> -->
                    </tbody>
                  </table>
                </div>

                </div>
            </div>
          </div>
          <hr>
          <div class="card-footer">
            <div class="row">
              <div class="col-4">
                <soft-button color="warning" size="sm" @click="this.setLanding()" >
                  <i class="fas fa-arrow-left me-2"></i>
                  Back
                </soft-button>
              </div>
              <div class="col-4 text-center">
                <soft-button color="info" size="sm" >
                  <i class="fas fa-undo me-2"></i>
                  Reset
                </soft-button>
              </div>
              <div class="col-4 text-end">
                <soft-button color="success" size="sm" >
                  <i class="fas fa-save me-2"></i>
                  Submit
                </soft-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import SoftButton from "@/components/SoftButton.vue";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  components: {
    SoftButton,
    // FontAwesomeIcon
  },
    name :"TemplateForm"
}
</script>