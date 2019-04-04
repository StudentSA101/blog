<template>
    <div class="container">
        <header class="blog-header py-3">
            <nav class="navbar navbar-expand-lg navbar-light">
                <button 
                    :class="buttonCollapse" type="button" data-toggle="collapse" 
                    data-target="#navbarTogglerDemo" aria-controls="navbarTogglerDemo" 
                    aria-expanded="false" aria-label="Toggle navigation" @click="toggleCollapse()"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div :class="navbarCollapse" id="navbarTogglerDemo">
                    <ul class="navbar-nav m-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blog">Blog</a>
                        </li>
                    </ul>
                    <!-- <form class="form-inline my-2 my-lg-0">
                        <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form> -->
                </div>
            </nav>
            <hr>
        </header>
    </div>
</template>
<script> 
export default {
    data() {
        return {
            home: 'this is the home page',
            buttonCollapse: 'navbar-toggler',
            navbarCollapse: 'collapse navbar-collapse'
        };
    },
    methods: {
        toggleCollapse(){
            if (this.buttonCollapse === 'navbar-toggler') {
                this.buttonCollapse = 'navbar-toggler collapsed';
            } else {
                this.buttonCollapse = 'navbar-toggler';
            }
            if (this.navbarCollapse === 'collapse navbar-collapse') {
                this.navbarCollapse = 'collapse navbar-collapse show';
            } else {
                this.navbarCollapse = 'collapse navbar-collapse';
            }
        }
    },
}
</script>