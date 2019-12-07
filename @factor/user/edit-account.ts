import { pushToFilter, addPostType } from "@factor/tools"
import { Component } from "vue"

export const setup = (): void => {
  pushToFilter("dashboard-routes", {
    path: "account",
    component: () => import("./v-account.vue"),
    meta: {
      postType: "user"
    }
  })

  pushToFilter("dashboard-menu", {
    group: "account",
    path: "account",
    name: "Your Account",
    icon: require("./img/users.svg")
  })

  addPostType({
    postType: "user",
    icon: require("./img/users.svg"),
    nameIndex: "Users",
    nameSingle: "User",
    namePlural: "Users",
    listTemplate: (): Promise<Component> => import("./v-list.vue"),
    editTemplate: (): Promise<Component> => import("./v-edit.vue"),
    baseRoute: "@",
    accessLevel: 500,
    add: false
  })
}
setup()