import { mount } from 'avoriaz';
import moxios from 'moxios';
import Happy from '@/components/Happy';
window.Promise = require('promise')


describe('Happy.vue', ()=> {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })



  it('should render correct array', done => {

  	moxios.stubRequest('https://restcountries.eu/rest/v2/all', {
      status: 200,
      response: {
        id: 1, owners: [
          { name: 'Test Owner', address: '123 Test St.', ssn: '123-12-1234', ownership_percentage: 100 
          }
        ]
      }
    })
   const vm = mount(Happy);

   moxios.wait(function() {
    	expect(vm.data().them)
        .to.contain('happy one');
        done()
  })    
  })


   it('should have a length of 4', done => {

   	moxios.stubRequest('https://restcountries.eu/rest/v2/all', {
      status: 200,
      response: {
        test: 'test'
      }
    })
   const vm = mount(Happy);

   moxios.wait(function() {
    	expect(vm.data().them.length)
        .to.equal(4);
        done()
  })    


   })



   it('should return a computed data ', done => {

   	
   const vm = mount(Happy);

  
    	expect(vm.computed().computed_first())
        .to.equal('happy');
        done();
   


   })


   it('should have a length of 5 computed ', done => {

   	moxios.stubRequest('https://restcountries.eu/rest/v2/all', {
      status: 200,
      response: {
        test: 'test'
      }
    })
   const app = mount(Happy);

   moxios.wait(function() {
    	expect(app.vm.all_of_them)
        .to.contain('computed_one');
        done()
  })    


   })
})