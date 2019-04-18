<template>
	<div class="type-bd">
		<h2 class="type-title">弹唱</h2>
		<ul class="type-list">
			<li class="type-cell" v-for="(type, typeNo) in types" :data-index="typeNo" :key="typeNo">
				<figure class="type-el">
					<figcaption class="el-img"><img :src="type.vertical_src"></figcaption>
					<p class="el-info"><span>{{type.nickname}}</span><span>{{type.online}}</span></p>
					<p class="el-desc"></p>
				</figure>
			</li>
		</ul>
		<mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
	      <mu-list class="type-list">
	          <mu-list-item class="type-cell" v-for="(i, ino) in typeData" :key="ino">
	            <mu-list-item-title>
					<figure class="type-el">
						<figcaption class="el-img"><img :src="i.src"></figcaption>
						<p class="el-info"><span>{{i.nick}}</span><span>{{i.person}}</span></p>
						<p class="el-desc"></p>
					</figure>
	            <!-- {{ino}} Item {{i.nick}}{{i.person}} -->
	        	</mu-list-item-title>
	          </mu-list-item>
	          <!-- <mu-divider /> -->
            </mu-list>
        </mu-load-more>
    </div>
</template>

<script type="text/javascript">
    import {
        DBlol,
        getFeeds,
        hotLiving
    } from '../../../api/api'
    export default {
        components: {

        },
        name: "category",
        data() {
            return {
                num: 0,
                refreshing: false,
                loading: false,
                // text: 'List',
                types: [],
                typeList: [
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/70813d3d1b25f5e0e3488ea26344c366-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/49c1881fab7b1730836330f1209d85f6-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/87529dd53368ecaa44c712f0fe8fffab-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/a29414ad4fb25811adb05029e8df5125-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/73306cf508752abc94290ad9643ee5e9-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/70813d3d1b25f5e0e3488ea26344c366-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/49c1881fab7b1730836330f1209d85f6-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/87529dd53368ecaa44c712f0fe8fffab-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/a29414ad4fb25811adb05029e8df5125-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/73306cf508752abc94290ad9643ee5e9-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/70813d3d1b25f5e0e3488ea26344c366-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/49c1881fab7b1730836330f1209d85f6-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/87529dd53368ecaa44c712f0fe8fffab-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/a29414ad4fb25811adb05029e8df5125-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/73306cf508752abc94290ad9643ee5e9-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/70813d3d1b25f5e0e3488ea26344c366-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/49c1881fab7b1730836330f1209d85f6-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/87529dd53368ecaa44c712f0fe8fffab-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/a29414ad4fb25811adb05029e8df5125-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/73306cf508752abc94290ad9643ee5e9-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/70813d3d1b25f5e0e3488ea26344c366-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/49c1881fab7b1730836330f1209d85f6-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/87529dd53368ecaa44c712f0fe8fffab-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/a29414ad4fb25811adb05029e8df5125-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/73306cf508752abc94290ad9643ee5e9-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/70813d3d1b25f5e0e3488ea26344c366-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/49c1881fab7b1730836330f1209d85f6-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/87529dd53368ecaa44c712f0fe8fffab-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/a29414ad4fb25811adb05029e8df5125-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/73306cf508752abc94290ad9643ee5e9-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/70813d3d1b25f5e0e3488ea26344c366-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/49c1881fab7b1730836330f1209d85f6-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/87529dd53368ecaa44c712f0fe8fffab-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/a29414ad4fb25811adb05029e8df5125-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/73306cf508752abc94290ad9643ee5e9-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/70813d3d1b25f5e0e3488ea26344c366-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/49c1881fab7b1730836330f1209d85f6-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/87529dd53368ecaa44c712f0fe8fffab-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/a29414ad4fb25811adb05029e8df5125-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/73306cf508752abc94290ad9643ee5e9-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/70813d3d1b25f5e0e3488ea26344c366-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/49c1881fab7b1730836330f1209d85f6-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/87529dd53368ecaa44c712f0fe8fffab-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/a29414ad4fb25811adb05029e8df5125-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/73306cf508752abc94290ad9643ee5e9-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/70813d3d1b25f5e0e3488ea26344c366-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/49c1881fab7b1730836330f1209d85f6-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/87529dd53368ecaa44c712f0fe8fffab-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/a29414ad4fb25811adb05029e8df5125-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/73306cf508752abc94290ad9643ee5e9-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/70813d3d1b25f5e0e3488ea26344c366-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/49c1881fab7b1730836330f1209d85f6-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/87529dd53368ecaa44c712f0fe8fffab-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/a29414ad4fb25811adb05029e8df5125-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/73306cf508752abc94290ad9643ee5e9-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/70813d3d1b25f5e0e3488ea26344c366-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/49c1881fab7b1730836330f1209d85f6-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/87529dd53368ecaa44c712f0fe8fffab-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/a29414ad4fb25811adb05029e8df5125-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/73306cf508752abc94290ad9643ee5e9-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "莫森:我不怂就是干"
                    },
                    {
                        "src": "http://image.huajiao.com/91a0e1021dceb53d6f075f532d0e32de-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/ae870a9294d9ec13bea3e04fc325b522-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/70813d3d1b25f5e0e3488ea26344c366-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/49c1881fab7b1730836330f1209d85f6-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/87529dd53368ecaa44c712f0fe8fffab-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/a29414ad4fb25811adb05029e8df5125-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/73306cf508752abc94290ad9643ee5e9-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                    {
                        "src": "http://image.huajiao.com/350ff939991868bac893bcbc27abc15b-320_180.jpg",
                        "nick": "Eyso伊索🔻",
                        "person": "304",
                        "game": "吃鸡",
                        "title": "二七 今天8月2"
                    },
                ]
            }
        },
        computed: {
            typeData() {
                return this.typeList.slice(0, 55 + this.num);
            }
        },
        watch: {

        },
        beforeCreate() {},
        created() {
            const _this = this;
            console.log(_this.$route.params.params)
            
            
            DBlol().then(res=>{
                for(let i of res.data){
                    _this.types.push(i)
                }
//                _this.types = res.data;
                console.log( 'lol:',  res)
            }).catch( err=>{
                console.log('lol:',err)
            })
            
            hotLiving().then(res=>{
                console.log( '花椒热门直播res:',  res)
            }).catch(err=>{
                console.log( '花椒热门直播err:',  err)
            })
            
            getFeeds().then(res=>{
                console.log( '花椒直播res:',  res)
                //http://www.huajiao.com/l/114591677
            }).catch(err=>{
                console.log( '花椒直播err:',  err)
            })
            
            this.$nextTick(function() {
                
            });
        },
        beforeMount() {},
        mounted() {
            const _this = this;
            const params = _this.$router;
            _this.getClientHeight();
            console.log(_this.$route.params.params)
            this.$nextTick(function() {

            })
        },
        beforeUpdate() {},
        updated() {},
        methods: {

            //获取文档高度
            getClientHeight() {
                const bodyH = document.body.clientHeight;
                const docH = document.documentElement.clientHeight;
                console.log("H", bodyH, docH)
            },

            refresh() {
                this.refreshing = true;
                this.$refs.container.scrollTop = 0;
                setTimeout(() => {
                    this.refreshing = false;
                    // this.text = this.text === 'List' ? 'Menu' : 'List';
                    this.num = 10;
                }, 2000)
            },
            load() {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    if (55 + this.num < this.typeList.length) {
                        this.num += 10;
                        console.log(this.num)
                    } else {
                        console.log(this.typeList.length)
                    }
                }, 2000)
            }
        }
    }

</script>

<style lang="less" scoped>
    @import (reference) url(../../../assets/css/base.less);
    .type-bd {
        width: @w2;
        margin: 10px auto;
        width: auto;
        margin: 0 auto;
        .pd-wrap;
        .type-title {
            font-size: 18px;
            margin: 30px 30px 20px;
        }
        .type-list {
            .hid;
            .flexbox;
            justify-content: flex-start;
            flex-wrap: wrap;
            .type-cell {
                .por;
                .hid;
                .flexauto;
                width: 212px;
                margin: 6px;
                cursor: pointer;
                .el-img {
                    img {
                        .all;
                    }
                }
                .el-info {
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                }
                .el-desc {
                    height: 30px;
                    line-height: 30px;
                }
            }
        }
    }


    .mu-item {
        height: auto !important;
        .mu-item-title {
            height: auto !important;
            line-height: auto !important;
        }
    }

</style>
<style lang="less">
    .type-bd {
        .mu-item {
            height: auto !important;
            padding: 0px;
            .mu-item-title {
                height: auto !important;
                line-height: auto !important;
            }
        }
    }

</style>
