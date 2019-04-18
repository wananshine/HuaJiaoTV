// import Vue from 'vue'
// import App from './App'
//import axios from 'axios'
//import VueAxios from 'vue-axios'
import { post, fetch, patch, put } from './http'


// liveList
export const livingList = params =>{   
    
    //return fetch('http://flnet-wap.flnet.cn/flnet_live/liveList', params)
    
    return  fetch('http://flnet-wap.flnet.cn/flnet_live/liveList', params)
            .then(res =>{
                return res;
            }, err =>{
                reject(error)
            }).catch(error =>{
                reject(error)
            });
    
    
//    fetch('http://flnet-wap.flnet.cn/flnet_live/liveList', {})
//        .then(res =>{
//            return res.data;
//        }, err =>{
//            reject(error)
//        }).catch(error =>{
//            reject(error)
//        });
};

//获取LOL直播分类
export const  DBlol = params =>{
    return new Promise((resolve, reject) => {
        fetch('http://api.douyutv.com/api/v1/live/lol', {
            params: params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

//http://open.douyucdn.cn/api/RoomApi/game
export const game = params =>{
    return new Promise( (resolve, reject)=>{
        fetch('http://open.douyucdn.cn/api/RoomApi/game', params)
            .then(res=>{
                resolve(res)
            })
            .catch(err=>{
                reject(err)
            })   
    })
}

//获取热直播
export const hotLiving = params =>{
    return new Promise((resolve, reject) =>{
        fetch('http://api.open.huajiao.com/live/getFeeds?platform=server&tag=video&num=1', { 
            params: params 
        }).then( res => {
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}


//http://api.open.huajiao.com/live/getVideos
export const getFeeds = params =>{
    return new Promise((resolve, reject) =>{
        fetch('http://api.open.huajiao.com/live/getFeeds', { 
            params: params 
        }).then( res => {
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}


export const liveList = params =>{                  // liveList
    return axios.post(defaultUrl+'/flnet_live/liveList', {params: params }).then(res =>{
        return res.data;
    }, err =>{
        reject(error)
    }).catch(error =>{
        reject(error)
    });
};


export const smallVideo = (url,params) =>{                  // smallVideo  http://api.open.huajiao.com/live/getVideos
    return axios.get(url, {params: params }).then(res =>{
        return res.data;
    }, err =>{
        reject(error)
    }).catch(error =>{
        reject(error)
    });
};

//http://api.douyutv.com/api/v1/live/lol
export const lol = params =>{                  // lol
    return axios.get('../api/live/lol', {params: params }).then(res =>{
        return res.data;
    }, err =>{
        reject(error)
    }).catch(error =>{
        reject(error)
    });
};
