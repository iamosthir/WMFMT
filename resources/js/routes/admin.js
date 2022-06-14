
import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

const prefix = "/admin/";

const router  = new VueRouter({
    mode: "history",
    linkExactActiveClass: "active",
    linkActiveClass: "active",
    routes: [
        {
            path: prefix+"home",
            name:"dashboard",
            component: ()=>import("../components/admin/Dashboard.vue"),
            meta: {
                title: "Dashboard"
            }
        },

        {
            path: prefix+"add-machine-details",
            name: "add-machine",
            component: () => import("../components/admin/NewMachine.vue"),
            meta: {
                title: "Add new machine data"
            }
        },

        {
            path: prefix+"listed-machine",
            name: "list-machine",
            component: () => import("../components/admin/ListMachine/Container.vue"),
            redirect: {
                name: "machine.all-list"
            },
            children: [
                {
                    path: "all-list",
                    name: "machine.all-list",
                    component: () => import("../components/admin/ListMachine/AllList.vue"),
                    meta: {
                        title: "Machine list"
                    }
                },

                {
                    path: "edit-machine/:id",
                    name: "machine.edit",
                    component: () => import("../components/admin/ListMachine/Edit.vue"),
                    meta: {
                        title : "Edit Machine"
                    }
                },

                {
                    path: "view-machine-info/:id",
                    name: "machine.info",
                    component: () => import("../components/admin/ListMachine/Info.vue"),
                    meta : {
                        title : "Machine Info"
                    }
                },

                {
                    path: "add-service-record/:machineId",
                    name: "machine.service-record.add",
                    component: ()=>import("../components/admin/ListMachine/AddServiceRecord.vue"),
                    meta : {
                        title: "Add Service History"
                    }
                },

                {
                    path: "service-history/machineId=:machineId/serviceId=:serviceId",
                    name: "machine.serviceHistory",
                    component: ()=>import("../components/admin/ListMachine/ServiceDetails.vue"),
                    meta: {
                        title : "Service Details"
                    }
                },

                {
                    path: "service-history/edit/machineId=:machineId/serviceId=:serviceId",
                    name: "machine.edit-service",
                    component: ()=>import("../components/admin/ListMachine/EditServiceRecord.vue"),
                    meta: {
                        title: "Edit Service Details"
                    }
                }
            ]

        },
        


        // ########### Admin #################
        {
            path: prefix + "my-profile",
            name: "profile",
            component: () => import("../components/admin/user/MyProfile.vue"),
            meta: {
                title: "My Profile"
            }
        },
        {
            path: prefix + "admin-list",
            name: "admin-list",
            component: () => import("../components/admin/user/AdminList.vue"),
            meta: {
                title: "Admin Lists"
            }
        },

        {
            path: prefix + "new-admin",
            name: "admin-new",
            component: () => import("../components/admin/user/CreateAdmin.vue"),
            meta: {
                title: "Create admin"
            }
        },
        {
            path: prefix + "edit-admin/:adminId",
            name: "admin-edit",
            component: () => import("../components/admin/user/EditAdmin.vue"),
            meta: {
                title: "Edit admin"
            }
        },
        {
            path: prefix+"recent-service-histories",
            name: "recent-service",
            component: () => import("../components/admin/RecentHistory.vue"),
            meta: {
                title: "Recent Service Histories"
            }
        },
        // #######################################

        {
            path: prefix + "parts-requests",
            name: "parts-request",
            component: ()=>import("../components/admin/parts/PartsRequest.vue"),
            meta: {
                title: "Parts components"
            }
        },
        {
            path: prefix+"add-parts/service/:serviceId",
            name: "add-parts",
            component: ()=>import("../components/admin/parts/AddParts.vue"),
            meta : {
                title: "Add parts data"
            }
        },
        {
            path: prefix + "parts-list",
            name: "parts-list",
            component: ()=>import("../components/admin/parts/AllList.vue"),
            meta : {
                title: "All parts list"
            }
        },
        {
            path: prefix + "edit-part-info/part-id/:partId",
            name: "edit-part",
            component: ()=>import("../components/admin/parts/EditPart.vue"),
            meta : {
                title : "Edit part data"
            }
        },
        {
            path: prefix+"machine-not-found/:label",
            name: "machine-not-found",
            component: ()=>import("../components/admin/MachineNotFound.vue"),
            meta: {
                title: "Machine not found"
            }
        },

        // Customer mangae
        {
            path: prefix + "customers",
            name: "customer.list",
            component: ()=>import("../components/admin/customer/List.vue"),
            meta: {
                title: "Customer List"
            }
        }
    ],

    scrollBehavior(to, from, savedPos) {
        if (savedPos) {
            return savedPos;
        } else {
            return { x: 0, y: 0 };
        }
    }
});


export default router;