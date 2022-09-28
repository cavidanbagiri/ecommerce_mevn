
<template>
    <div>

        <nav class="navbar navbar-expand-lg p-0 navbar-light">
            <div class="container-fluid">
                <router-link class=" text-xl fw-bold" :to="{name:'Home'}" style="font-style: oblique;">Parfumery</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <!-- Home Router -->
                        <li class="nav-item">
                            <router-link :to="{name:'Home'}" style="font-family: cursive;" class="nav-link active text-stone-300 fw-bold text-md px-2">Home
                            </router-link>
                        </li>
                        <!-- Category Router -->
                        <li class="nav-item">
                            <router-link :to="{name:'Category'}" style="font-family: cursive;" class="nav-link active text-stone-300 fw-bold text-md px-2">Category</router-link>
                        </li>
                        <!-- Category Drowdown -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle  active text-stone-300 fw-bold text-md px-2" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false"  style="font-family: cursive;" >
                                Brands
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <input class="form-control ms-2 rounded-lg" type="search" placeholder="Search" aria-label="Search"/>
                    </ul>
                    <form class="d-flex align-items-center">
                        <router-link :to="{name:'Category'}" class="nav-link active text-stone-300 text-md px-2">
                            <span><i class="fa-solid fa-cart-shopping fa-xl" style="color:black"></i></span>
                        </router-link>
                        <router-link :to="{name:'Category'}" class="nav-link active text-stone-300 text-md px-2">
                            <span><i class="fa-solid fa-heart fa-xl" style="color:black"></i></span>
                        </router-link>
                    </form>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>



</script>
