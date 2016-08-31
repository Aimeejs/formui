/*!
 * formui For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-08-31
 */

import App from 'app';
import template from 'formui.jade';

class formui extends App {

    constructor() {
        super();
        this.name = 'formui';
        this.template = template;
    }

    onload() {

    }

    // app渲染到页面之前执行，用于预处理渲染内容
    prerender(app) {
        this.createForm()
    }

    // app渲染到页面之后执行，此时app还在内存中，不能获取宽度高度等与尺寸相关的属性
    postrender(app) {
        // app为模块的实例
    }

    // 页面渲染到浏览器后执行，此时可以获取宽高等与尺寸相关的属性
    pagerender(app) {
        // some code
    }

    createForm() {
        var Form = require('form');
        var form = new Form;
        var gender = {
            "Male": "先生",
            "Female": "女士",
            "default": "Male"
        }

        form.load('input').attr({name: 'username'})
        form.load('input').attr({name: 'password', type: 'password'})
        form.load('input').attr({name: 'telphone', type: 'number', placeholder: '请输入手机号'})
        form.load('select').attr({name: 'gender'}).render(gender)
        form.load('slide').attr({name: 'remember'}).config({selected: true}).action()
        form.load('textarea').attr({name: 'remark'})

        // Form控件渲染到.form
        form.render(this.find('.form'))

        // Success
        form.map.username.$.addClass('success')
        form.map.password.$.addClass('error')

        // 获取form数据
        this.find('.form').delegate('.btn-submit', 'click', () => {
            console.log(form.getData())
        })
    }
}

export default formui;
