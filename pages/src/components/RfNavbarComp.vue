<template>
    <div class="rf-navbar">
        <b-navbar toggleable="lg" :type="navbar.getType()" :variant="navbar.getVariant()">
            <b-navbar-brand href="/">
                <img class="rf-navbar--logo" :src="navbar.getLogo()" alt="Logo">
                {{ navbar.getText() }}
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav v-for="navLink in navbar.getMainNav()" :key="navLink.getId()">
                    <b-nav-item :href="navLink.getUrl()"
                                :target="navLink.getNewTab()?'_blank':'_self'">
                        {{ navLink.getLabel() }}
                    </b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto"
                              v-for="navLink in navbar.getSideNav()" :key="navLink.getId()">
                    <b-nav-item :href="navLink.getUrl()"
                                :target="navLink.getLinkTarget?'_blank':'_self'">
                        {{ navLink.getLabel() }}
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Navbar from '@/models/navbar';

    @Component
    export default class RfNavbarComp extends Vue {
        @Prop({required: true})
        private navbar!: Navbar;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .rf-navbar {
        margin-bottom: 30px;
    }
    .rf-navbar--logo {
        width: 30px;
        margin-right: 15px;
    }
</style>
