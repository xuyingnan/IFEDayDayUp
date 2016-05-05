/**
 * Created by Paul on 2016/4/21.
 */


;(function (window, document, undefined) {

    var ModalWin = function (options) {
        this.options = options;
        this.init();
        this.show();

    }

    ModalWin.prototype = {
        init: function () {
            var Modalwin = this;
            var options = this.options;
            console.log("init");
            this.modalWin = document.createElement("div");
            this.modalWin_body = document.createElement("div");
            this.modalWin_header = document.createElement("div");
            this.modalWin_content = document.createElement("section");
            this.modalWin_content_p = document.createElement("p");
            this.modalWin_confirm = document.createElement("input");
            this.modalWin_cancel = document.createElement("input");

            this.modalWin.className = "modalWin";
            this.modalWin_body.className = "modalWin-body";
            this.modalWin_header.className = "modalWin-header";
            this.modalWin_content.className = "modalWin-content";
            this.modalWin_confirm.className = "modalWin-confirm";
            this.modalWin_cancel.className = "modalWin-cancel";
            this.modalWin_confirm.type = "button";
            this.modalWin_cancel.type = "button";
            this.modalWin_confirm.value = "确定";
            this.modalWin_cancel.value = "取消";

            this.modalWin.appendChild(this.modalWin_body);
            this.modalWin_body.appendChild(this.modalWin_header);
            this.modalWin_content.appendChild(this.modalWin_content_p);
            this.modalWin_content.appendChild(this.modalWin_confirm);
            this.modalWin_content.appendChild(this.modalWin_cancel);
            this.modalWin_body.appendChild(this.modalWin_content);
            this.modalWin_confirm.addEventListener("click", function () {
                Modalwin.hide();
                Modalwin.confirmFun();
            });
            this.modalWin_cancel.addEventListener("click", function () {
                Modalwin.hide();
                Modalwin.cancelFun();
            });
            this.modalWin.addEventListener("click", function (e) {
                if (e.target == this)
                    Modalwin.hide();
            });
            if (options) {
                if (options.text)
                    this.modalWin_content_p.innerHTML = options.text;
                if (options.title)
                    this.modalWin_header.innerHTML = options.title;
                if (options.theme) {
                    theme = ["success", "info", "warning", "danger"];
                    if (theme.indexOf(options.theme) >= 0) {
                        this.modalWin_header.className += ' ' + options.theme;
                        this.modalWin_body.className += ' ' + options.theme;
                        this.modalWin_confirm.className += ' ' + options.theme;
                        this.modalWin_cancel.className += ' ' + options.theme;
                    }
                }
            }


        },

        show: function () {
            //this.modalWin_content_p.innerHTML = "测试";
            document.body.appendChild(this.modalWin);

        },

        hide: function () {
            document.body.removeChild(this.modalWin);
        },
        confirmFun: function () {
            console.log("prototype confirm");
        },
        cancelFun: function () {
            console.log("prototype cancel");
        }
    }


    window.ModalWin = ModalWin;


})(window, document);