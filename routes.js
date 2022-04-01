/*!

=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import StoreIcon from "@material-ui/icons/Store";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Language from "@material-ui/icons/Language";
import Store from "./assets/img/icon-store.svg";
import Salesdata from "./assets/img/icon-salesdata.svg";
import Ledger from "./assets/img/icon-ledger.svg";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Store",
    icon: Store,

    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Sales Data",
    icon: Salesdata,

    layout: "/admin",
  },
  {
    path: "/table-list",
    name: "Sub Agents",
    icon: Ledger,

    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Analytics",
    icon: Store,

    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Transactions",
    icon: Salesdata,

    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Topup",
    icon: Ledger,

    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Account",
    icon: Store,

    layout: "/admin",
  },
  {
    path: "/rtl-page",
    name: "Agent Manual ",
    icon: Salesdata,

    layout: "/rtl",
  },
];

export default dashboardRoutes;
