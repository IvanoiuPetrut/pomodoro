<template>
  <img src="../assets/img/tree.png" alt="tree" />
  <div>
    <Renderer>
      <Camera :position="{ z: 10 }" />
      <Scene>
        <GltfModel :src="getImgPath('mc')" @load="onReady" />
      </Scene>
    </Renderer>
  </div>
</template>

<script lang="ts">
import { Camera, Renderer, Scene, GltfModel } from "troisjs";
export default {
  components: { Camera, Renderer, Scene, GltfModel },

  setup() {
    const onReady = (model: unknown) => {
      console.log(model);
    };

    const getImgPath = (pic: string) => {
      // return require(`../assets/img/${pic}.gltf`);
      return `../assets/img/${pic}.gltf`;
      // return require(`!!raw-loader!../assets/img/${pic}.gltf`);
      // return import(`../assets/img/${pic}.gltf`);
    };

    return {
      onReady,
      getImgPath,
    };
  },
};
</script>

<style lang=""></style>
