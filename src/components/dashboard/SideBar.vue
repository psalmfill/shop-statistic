<template>
    
      <!-- Sidebar -->
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            SB Admin
            <sup>2</sup>
          </div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0" />

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
          <router-link class="nav-link" to="/dashboard">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </router-link>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Interface</div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
          <router-link
            class="nav-link "
            to="/dashboard/clients"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>Clients</span>
          </router-link>
        </li>
          <li class="nav-item">
          <router-link
            class="nav-link "
            to="/dashboard/products"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>Products</span>
          </router-link>
        </li>
         <li class="nav-item">
          <router-link
            class="nav-link "
            to="/dashboard/quantities"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>Quantities</span>
          </router-link>
        </li>

        
        
        <hr class="sidebar-divider d-none d-md-block" />

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>
      <!-- End of Sidebar -->
</template>

<script>

export default {
  
    name:"SideBar"
}
</script>

