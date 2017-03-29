var app = getApp();
Page({
    data: {
        house:[],
        loadingHide: false,
    },
    onLoad: function() {
        /*function gotoHell(...arg) {
            console.log(arg);
        }

        gotoHell("Jason", "Gan")*/
        var that = this;
        wx.request({  
            url: 'https://jasongan.cn/api/house',//上线的话必须是https，没有appId的本地请求貌似不受影响  
            data: {},  
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
            // header: {}, // 设置请求的 header  
            success: function(res){  
                debugger
                console.log(res.data)  
                that.setData({  
                    house:res.data  
                })  
                that.setData({  
                    loadingHide: true
                }) 
            },  
            fail: function() {  
                // fail  
            },  
            complete: function() {  
                // complete  
            }  
        }) 
    }
});