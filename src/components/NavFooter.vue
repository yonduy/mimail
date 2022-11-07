<template>
    <div>
        <div class="footer">
            <div class="footer-logo">
                <img src="./../../public/imgs/logo-footer.png" alt="">
                <p></p>
            </div>
            <div class="footer-link">
                <a href="">yondu主页</a><span>|</span>
                <a href="">Vue全栈课程</a><span>|</span>
                <a href="">React全家桶课程</a><span>|</span>
                <a href="">微信支付专项课程(H5+小程序+Node+Mongo)</a><span>|</span>
            </div>
            <div class="Copyright">span© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'nav-footer'
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
    .footer{
        height: 234px;
        border-top:4px solid $colorA;
        background-color:#333333;
        color:#999999;
        font-size:16px;
        text-align: center;
        .footer-logo{
            margin-top:16px;
            margin-bottom: 31px;
            img{
                width:53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color:#999999;
                display: inline-block;
            }
            span{
                margin:0 10px
            }
            margin-bottom:13px;
        }
        .copyright{
            .domain{
                color:$colorA;
            }
            
        }
    }
</style>