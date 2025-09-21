import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "alert",
        loadChildren: () =>
          import("../alert/alert.module").then((m) => m.AlertPageModule),
      },
      {
        path: "avatar",
        loadChildren: () =>
          import("../avatar/avatar.module").then((m) => m.AvatarPageModule),
      },
      {
        path: "card",
        loadChildren: () =>
          import("../card/card.module").then((m) => m.CardPageModule),
      },
      {
        path: "",
        redirectTo: "alert",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "alert",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
