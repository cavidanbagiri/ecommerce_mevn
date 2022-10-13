
<template>
    <div>

        <nav class="navbar navbar-expand-lg p-0 navbar-light border-bottom">
            <div class="container-fluid">
                <router-link class=" text-xl fw-bold" :to="{name:'Home'}" style="font-style: oblique;">Parfumery
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <!-- Home Router -->
                        <li class="nav-item flex align-items-center">
                            <router-link :to="{name:'Home'}"
                                class="nav-link active text-stone-300 fw-bold text-md px-2">Home
                            </router-link>
                        </li>
                        <!-- Catalog Router -->
                        <li class="nav-item flex align-items-center">
                            <router-link :to="{name:'Catalog'}"
                                class="nav-link active text-stone-300 fw-bold text-md px-2">Catalog</router-link>
                        </li>
                        <li class="nav-item  flex align-items-center">
                            <router-link :to="{name:'Parfumery'}"
                                class="nav-link active text-stone-300 fw-bold text-md px-2">Perfumes
                            </router-link>
                        </li>
                        <li class="nav-item  flex align-items-center">
                            <router-link :to="{name:'Makeup'}"
                                class="nav-link active text-stone-300 fw-bold text-md px-2">Makeup
                            </router-link>
                        </li>
                        <li class="nav-item  flex align-items-center">
                            <router-link :to="{name:'Accessories'}"
                                class="nav-link active text-stone-300 fw-bold text-md px-2">Accessories
                            </router-link>
                        </li>
                        <!-- Category Drowdown -->
                        <li class="nav-item dropdown  flex align-items-center">
                            <a class="nav-link dropdown-toggle  active text-stone-300 fw-bold text-md px-2" href="#"
                                id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                        <input class="form-control ms-2 border border-dark my-1" type="search" placeholder="Brands" aria-label="Search" />
                    </ul>
                    <form class="d-flex align-items-center">

                        <router-link :to="{name:'Catalog'}" class="nav-link active text-stone-300 text-md px-1">
                            
                            <button type="button" class="btn border-none position-relative">
                                <i class="fa-regular fa-user fa-xl" style="color:black"></i>
                            </button>
                            
                        </router-link>

                        <router-link :to="{name:'Catalog'}" class="nav-link active text-stone-300 text-md px-1">
                            
                            <button type="button" class="btn border-none position-relative">
                                <i class="fa-solid fa-bag-shopping fa-xl" style="color:black"></i>
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    1
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button>
                            
                        </router-link>

                        <router-link :to="{name:'Catalog'}" class="nav-link active text-stone-300 text-md px-1">
                            
                            <button type="button" class="btn border-none position-relative">
                                <i class="fa-regular fa-heart fa-xl" style="color:black"></i>
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    1
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button>
                            
                        </router-link>

                        <!-- <router-link :to="{name:'Catalog'}" class="nav-link active text-stone-300 text-md px-2">
                            <span><i class="fa-regular fa-heart fa-xl" style="color:black"></i></span>
                        </router-link> -->
                        
                    </form>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>



</script>
