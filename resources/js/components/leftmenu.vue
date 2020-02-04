<template>
  <!-- Left Sidebar Menu -->
  <div class="fixed-sidebar-left">
    <ul class="nav navbar-nav side-nav nicescroll-bar">
      <li class="navigation-header">
        <span>Main</span>
        <i class="zmdi zmdi-more"></i>
      </li>

      <li v-for="item in items" :key="item.name">
        <a
          :class="{active:active == item.name}"
          @click="!item.children?navigate($event, item.path, item.name):()=>{}"
          href="javascript:void(0);"
          data-toggle="collapse"
          :data-target="'#' + item.dataTarget"
        >
          <div class="pull-left">
            <i :class="item.icon" class="mr-20"></i>
            <span class="right-nav-text">{{ item.title }}</span>
          </div>
          <div class="pull-right" v-if="item.children">
            <i class="zmdi zmdi-caret-down"></i>
          </div>
          <div class="clearfix"></div>
        </a>

        <ul :id="item.dataTarget" v-if="item.children" class="collapse collapse-level-1">
          <li v-for="child in item.children" :key="child.title">
            <a
              href="javascript:void(0)"
              @click="navigate($event, child.path, item.name)"
            >{{ child.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "leftmenu",
  mounted: function() {
    // console.log(this.$router.currentRoute)
  },
  data: function() {
    return {
      active: "dashboard",
      items: [
        {
          name: "dashboard",
          title: "Dashboard",
          path: "/",
          icon: "zmdi zmdi-landscape",
          dataTarget: "dashboard_dr",
          children: null
        },
        {
          name: "clients",
          title: "Clients",
          path: null,
          icon: "fa fa-users",
          dataTarget: "ecom_dr",
          children: [
            { title: "Companies", path: "/test/Companies" },
            { title: "Individuals", path: "/test/Individuals" }
          ]
        },
        {
          name: "financials",
          title: "Financials",
          path: null,
          icon: "fa fa-money",
          dataTarget: "app_dr",
          children: [
            { title: "D/W History", path: "/test/Financials" },
            { title: "Accounts", path: "/test/Accounts" },
            { title: "Transactions", path: "/test/Transactions" },
            { title: "Reconsiliation", path: "/test/Reconsiliation" }
          ]
        },
        {
          name: "reports",
          title: "Reports",
          path: null,
          icon: "fa fa-bar-chart-o",
          dataTarget: "app_reports",
          children: [
            { title: "Report 1", path: "/test/Report 1" },
            { title: "Report 2", path: "/test/Report 2" },
            { title: "Report 3", path: "/test/Report 3" },
            { title: "Report 4", path: "/test/Report 4" }
          ]
        },
        {
          name: "settings",
          title: "Settings",
          path: null,
          icon: "fa fa-gears",
          dataTarget: "app_settings",
          children: [
            { title: "Companies Categories", path: "/test/companies" },
            { title: "Bank Accounts", path: "/test/Bank" },
            { title: "Portfolios", path: "/test/Portfolios" },
            { title: "Report 4", path: "/test/Report" }
          ]
        }
      ]
    };
  },
  methods: {

    navigate: function(event, path, parent) {
      if (this.$router.currentRoute.path != path) {
        event.preventDefault();
        this.active = parent;
        this.$router.push(path);
      }
      var container = document.getElementsByClassName("fixed-sidebar-left")[0];
      container.classList.add("click");
      setTimeout(() => {
        container.classList.remove("click");
      }, 300);
    }
  }
};
</script>