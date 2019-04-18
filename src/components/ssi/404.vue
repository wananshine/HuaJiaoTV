<template>
    <div class="error">
        <div class="err-img"><img src="https://static.tutsplus.com/assets/sad-computer-f0b2c05e173e8fff9d71ac8d5ccb4ab9.gif" /></div>
        <h3 class="err-txt-lg">Page Not Found</h3>
        <h6 class="err-txt-md">The page you are looking for could not be found.</h6>
        <div class="err-foot1"><img src="http://www.uipixels.com/wp-content/themes/uipixels_2017/assets/static/images/base/footer-bg.png" /></div>
        <div class="err-foot2"><img src="http://www.uipixels.com/wp-content/themes/uipixels_2017/assets/static/images/base/windmill_fan.png" /></div>
    </div>
</template>

<style lang="less" scoped="true">
    @import (reference) url(../../assets/css/base.less);
    .error{
        .all;
        text-align: center;
        .err-img{
            .all;
            margin: 100px auto 10px;
            z-index: 1;
        }
        h3,h6{
            .all;
            margin: 0px;
            z-index: 1;
        }
        .err-txt-lg{
            font-size: 22px;
        }
        .err-txt-md{
            font-size: 16px;
        }
        .err-foot1{
            .all;
            .pof; left: 0px; right: 0px; bottom: 0px;
            img{
                .all;
            }
        }
        .err-foot2{
            .all;
            width: 86px;
            .pof; right: 22%; bottom: 32%;
            img{
            }
        }
    }
</style>
