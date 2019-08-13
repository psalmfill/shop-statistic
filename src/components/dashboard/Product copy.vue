<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <SideBar />
      <Content>
        <!-- Page Heading -->
        
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

export default {
  name: "Products",
  components: {
    SideBar,
    Content,
    PieChart
  }
};
</script>
