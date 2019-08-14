<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <SideBar />
      <Content>
        <!-- Page Heading -->
        <h1 class="h3 mb-2 text-gray-800 text-left">Clients</h1>
        <!-- <p class="mb-4">
          DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
          <a
            target="_blank"
            href="https://datatables.net"
          >official DataTables documentation</a>.
        </p> -->

        <!-- DataTales Example -->
        <div class="card shadow mb-4">
          <!-- <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
          </div> -->
          <div class="card-body">
            <div class="table-responsive">
              <!-- {{products}} -->
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" v-if="!isLoading">
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Profile</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr v-for="(product,index) in clients" :key="index">
                    <td class="text-left text-uppercase">{{index}}</td>
                    <td>&#8358;{{clients[index].Profit}}</td>
                  </tr>
                </tbody>
              </table>
              <div v-else><h3>Loading...</h3></div>
            </div>
          </div>
        </div>
      </Content>
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

    <LogoutModal />
  </div>
</template>
<script>

import "@/assets/vendor/datatables/dataTables.bootstrap4.min.css";
import "@/assets/vendor/datatables/jquery.dataTables.min.js";
import "@/assets/vendor/datatables/dataTables.bootstrap4.min.js";
import "@/assets/js/demo/datatables-demo.js";
import SideBar from "./SideBar";
import Content from "./Content";
import LogoutModal from "../modals/LogoutModal";
import axios from "axios";

export default {
  name: "Clients",
  components: {
    SideBar,
    Content,
    LogoutModal
  },
  data() {
    return {
      clients: [],
      isLoading: true
    };
  },
  mounted() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const fullUrl =
      proxyurl +
      "https://analysisapi.herokuapp.com/highamtby/";

    axios.get(fullUrl)
    .then(response => {
        (this.clients = response.data)
      this.isLoading = false
      })
  }
};
</script>