
<template>
    <div>

        <nav class="navbar navbar-expand-lg p-1 navbar-light">
            <div class="container-fluid">
                <router-link :to="{name:'Home'}">Parfumery</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <!-- Home Router -->
                        <li class="nav-item">
                            <router-link :to="{name:'Home'}" class="nav-link active text-stone-300 text-md px-2">Home
                            </router-link>
                        </li>
                        <!-- Category Router -->
                        <li class="nav-item">
                            <router-link :to="{name:'Category'}" class="nav-link active text-stone-300 text-md px-2">Category</router-link>
                        </li>
                        <!-- Brands Dropdown -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
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
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    </form>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>



</script>
