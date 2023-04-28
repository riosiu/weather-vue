<template>
  <transition name="modal-outer">
    <div
    v-show="activeModal"
    class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
  >
    <transition name="modal-inner">
        <div class="p-4 bg-white self-start mt-32 max-w-screen-md">
      <slot />
      <button
        class="cursor-pointer text-white mt-8 bg-weather-primary px-6 py-2" @click="$emit('closeModal')"
      >
        Close
      </button>
    </div>
    </transition>
  </div>
  </transition>
</template>

<script setup >
defineEmits(["closeModal"]);
defineProps({
  activeModal: {
    type: Boolean,
    default: false,
  },
});
</script>

<style  scoped>
.modal-outer-enter-active{
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02 ) 0.15s;
}
.modal-outer-leave-active{
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02 );
}
.modal-outer-leave-active{
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02 );
}

.modal-outer-enter-from, .modal-outer-leave-to{
    opacity: 0;
    transform: scale(0.8);
}


</style>
