import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home'; // ★★★追加★★★
import Test from '@/components/Test';
Vue.use(Router);

export default new Router({
  mode: 'history', // ★★★追加★★★
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    // -----追加ここから-----
    {
      // '/home'に対して、frontend/src/components/ 配下のHome.vueファイルを参照する
      path: '/home',
      name: 'Home',
      component: Home,
    },
    // -----追加ここまで-----
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ],
});
