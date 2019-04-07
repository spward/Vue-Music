<template>
    <div id="current-track">
        <img class="cover" v-if="this.$root.$data.track.album" :src="'https://api.napster.com/imageserver/v2/albums/' + this.$root.$data.track.album  + '/images/500x500.jpg'">
        <img class="cover" v-else src="https://previews.123rf.com/images/tackgalichstudio/tackgalichstudio1405/tackgalichstudio140500025/28036032-question-mark-symbol-on-gray-background.jpg">
        <div class="track__info">
            <div class="track__name">
                {{ this.$root.$data.track.name }}
            </div>

            <div class="track__artists">
                {{ $root.$data.track.artist }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'current-track',
        data () {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>

    #current-track {
        display: flex;
        align-items: center;

        .cover {
            width: 56px;
            min-width: 56px;
            height: 56px;
            margin: 0 15px;
        }

        img {
            width: 100%;
        }

        .track__info {
            position: relative;
            overflow: hidden;
            padding-right: 20px;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .track__name {
            color: #fff;
            font-size: 14px;
        }

        .track__artists {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding: 5px 0;
            font-size: 11px;
        }
    }
</style>