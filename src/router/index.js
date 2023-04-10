import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/custom',
    component: Layout,
    redirect: '/custom/customer/list/index',
    name: 'custom',
    meta: { title: '客户管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/customer',
        name: 'customer',
        component: () => import('@/views/custom/customer/index'),
        meta: { title: '客户档案', icon: 'table' },
       
      },
      {
        path: 'customEdit',
        name: 'customEdit',
        hidden:true,
        component: () => import('@/views/custom/customer/edit'),
        meta: { title: '客户档案', icon: 'table' },
       
      },
     
          {
            path: 'thirdParty',
            name: 'thirdParty',
            component: () => import('@/views/custom/thirdParty/index'),
            meta: { title: '第三方客户', icon: 'table' },
          },
          {
            path: 'thirdPartyEdit',
            name: 'thirdPartyEdit',
            hidden:true,
            component: () => import('@/views/custom/thirdParty/edit'),
            meta: { title: '编辑', icon: 'table' },
          }

        ]
      },

  {
    path: '/projectManage',
    component: Layout,
    meta: { title: '项目管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'archives',
        name: 'archives',
        component: () => import('@/views/projectManage/archives/index'),
        meta: { title: '项目档案', icon: 'form' }
      },
      {
        path: 'archivesEdit',
        name: 'archivesEdit',
        hidden:true,
        component: () => import('@/views/projectManage/archives/edit'),
        meta: { title: '项目档案编辑', icon: 'form' }
      },
      {
        path: 'external',
        name: 'external',
        component: () => import('@/views/projectManage/external/index'),
        meta: { title: '外部项目', icon: 'form' }
      },
      {
        path: 'externalEdit',
        name: 'externalEdit',
        hidden:true,
        component: () => import('@/views/projectManage/external/edit'),
        meta: { title: '外部项目编辑', icon: 'form' }
      },
      {
        path: 'country',
        name: 'country',
        component: () => import('@/views/projectManage/country/index'),
        meta: { title: '国家项目', icon: 'form' }
      },
      {
        path: 'countryEdit',
        name: 'countryEdit',
        hidden:true,
        component: () => import('@/views/projectManage/country/edit'),
        meta: { title: '国家项目编辑', icon: 'form' }
      },

      {
        path: 'provincial',
        name: 'provincial',
        component: () => import('@/views/projectManage/provincial/index'),
        meta: { title: '省级项目', icon: 'form' }
      },
      {
        path: 'provincialEdit',
        name: 'provincialEdit',
        hidden:true,
        component: () => import('@/views/projectManage/provincial/edit'),
        meta: { title: '省级项目编辑', icon: 'form' }
      },
      
      
    ]
  },


  {
    path: '/meetings',
    component: Layout,
    meta: { title: '会议管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'meetingArch',
        name: 'meetingArch',
        component: () => import('@/views/meetings/meetingArch'),
        meta: { title: '项目档案', icon: 'form' }
      },
      {
        path: 'analysisReport',
        name: 'analysisReport',
        component: () => import('@/views/meetings/analysisReport'),
        meta: { title: '分析报告', icon: 'form' }
      },
      {
        path: 'case',
        name: 'case',
        component: () => import('@/views/meetings/case'),
        meta: { title: '案例复盘', icon: 'form' }
      }
    ]
  },


  {
    path: '/statistics',
    component: Layout,
    meta: { title: '数据统计表', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'meetingArch',
        name: 'meetingArch',
        component: () => import('@/views/statistics/area'),
        meta: { title: '区域数据', icon: 'form' }
      },
      {
        path: 'intelligence',
        name: 'intelligence',
        component: () => import('@/views/statistics/intelligence'),
        meta: { title: '情报数据', icon: 'form' }
      },
     
    ]
  },




  {
    path: '/roles',
    component: Layout,
    redirect: '/roles/user',
    name: '权限管理',
    meta: {
      title: '权限管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'userManage',
        component: () => import('@/views/roles/userManage'), // Parent router-view
        name: 'userManage',
        meta: { title: '用户管理' },
       
      },
      {
        path: 'roleManage',
        component: () => import('@/views/roles/roleManage'),
        name: 'roleManage',
        meta: { title: '角色管理'}
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
