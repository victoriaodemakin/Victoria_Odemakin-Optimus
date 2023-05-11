/**Name : Vm Module
 * Description: The VM module enables compiling and running code within V8 Virtual Machine contexts.
 * Example: 
 * const util = require('util');
const vm = require('vm');
  
const context = {
  number: 2
};
  
const script = new vm.Script('Type = "Int"; number *= 2;');
  
vm.createContext(context);
  
script.runInContext(context);
  

console.log(context);

  */
