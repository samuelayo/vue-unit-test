import { mount } from 'avoriaz';
import Hello from '@/components/Hello';

describe('Hello.vue', () => {
  it('should render correct contents', () => {
   const vm = mount(Hello);
    expect(vm.text())
      .to.equal('Welcome to Your Vue.js App Essential Links Core Docs Forum Gitter Chat Twitter  Docs for This Template Ecosystem vue-router vuex vue-loader awesome-vue')
  })
})