<template>
  <div class="login-modal" @click.self="closeModal()">
    <div class="modal-body">
      <Form class="login-form">
        <transition appear name="stretch-input">
          <input class="txt-input" placeholder="Your Email Address" type="text" />
        </transition>
        <transition appear name="stretch-input">
          <input class="txt-input" placeholder="Your Password" type="password" />
        </transition>
        <transition appear name="stretch-input">
          <Button @click.prevent="login()" class="login-btn">Login</Button>
        </transition>
      </Form>
    </div>
  </div>
</template>


<script>
import { eventBus } from "../../main"
export default {
  methods: {
    login() {
      this.$router.push('/student/55')
    },
    closeModal() {
      eventBus.openLoginModal(false);
    }
  }
};
</script>

<style scoped>
.login-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000094;
  transition: opacity 1s ease;
}
.modal-body {
  background-color: #fff;
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  opacity: 1;
  width: 40%;
  height: 50%;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  z-index: 999;
}
.login-form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.txt-input {
  z-index: 999;
  border-width: 1px;
  border-radius: 20px;
  width: 80%;
  height: 10%;
  margin: 5%;
  outline: none;
  padding: 5%;
  border-style: solid;
  border-color: rgb(185, 185, 185);
}

.stretch-input-enter-active {
  animation: stretch 1s;
}

.login-btn {
  background: linear-gradient(150deg, #281483 15%, #8f6ed5 70%, #d782d9 94%);
  border-width: 0;
  color: #fff;
  font-weight: bold;
  height: 15%;
  width: 25%;
  border-radius: 200px;
}
.login-btn:focus{
    background: linear-gradient(150deg,#d782d9 10%, #8f6ed5 80%,  #281483 94%);
    transition: background .5s;
    /* transition: background .5s; */
    outline: none;
}

@keyframes stretch {
  0% {
    width: 10%;
  }
  100% {
    transform: scaleX(1);
  }
}
</style>