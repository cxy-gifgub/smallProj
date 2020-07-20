<template>
    <div>
        <tabbar>
            <tabItem path="/home">
                <img slot="item-icon" src="@/assets/img/tabbar/shouye.png" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/shouye_activity.png" alt="">
                <div slot="item-text">首页</div>
                </tabItem>
                <tabItem  path="/category">
                <img slot="item-icon" src="@/assets/img/tabbar/liebiaoxingshi.png" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/liebiaoxingshi_activity.png" alt="">
                <div slot="item-text">分类</div>
                </tabItem>
                <tabItem  path="/cart">
                <img slot="item-icon" src="@/assets/img/tabbar/gouwuche.png" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/gouwuche_activity.png" alt="">
                <div slot="item-text">购物车</div>
                </tabItem>
                <tabItem  path="/profile">
                <img slot="item-icon" src="@/assets/img/tabbar/wode.png" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/wode_activity.png" alt="">
                <div slot="item-text">我的</div>
            </tabItem>
        </tabbar>
    </div>
</template>

<script>
import tabbar from '@/components/common/topbar/topbar';
import tabItem from '@/components/common/topbar/tabBarItem';
export default {
    components:{
        tabbar,
        tabItem
    }
}
</script>

<style>

</style>