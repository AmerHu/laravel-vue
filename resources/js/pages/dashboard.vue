<template>
  <div class="container-fluid pt-25">
    <div :class="{hidden:isLoading == false}">
      <div class="loader"></div>
      <h5 style="margin-left:70px;">Loading ...</h5>
    </div>
    <template v-if="!isLoading">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div class="panel panel-default card-view pa-0 bg-warning">
            <div class="panel-wrapper collapse in">
              <div class="panel-body pa-0">
                <div class="sm-data-box">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-xs-6 text-center pl-0 pr-0 txt-light data-wrap-left">
                        <span class="block counter">
                          <span class="counter-anim">7,897</span>
                        </span>
                        <span class="weight-500 uppercase-font block">Total Balance</span>
                      </div>
                      <div class="col-xs-6 text-center pl-0 pr-0 txt-light data-wrap-right">
                        <i class="ti-money data-right-rep-icon"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div class="panel panel-default card-view pa-0 bg-green">
            <div class="panel-wrapper collapse in">
              <div class="panel-body pa-0">
                <div class="sm-data-box">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-xs-6 text-center pl-0 pr-0 txt-light data-wrap-left">
                        <span class="block counter">
                          <span class="counter-anim">6,032</span>
                        </span>
                        <span class="weight-500 uppercase-font block">Work Balance</span>
                      </div>
                      <div class="col-xs-6 text-center pl-0 pr-0 txt-light data-wrap-right">
                        <i class="ti-money data-right-rep-icon"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div class="panel panel-default card-view pa-0 bg-primary">
            <div class="panel-wrapper collapse in">
              <div class="panel-body pa-0">
                <div class="sm-data-box">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-xs-6 text-center pl-0 pr-0 txt-light data-wrap-left">
                        <span class="block counter">
                          <span class="counter-anim">1,865</span>
                        </span>
                        <span class="weight-500 uppercase-font block">PER-3212 Balance</span>
                      </div>
                      <div class="col-xs-6 text-center pl-0 pr-0 txt-light data-wrap-right">
                        <i class="ti-money data-right-rep-icon"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div class="panel panel-default card-view pa-0 dotted">
            <div class="panel-wrapper collapse in">
              <div class="panel-body pa-0">
                <div class="sm-data-box">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-xs-12 text-center pl-0 pr-0 txt-light data-wrap-left">
                        <a href="#">
                          <span class="weight-500">
                            <i class="fa fa-plus"></i> Create a New Account
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Row -->
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
          <div class="panel panel-default card-view panel-refresh">
            <div class="refresh-container">
              <div class="la-anim-1"></div>
            </div>
            <div class="panel-heading">
              <div class="pull-left">
                <h6 class="panel-title txt-dark">Balance Distribution</h6>
              </div>
              <div class="pull-right">
                <a href="#" class="pull-left inline-block refresh mr-15">
                  <i class="zmdi zmdi-replay"></i>
                </a>
                <div class="pull-left inline-block dropdown">
                  <a
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    aria-expanded="false"
                    role="button"
                  >
                    <i class="zmdi zmdi-more-vert"></i>
                  </a>
                  <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                    <li role="presentation">
                      <a href="javascript:void(0)" role="menuitem">
                        <i class="icon wb-reply" aria-hidden="true"></i>Edit
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="javascript:void(0)" role="menuitem">
                        <i class="icon wb-share" aria-hidden="true"></i>Delete
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="javascript:void(0)" role="menuitem">
                        <i class="icon wb-trash" aria-hidden="true"></i>New
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>

            <div class="panel-wrapper collapse in">
              <div class="panel-body">
                <div id="morris_donut_chart" class="morris-chart donut-chart"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
          <div class="panel panel-default card-view">
            <div class="panel-heading">
              <div class="pull-left">
                <h6 class="panel-title txt-dark">Balance History</h6>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="panel-wrapper collapse in">
              <div id="morris_extra_bar_chart" class="morris-chart"></div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- /Row -->
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data: function() {
    return {
      isLoading: true
    };
  },
  mounted: function() {
    setTimeout(() => {
      this.isLoading = false;
      setTimeout(() => {
        morisDonut();
        morisArea();
      }, 20);
    }, 1000);
  }
};

function morisDonut() {
  Morris.Donut({
    element: "morris_donut_chart",
    data: [
      {
        label: "Personal",
        value: 1865
      },
      {
        label: "Work",
        value: 6032
      }
    ],
    colors: ["#2196F3", "#8BC34A"],
    resize: true,
    labelColor: "#878787"
  });
}

function morisArea() {
  Morris.Area({
    element: "morris_extra_bar_chart",
    data: [
      {
        period: "2019-01-30",
        personal: 0,
        work: 1430
      },
      {
        period: "2019-02-10",
        personal: 0,
        work: 1444
      },
      {
        period: "2019-02-20",
        personal: 0,
        work: 1473
      },
      {
        period: "2019-02-30",
        personal: 0,
        work: 1983
      },
      {
        period: "2019-03-10",
        personal: 1000,
        work: 2042
      },
      {
        period: "2019-03-20",
        personal: 1030,
        work: 2062
      },
      {
        period: "2019-03-30",
        personal: 1081,
        work: 2124
      },
      {
        period: "2019-04-10",
        personal: 1103,
        work: 2646
      },
      {
        period: "2019-04-20",
        personal: 1169,
        work: 2698
      },
      {
        period: "2019-04-30",
        personal: 2189,
        work: 2725
      },
      {
        period: "2019-05-10",
        personal: 2254,
        work: 3235
      },
      {
        period: "2019-05-20",
        personal: 2277,
        work: 3246
      },
      {
        period: "2019-05-30",
        personal: 2049,
        work: 3261
      },
      {
        period: "2019-06-10",
        personal: 2172,
        work: 3766
      },
      {
        period: "2019-06-20",
        personal: 2281,
        work: 3776
      },
      {
        period: "2019-06-30",
        personal: 1281,
        work: 4281
      },
      {
        period: "2019-07-10",
        personal: 1409,
        work: 4297
      },
      {
        period: "2019-07-20",
        personal: 1451,
        work: 4308
      },
      {
        period: "2019-07-30",
        personal: 1509,
        work: 4313
      },
      {
        period: "2019-08-10",
        personal: 1525,
        work: 4856
      },
      {
        period: "2019-08-20",
        personal: 1570,
        work: 4900
      },
      {
        period: "2019-08-30",
        personal: 1633,
        work: 5410
      },
      {
        period: "2019-09-10",
        personal: 1649,
        work: 5425
      },
      {
        period: "2019-09-20",
        personal: 1567,
        work: 5431
      },
      {
        period: "2019-09-30",
        personal: 1661,
        work: 5951
      },
      {
        period: "2019-10-10",
        personal: 1711,
        work: 5971
      },
      {
        period: "2019-10-20",
        personal: 1865,
        work: 6032
      }
    ],
    xkey: "period",
    ykeys: ["personal", "work"],
    labels: ["Personal", "Work"],
    pointSize: 0,
    lineWidth: 0,
    fillOpacity: 0.6,
    pointStrokeColors: ["#2196F3", "#8BC34A"],
    behaveLikeLine: true,
    grid: false,
    hideHover: "auto",
    lineColors: ["#2196F3", "#8BC34A"],
    resize: true,
    redraw: true,
    smooth: true,
    gridTextColor: "#878787",
    gridTextFamily: "Roboto"
  });
}
</script>