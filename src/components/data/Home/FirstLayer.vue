<template>
  <div class="overflow">
    <div class="header">
      <div class="flex flex_column">
        <h1>Boiled</h1>
        <h3>no matter how you cook, Yumma has many the recipes</h3>
        <span class="desc"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          libero id voluptate doloremque quaerat vel ipsam qui, culpa odit
          repudiandae Vel.</span
        >
        <button>
          Explore Recipes
          <v-icon name="md-restaurantmenu-round" fill="#fff" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overflow {
  overflow: hidden;
  color: #000;
}
.header {
  background: linear-gradient(rgba(0, 0, 0, 0), #525252), url("@/assets/bg.jpg");
  background-size: cover;
  height: 80vh;
  background-repeat: no-repeat;
  text-align: center;
  padding-top: 8rem;
  -webkit-animation: zoomin 50s ease-in infinite;
  animation: zoomin 50s ease-in infinite;
  transition: all 0.5s ease-in-out;
}
.flex {
  -webkit-animation: zoomout 50s ease-in infinite;
  animation: zoomout 50s ease-in infinite;
  transition: all 0.5s ease-in-out;
}
h1 {
  font-size: 80px;
  margin-bottom: 0;
  color: #ff0000;
}
h3 {
  width: 35%;
  font-size: 40px;
  margin: 1rem 0;
}
.desc {
  width: 40%;
  margin: 0.5rem 0 3rem;
}
button {
  background: #ff0000;
  border-radius: 5px;
  padding: 0.7rem;
}
button:hover {
  background: orange;
  transition: all 0.5s ease-in-out;
  color: #000;
}

@-webkit-keyframes zoomin {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes zoomin {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes zoomout {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.67);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes zoomout {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.67);
  }
  100% {
    transform: scale(1);
  }
}
</style>
