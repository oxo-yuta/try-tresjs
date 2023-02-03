<template>
  <TresCanvas>
    <TresPerspectiveCamera
      position="[5, 5, 5]"
    />
    <TresScene>
      <TresMesh position="[-2, 6, 0]">
        <TresTorusGeometry />
        <TresMeshBasicMaterial color="orange" />
      </TresMesh>
    </TresScene>
  </TresCanvas>
</template>


<script>

export default {
  name: 'HomeView',
}
</script>
