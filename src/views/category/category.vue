<template>
  <div id="catagory">
    <div class="catagory-item" v-for="item in regionTags" @click="toSmallTag(item)">
      <div>
        <img :src="item.icon" alt="">
      </div>
      <div class="item-title">{{item.name}}</div>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
  data(){
    return{
      regionTags:[
        {
          name: '动画',
          icon:require('@/assets/img/category/dong.png'),
          key: 1,
          blocks: [
            { name: '推荐', key: 1 },
            { name: 'MAD·AMV', key: 24 },
            { name: 'MMD·3D', key: 25 },
            { name: '短片·手书·配音', key: 47 },
            { name: '特摄', key: 86 },
            { name: '综合', key: 27 }
          ]
        },
        {
          name: '番剧',
          icon:require('@/assets/img/category/fanju.png'),
          key: 13,
          blocks: [
            { name: '推荐', key: 13 },
            { name: '连载动画', key: 33 },
            { name: '完结动画', key: 32 },
            { name: '资讯', key: 51 },
            { name: '官方延伸', key: 152 }
          ]
        },
        {
          name: '国创',
          icon:require('@/assets/img/category/guochuang.png'),
          key: 167,
          blocks: [
            { name: '推荐', key: 167 },
            { name: '国产动画', key: 153 },
            { name: '国产原创相关', key: 168 },
            { name: '布袋戏', key: 169 },
            { name: '动态漫·广播剧', key: 195 },
            { name: '资讯', key: 170 }
          ]
        },
        {
          name: '音乐',
          icon:require('@/assets/img/category/yinle.png'),
          key: 3,
          blocks: [
            { name: '推荐', key: 3 },
            { name: '原创音乐', key: 28 },
            { name: '翻唱', key: 31 },
            { name: 'VOCALOID·UTAU', key: 30 },
            { name: '电音', key: 194 },
            { name: '演奏', key: 59 },
            { name: 'MV', key: 193 },
            { name: '音乐现场', key: 29 },
            { name: '音乐综合', key: 130 }
          ]
        },
        {
          name: '舞蹈',
          icon:require('@/assets/img/category/wudao.png'),
          key: 129,
          blocks: [
            { name: '推荐', key: 129 },
            { name: '宅舞', key: 20 },
            { name: '街舞', key: 198 },
            { name: '明星舞蹈', key: 199 },
            { name: '中国舞', key: 200 },
            { name: '舞蹈综合', key: 154 },
            { name: '舞蹈教程', key: 156 }
          ]
        },
        {
          name: '游戏',
          icon:require('@/assets/img/category/youxi.png'),
          key: 4,
          blocks: [
            { name: '推荐', key: 4 },
            { name: '单机游戏', key: 17 },
            { name: '电子竞技', key: 171 },
            { name: '手机游戏', key: 172 },
            { name: '网络游戏', key: 65 },
            { name: '桌游棋牌', key: 173 },
            { name: 'GMV', key: 121 },
            { name: '音游', key: 136 },
            { name: 'Mugen', key: 19 }
          ]
        },
        {
          name: '科技',
          icon:require('@/assets/img/category/donghua.png'),
          key: 36,
          blocks: [
            { name: '推荐', key: 36 },
            { name: '科学科普', key: 201 },
            { name: '社科人文', key: 124 },
            { name: '野生技术协会', key: 122 },
            { name: '演讲·公开课', key: 39 },
            { name: '星海', key: 96 },
            { name: '机械', key: 98 },
            { name: '汽车', key: 176 }
          ]
        },
        {
          name: '数码',
          icon:require('@/assets/img/category/shuma.png'),
          key: 188,
          blocks: [
            { name: '推荐', key: 188 },
            { name: '手机平板', key: 95 },
            { name: '电脑装机', key: 189 },
            { name: '摄影摄像', key: 190 },
            { name: '影音智能', key: 191 }
          ]
        },
        {
          name: '生活',
          icon:require('@/assets/img/category/shenghuo.png'),
          key: 160,
          blocks: [
            { name: '推荐', key: 160 },
            { name: '搞笑', key: 138 },
            { name: '日常', key: 21 },
            { name: '美食圈', key: 76 },
            { name: '动物圈', key: 75 },
            { name: '手工', key: 161 },
            { name: '绘画', key: 162 },
            { name: '运动', key: 163 },
            { name: '其他', key: 174 }
          ]
        },
        {
          name: '鬼畜',
          icon:require('@/assets/img/category/guixu.png'),
          key: 119,
          blocks: [
            { name: '推荐', key: 119 },
            { name: '鬼畜调教', key: 22 },
            { name: '音MAD', key: 26 },
            { name: '人力VOCALOID', key: 126 },
            { name: '教程演示', key: 127 }
          ]
        },
        {
          name: '时尚',
          icon:require('@/assets/img/category/shishang.png'),
          key: 155,
          blocks: [
            { name: '推荐', key: 155 },
            { name: '美妆', key: 157 },
            { name: '服饰', key: 158 },
            { name: '健身', key: 164 },
            { name: 'T台', key: 159 },
            { name: '风尚标', key: 192 }
          ]
        },
        {
          name: '娱乐',
          icon:require('@/assets/img/category/yule.png'),
          key: 5,
          blocks: [
            { name: '推荐', key: 5 },
            { name: '综艺', key: 71 },
            { name: '明星', key: 137 },
            { name: 'Korea相关', key: 131 }
          ]
        },
        {
          name: '影视',
          icon:require('@/assets/img/category/yingshi.png'),
          key: 181,
          blocks: [
            { name: '推荐', key: 181 },
            { name: '影视杂谈', key: 182 },
            { name: '影视剪辑', key: 183 },
            { name: '短片', key: 85 },
            { name: '预告·资讯', key: 184 }
          ]
        },
        {
          name: '广告',
          icon:require('@/assets/img/category/guanggao.png'),
          key: 165,
          blocks: [
            { name: '推荐', key: 165 }
          ]
        },
        {
          name: '纪录片',
          icon:require('@/assets/img/category/jilupian.png'),
          key: 177,
          blocks: [
            { name: '推荐', key: 177 },
            { name: '人文·历史', key: 37 },
            { name: '科学·探索·自然', key: 178 },
            { name: '军事', key: 179 },
            { name: '社会·美食·旅行', key: 180 }
          ]
        },
        {
          name: '电影',
          icon:require('@/assets/img/category/dianying.png'),
          key: 23,
          blocks: [
            { name: '推荐', key: 23 },
            { name: '华语电影', key: 147 },
            { name: '欧美电影', key: 145 },
            { name: '日本电影', key: 146 },
            { name: '其他国家', key: 83 }
          ]
        },
        {
          name: '电视剧',
          icon:require('@/assets/img/category/dianshiju.png'),
          key: 11,
          blocks: [
            { name: '推荐', key: 11 },
            { name: '国产剧', key: 185 },
            { name: '海外剧', key: 187 }
          ]
        }
      ]
    }
  },
  created(){
    
  },
  methods:{
    toSmallTag(item){
      this.$router.push({
                path:'/smallTags/',
                query:{
                  data:JSON.stringify(item)
                }}).catch(err => err)
    }
  }
}
</script>

<style scoped>
  #catagory{
    display: flex;
    flex-wrap:wrap;
  }
  .catagory-item{
    display: flex;
    min-width: 25%;
    flex-direction:column;
    align-items: center;
    justify-items: center;
    margin: 1rem 0;
  }
  .catagory-item img{
    width: 2.5rem;
    height: 2.5rem;
  }
</style>