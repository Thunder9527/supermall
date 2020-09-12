import Toast from "@/components/common/toast/Toast";


const obj = {}
obj.install = function (Vue) {
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast);

  //2.以new的方式构造一个组件对象
  const toast = new toastContrustor()

  //3.将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  //4.toast.$el 对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = Toast;
}

export default obj
