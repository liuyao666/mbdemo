// const autoprefixer = require('autoprefixer');
// const pxtorem = require('postcss-pxtorem');

module.exports = {
    // lintOnSave:false,
    // css:{
    //     loaderOptions:{
    //         postcss:{
    //             plugins:[
    //                 autoprefixer(),
    //                 pxtorem({
    //                     rootValue:37.5,
    //                     propList:['*']
    //                 })
    //             ]
    //         }
    //     }
    // }
    lintOnSave:false,
   devServer: {
       overlay:{
           warning:false,
           errors:false
       },
},
    css:{
        loaderOptions:{
            css:{},
            postcss:{
                plugins:[
                    require('postcss-px2rem')({
                        //适配375屏幕，设计图750中亮出来的尺寸要/2
                        remUnit:37.5
                    })
                ]
            }
        }
    }
}