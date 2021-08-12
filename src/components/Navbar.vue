<template>
  <div class="navBar">
    <nav class="menu">
      <label for="logo" class="marca">DAvid LeZaMa</label>
      <ul class="menu__items">
        <li class="active__menu">
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
      <button class="btn__menu">
        M-mobile
      </button>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.menu {
  background: #ff0f0f00;
  height: 75px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #00ffff;
  .marca {
    color: #fffafa;
    font-size: 35px;
    padding: 0 80px;
    font-weight: bold;
  }
  .menu__items {
    display: flex;
    list-style: none;
    margin: 30px;
    li {
      border-radius: 8px;
      margin: 0 5px;

      a {
        padding: 7px 13px;
        text-decoration: none;
        font-size: 18px;
        display: block;
        text-transform: uppercase;
        &:hover {
          background: rgba(25, 0, 255, 0.5);
          transition: 0.6s;
        }
      }
    }
  }
  ul.resposive {
    top: 65px;
  }
  .btn__menu {
    color: white;
    background: rgba(25, 0, 255, 0.5);
    margin-right: 30px;
    font-size: 25px;
    cursor: pointer;
    display: none;
  }
}
@media screen and(max-width:952px) {
  .menu {
    .marca {
      font-size: 30px;
      padding-left: 35px;
    }
    li a {
      font-size: 16px;
    }
  }
}
@media screen and(max-width:858px) {
  .menu {
    height: 65px;
    .btn__menu {
      display: inline-flex;
    }
    .menu__items {
      position: fixed;
      width: 100vw;
      height: calc(100% - 65px);
      background: #414141;
      top: -100vh;
      text-align: center;
      transition: all 0.5s;
      flex-direction: column;
      li {
        margin: 30px 0 0;
        line-height: 30px;
      }
      &:hover {
        background: none;
      }
      a {
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        &:hover {
          color: #191919;
        }
      }
    }
    .marca {
      font-size: 25px;
      padding-left: 35px;
    }
  }
}
@media screen and(max-width:858px) and (orientation: landscape) {
  .menu__items {
    li {
      margin: 5px 0 0;
    }
    overflow: scroll;
    height: calc(100% - 65px);
  }
}
</style>
