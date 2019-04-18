<template>
    <section class="rank-wrap">
    	<div class="rank-layer">

    		<!-- 主播 -->
    		<!-- <anchor class="rank-col rank-anchor"></anchor> -->
    		
	    	<!-- 阳光榜 -->
	    	<!-- <sunshine class="rank-col rank-sunshine"></sunshine> -->

	    	<!-- 贡献榜 -->
	    	<!-- <contribute class="rank-col rank-contr"></contribute> -->

	    	<!-- ************************************************ -->

			<!-- 主播 -->
			<rank-list class="rank-col" :rank-object ='anchorRank'></rank-list>

			<!-- 阳光榜 -->
			<rank-list class="rank-col" :rank-object ='sunshineRank'></rank-list>

			<!-- 贡献榜 -->
			<rank-list class="rank-col" :rank-object ='contributeRank'></rank-list>

    	</div>
    	<slidebar-left></slidebar-left>
    </section>
</template>

<script type="text/javascript">
    import slidebarLeft from '../ssi/sidebarLeft' //左侧栏

    import anchor from './e/anchor' //主播
    import sunshine from './e/sunshine' //阳光榜
    import contribute from './e/contribute' //贡献榜

    import rankList from './e/rankList' //

    export default {
        components: {
            slidebarLeft,
            anchor,
            sunshine,
            contribute,
            rankList
        },
        name: "rank",
        data() {
            return {
                anchorRank: {
                    rankTitle: "主播",
                    dayList: [{
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "气质👑朵妃👄ฅ(≚ᄌ≚)🧚‍♀️DF",
                            "level": "3",
                            "coin": "99999999"
                        },
                        {
                            "src": "http://image.huajiao.com/08e76729da0e7c34f67e6e02e12e9c8c-100_100.jpg",
                            "nick": "司曼^O^",
                            "level": "8",
                            "coin": "8888888"
                        },
                        {
                            "src": "http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg",
                            "nick": "艾歆然Olivia",
                            "level": "12",
                            "coin": "7777777"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "心有林夕⛱️Cc",
                            "level": "12",
                            "coin": "6666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "诺诺Milk🍥",
                            "level": "16",
                            "coin": "12656464"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "_兔妹妹",
                            "level": "22",
                            "coin": "66666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "29",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "33",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "38",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "45",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "50",
                            "coin": "555555"
                        }
                    ],
                    weekdayList: [{
                            "src": "http://image.huajiao.com/0a489c53bc1f7438eedae61963a2edc1-100_100.jpg",
                            "nick": "九千胜大人",
                            "level": "3",
                            "coin": "99999999"
                        },
                        {
                            "src": "http://image.huajiao.com/08e76729da0e7c34f67e6e02e12e9c8c-100_100.jpg",
                            "nick": "司曼^O^",
                            "level": "8",
                            "coin": "8888888"
                        },
                        {
                            "src": "http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg",
                            "nick": "艾歆然Olivia",
                            "level": "12",
                            "coin": "7777777"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "心有林夕⛱️Cc",
                            "level": "12",
                            "coin": "6666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "诺诺Milk🍥",
                            "level": "16",
                            "coin": "12656464"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "_兔妹妹",
                            "level": "22",
                            "coin": "66666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "29",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "33",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "38",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "45",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "50",
                            "coin": "555555"
                        }
                    ],
                    totalList: [{
                            "src": "http://image.huajiao.com/37cdf16d461fad3d2e5a921d7e6bda68-100_100.jpg",
                            "nick": "大祭司",
                            "level": "3",
                            "coin": "99999999"
                        },
                        {
                            "src": "http://image.huajiao.com/08e76729da0e7c34f67e6e02e12e9c8c-100_100.jpg",
                            "nick": "司曼^O^",
                            "level": "8",
                            "coin": "8888888"
                        },
                        {
                            "src": "http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg",
                            "nick": "艾歆然Olivia",
                            "level": "12",
                            "coin": "7777777"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "心有林夕⛱️Cc",
                            "level": "12",
                            "coin": "6666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "诺诺Milk🍥",
                            "level": "16",
                            "coin": "12656464"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "_兔妹妹",
                            "level": "22",
                            "coin": "66666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "29",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "33",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "38",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "45",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "50",
                            "coin": "555555"
                        }
                    ]
                },
                sunshineRank: {
                    rankTitle: "阳光榜",
                    dayList: [{
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "气质👑朵妃👄ฅ(≚ᄌ≚)🧚‍♀️DF",
                            "level": "3",
                            "coin": "99999999"
                        },
                        {
                            "src": "http://image.huajiao.com/08e76729da0e7c34f67e6e02e12e9c8c-100_100.jpg",
                            "nick": "司曼^O^",
                            "level": "8",
                            "coin": "8888888"
                        },
                        {
                            "src": "http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg",
                            "nick": "艾歆然Olivia",
                            "level": "12",
                            "coin": "7777777"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "心有林夕⛱️Cc",
                            "level": "12",
                            "coin": "6666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "诺诺Milk🍥",
                            "level": "16",
                            "coin": "12656464"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "_兔妹妹",
                            "level": "22",
                            "coin": "66666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "29",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "33",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "38",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "45",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "50",
                            "coin": "555555"
                        }
                    ],
                    weekdayList: [{
                            "src": "http://image.huajiao.com/0a489c53bc1f7438eedae61963a2edc1-100_100.jpg",
                            "nick": "九千胜大人",
                            "level": "3",
                            "coin": "99999999"
                        },
                        {
                            "src": "http://image.huajiao.com/08e76729da0e7c34f67e6e02e12e9c8c-100_100.jpg",
                            "nick": "司曼^O^",
                            "level": "8",
                            "coin": "8888888"
                        },
                        {
                            "src": "http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg",
                            "nick": "艾歆然Olivia",
                            "level": "12",
                            "coin": "7777777"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "心有林夕⛱️Cc",
                            "level": "12",
                            "coin": "6666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "诺诺Milk🍥",
                            "level": "16",
                            "coin": "12656464"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "_兔妹妹",
                            "level": "22",
                            "coin": "66666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "29",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "33",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "38",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "45",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "50",
                            "coin": "555555"
                        }
                    ],
                    totalList: [{
                            "src": "http://image.huajiao.com/37cdf16d461fad3d2e5a921d7e6bda68-100_100.jpg",
                            "nick": "大祭司",
                            "level": "3",
                            "coin": "99999999"
                        },
                        {
                            "src": "http://image.huajiao.com/08e76729da0e7c34f67e6e02e12e9c8c-100_100.jpg",
                            "nick": "司曼^O^",
                            "level": "8",
                            "coin": "8888888"
                        },
                        {
                            "src": "http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg",
                            "nick": "艾歆然Olivia",
                            "level": "12",
                            "coin": "7777777"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "心有林夕⛱️Cc",
                            "level": "12",
                            "coin": "6666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "诺诺Milk🍥",
                            "level": "16",
                            "coin": "12656464"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "_兔妹妹",
                            "level": "22",
                            "coin": "66666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "29",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "33",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "38",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "45",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "50",
                            "coin": "555555"
                        }
                    ]
                },
                contributeRank: {
                    rankTitle: "贡献榜",
                    dayList: [{
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "气质👑朵妃👄ฅ(≚ᄌ≚)🧚‍♀️DF",
                            "level": "3",
                            "coin": "99999999"
                        },
                        {
                            "src": "http://image.huajiao.com/08e76729da0e7c34f67e6e02e12e9c8c-100_100.jpg",
                            "nick": "司曼^O^",
                            "level": "8",
                            "coin": "8888888"
                        },
                        {
                            "src": "http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg",
                            "nick": "艾歆然Olivia",
                            "level": "12",
                            "coin": "7777777"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "心有林夕⛱️Cc",
                            "level": "12",
                            "coin": "6666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "诺诺Milk🍥",
                            "level": "16",
                            "coin": "12656464"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "_兔妹妹",
                            "level": "22",
                            "coin": "66666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "29",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "33",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "38",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "45",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "50",
                            "coin": "555555"
                        }
                    ],
                    weekdayList: [{
                            "src": "http://image.huajiao.com/0a489c53bc1f7438eedae61963a2edc1-100_100.jpg",
                            "nick": "九千胜大人",
                            "level": "3",
                            "coin": "99999999"
                        },
                        {
                            "src": "http://image.huajiao.com/08e76729da0e7c34f67e6e02e12e9c8c-100_100.jpg",
                            "nick": "司曼^O^",
                            "level": "8",
                            "coin": "8888888"
                        },
                        {
                            "src": "http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg",
                            "nick": "艾歆然Olivia",
                            "level": "12",
                            "coin": "7777777"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "心有林夕⛱️Cc",
                            "level": "12",
                            "coin": "6666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "诺诺Milk🍥",
                            "level": "16",
                            "coin": "12656464"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "_兔妹妹",
                            "level": "22",
                            "coin": "66666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "29",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "33",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "38",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "45",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "50",
                            "coin": "555555"
                        }
                    ],
                    totalList: [{
                            "src": "http://image.huajiao.com/37cdf16d461fad3d2e5a921d7e6bda68-100_100.jpg",
                            "nick": "大祭司",
                            "level": "3",
                            "coin": "99999999"
                        },
                        {
                            "src": "http://image.huajiao.com/08e76729da0e7c34f67e6e02e12e9c8c-100_100.jpg",
                            "nick": "司曼^O^",
                            "level": "8",
                            "coin": "8888888"
                        },
                        {
                            "src": "http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg",
                            "nick": "艾歆然Olivia",
                            "level": "12",
                            "coin": "7777777"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "心有林夕⛱️Cc",
                            "level": "12",
                            "coin": "6666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "诺诺Milk🍥",
                            "level": "16",
                            "coin": "12656464"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "_兔妹妹",
                            "level": "22",
                            "coin": "66666"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "29",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "33",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "38",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "45",
                            "coin": "555555"
                        },
                        {
                            "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                            "nick": "小白zoe",
                            "level": "50",
                            "coin": "555555"
                        }
                    ]
                }
            }
        },
        computed: {},
        watch: {},
        beforeCreate() {},
        created() {
            this.$nextTick(function() {

            });
        },
        beforeMount() {},
        mounted() {
            this.$nextTick(function() {})
        },
        beforeUpdate() {},
        updated() {},
        methods: {}
    }

</script>


<style lang="less" scoped>
    @import (reference) url(../../assets/css/base.less);

    .rank-wrap {
        .all;
        .rank-layer {
            .all;
            .clearfix;
            .flexbox;
            align-items: flex-start;
            margin-bottom: 26px;
            width: @w2;
            .rank-col {
                .clearfix;
                .flexauto;
                width: 32%;
            }
            .rank-anchor {}
            .rank-sunshine {}
            .rank-contr {}
        }
    }

</style>
<style lang="less" scoped>
    @import (reference) url(../../assets/css/base.less);
    @import "../../assets/css/level.css";
    .rank-title {
        background-color: @f8f8;
        padding: 32px 0 12px;
        color: @333;
        text-align: left;
    }

    ._r-list {
        .all;
        background: @fff;
        .rank-cell {
            .all;
            a {
                .all;
                display: block;
            }
            .first-el {
                .avatar-headimg {
                    .por;
                    .hid;
                    margin: 20px auto 0;
                    position: relative;
                    width: 256px;
                    height: 108px;
                    text-align: center; // background-image: url("https://p2.ssl.qhimg.com/d/inn/80893f57/no1.png"); 
                    background-position: center;
                    background-repeat: no-repeat;
                    -webkit-background-size: cover;
                    background-size: cover;
                    .head-pic {
                        // .hid;
                        // .colCenter;
                        left: 52%;
                        top: 52%;
                        display: block;
                        width: 90px;
                        height: 90px;
                        border-radius: 50px;
                    }
                    img {
                        .all;
                        .colCenter;
                    }
                }
                .nick-name {
                    .ellipsis;
                    text-align: center;
                    line-height: 48px;
                }
                .level-number {
                    width: 32px;
                    height: 19px;
                    line-height: 16px;
                    font-size: 10px;
                    padding-left: 10px;
                    color: #fff;
                    margin-top: 16px;
                    display: inline-block;
                }
                .get-coin {
                    .ellipsis;
                    color: @999;
                    text-align: center;
                    font-size: 12px;
                    padding-bottom: 20px;
                }
            }
            .second-el {
                .all;
                padding: 10px 10px 10px 0;
                border-top: 1px solid #eee;
                height: 48px;
                display: table;
                .avatar-headimg {
                    .por;
                    .hid;
                    width: 54px;
                    height: 48px;
                    line-height: 48px;
                    text-align: center;
                    margin-right: 12px;
                    img {
                        .all;
                        .colCenter;
                    }
                    .head-pic {
                        display: block;
                        width: 40px;
                        height: 40px;
                        left: 56%;
                        top: 56%;
                        border-radius: 50px;
                    }
                }
                .nick-name {
                    .ellipsis;
                    max-width: 180px;
                    line-height: 48px;
                    font-size: 14px;
                    color: @333;
                    float: left;
                    margin-right: 12px;
                }
                .level-number {
                    width: 32px;
                    height: 16px;
                    line-height: 16px;
                    font-size: 10px;
                    padding-left: 15px;
                    color: @fff;
                    margin-top: 16px;
                }
                .get-coin {
                    .ellipsis;
                    max-width: 180px;
                    line-height: 48px;
                    font-size: 14px;
                    color: @999;
                    float: right;
                }
                div {
                    vertical-align: middle;
                    display: table-cell;
                    float: left;
                    .cell-txt {
                        margin-right: 10px;
                        display: inline-block;

                    }
                }
            }
            .third-el {
                .second-el;
            }
            .cell-el {
                .second-el;
            }
        }
    }

    .anchor-list {
        .rank-list {
            ._r-list;
        }
    }

    .sunshine-list {
        .rank-list {
            ._r-list;
        }
    }


    .contri-list {
        .rank-list {
            ._r-list;
        }
    }

    .demo-text {
        padding: 16px;
        background: #fff;
        p {
            margin: 8px 0;
        }
    }

</style>
