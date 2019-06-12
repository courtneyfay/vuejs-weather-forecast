<template>
  <header>
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">VueJS Weather</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/">
              <i class="fa fa-home"></i>
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/forecast">Forecast</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>