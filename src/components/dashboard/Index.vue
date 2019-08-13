<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <SideBar />
      <Content>
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
          <GenerateReportButton href="#" />
        </div>

        <!-- Content Row -->
        <div class="row">
          <!-- Earnings (Monthly) Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
            <EarningCard
              borderLeftColor="border-left-primary"
              textColor="text-primary"
              title="Earnings (Monthly)"
              amount="$40,000"
              icon="fas fa-calendar"
            />
          </div>

          <!-- Earnings (Monthly) Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
            <EarningCard
              borderLeftColor="border-left-success"
              textColor="text-success"
              title="Earnings (Yearly)"
              amount="$215,000"
              icon="fas fa-dollar-sign"
            />
          </div>

          <!-- Earnings (Monthly) Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
            <ProgressCard
              borderLeftColor="border-left-success"
              textColor="text-success"
              title="Task"
              progress="50"
              icon="fas fa-clipboard-list"
            />
          </div>

          <!-- Pending Requests Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
            <RequestCard
              borderLeftColor="border-left-success"
              textColor="text-success"
              title="Task"
              unit="50"
              icon="fas fa-comments "
            />
          </div>
        </div>
         <!-- Content Row -->

        <div class="row">
          <!-- Area Chart -->
          <div class="col-xl-8 col-lg-7">
            <AreaChart title="Earnings Overview" />
          </div>

          <!-- Pie Chart -->
          <div class="col-xl-4 col-lg-5">
              <PieChart title="Revenue Sources" />
          </div>
        </div>

        <!-- Content Row -->
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
import SideBar from "./SideBar";
import Content from "./Content";
import LogoutModal from "../modals/LogoutModal";

import EarningCard from "../cards/EarningCard";
import ProgressCard from "../cards/ProgressCard";
import RequestCard from "../cards/RequestCard";
import GenerateReportButton from "../buttons/GenerateReport";
import AreaChart from "../charts/AreaChart";
import PieChart from "../charts/PieChart";

export default {
  name: "Dashboard",
  components: {
    SideBar,
    Content,
    LogoutModal,
    EarningCard,
    ProgressCard,
    RequestCard,
    GenerateReportButton,
    AreaChart,
    PieChart
  }
};
</script>
