import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Student from '@/components/Student'
import Elementtab from '@/components/Elementtab'
import home from '@/components/home'
import Extendrow from '@/components/Extendrow'
import Reportlist from '@/components/Reportlist'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/ff',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'bb',
          name: 'HelloWorld',
          component: HelloWorld
        }]
    },
    {
      path: '/test',
      name: 'Elementtab',
      component: Elementtab,
      children: [
        {
          path: 'fff',
          name: 'Elementtab',
          component: Elementtab
        }]
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'fff',
          name: 'home',
          component: home
        }]
    },
    {
      path: '/student',
      name: 'Student',
      component: Student,
      children: [
        {
          path: 'fff',
          name: 'Student',
          component: Student
        }]
    },
    {
      path: '/extendrow',
      name: 'Extendrow',
      component: Extendrow,
      children: [
        {
          path: 'fff',
          name: 'Extendrow',
          component: Extendrow
        }]
    },
    {
      path: '/rptlist',
      name: 'Reportlist',
      component: Reportlist,
      children: [
        {
          path: 'fff',
          name: 'Reportlist',
          component: Reportlist
        }]
    },
    {
      path: '/xffs',
      name: 'test',
      component: test,
      children: [
        {
          path: 'fff',
          name: 'test',
          component: test
        }]
    }
  ]
})
