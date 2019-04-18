<template>
    <section class="player-wrap">
        
        <player></player>
        <div>1231</div>
    </section>
    <!-- <Button>12312</Button> -->    
</template>

<script type="text/javascript">
    //import { Button } from '../museUI/museui';
    //import MuseUI from 'muse-ui'
    // import {getPtDetail} from '@/api/api';
    import player from './e/player'
    export default {
        components: {
            player
            // goodsBanner,
        },
        name: "",
        data() {
            return {
                
                product: {
                    products: {
                        tags: []
                    }
                },
                picUrls: [], //把 banner从product中取出来
            }
        },
        computed: {},
        watch: {
            //监听数组
            goodsData: {
                handler: function(newVal) {
                    // console.log(newVal.length)
                    console.log("OOOOOOOOOOOOO",newVal,this.goodsData)
                },
                deep: true
            },
            //监听路由
            '$route' (to, from) {
                // 获取最新的id 调用获取数据方法
                //this.$route.params.goodsId;
                //this.fetchGoodsId()
            }
        },
        beforeCreate() {},
        created() {
            this.$nextTick(function() {
                // var goodsId = this.$route.params.goodsId;
                // this.$http.get('/api/getshot/'+goodsId).then(response=>{
                // 	this.product = response.body.data;
                // 	this.picUrls = response.body.data.products.picUrls;
                // 	console.log('api/getshot/goodsId',this.product);
                // })
                // .catch(err=>{
                // 	console.log('err',err)
                // })
                // var goodsId = this.$route.params.goodsId;
                // getPtDetail(goodsId).then(res=>{
                // 	this.product = res.data;
                // 	this.picUrls = res.data.products.picUrls;

                // }, error=>{
                // }).catch(error=>{
                // });

            });
        },
        beforeMount() {},
        mounted() {
            this.$nextTick(function() {
                this.fetchGoodsId();
            })
        },
        beforeUpdate() {},
        updated() {},
        methods: {
            
            fetchGoodsId() {
                //console.log(this.$route.params.goodsId);
            },
            //立即购买
            nowbuyCustomer(product, e) {
                // this.$router.replace({ path: '/indexCart' })
                // console.log(product, e)
            },
        }
    }

</script>
