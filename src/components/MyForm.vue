<template>
  <div class="container p-5">
    <form @submit.prevent="enviarFormulario">
      <div class="row g-3">
        <div class="col">
          <input
            v-model="producto.nombre"
            type="text"
            class="form-control"
            placeholder="Nombre"
            aria-label="First name"
            :class="{ 'is-invalid': error && nombreInvalido }"
          />
        </div>
        <div class="col">
          <input
            v-model="producto.descripcion"
            type="text"
            class="form-control"
            placeholder="Descripcion"
            aria-label="Last name"
            :class="{ 'is-invalid': error && descripcionInvalida }"
          />
        </div>
        <div class="col">
          <input
            v-model="producto.precio"
            type="number"
            class="form-control"
            placeholder="Precio"
            :class="{ 'is-invalid': error && precioInvalido }"
          />
        </div>
        <div class="col">
          <button class="btn btn-primary" type="submit">
            Guardar Producto
          </button>
        </div>
      </div>
    </form>
  </div>
  <div class="container">
    <div class="row">
      <div v-if="error" class="alert alert-danger" role="alert">
        ¡Debes rellenar todos los campos!
      </div>
      <div v-if="sent" class="alert alert-success" role="alert">¡PRODUCTO GUARDADO!</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      producto: {
        nombre: "",
        descripcion: "",
        precio: 0,
      },
      sent: false,
      error: false,
    };
  },
  computed: {
    nombreInvalido() {
      return this.producto.nombre.length < 1;
    },
    descripcionInvalida() {
      return this.producto.descripcion.length < 1;
    },
    precioInvalido() {
      return this.producto < 0;
    },
  },
  methods: {
    enviarFormulario() {
      if (this.nombreInvalido ||this.descripcionInvalida ||this.precioInvalido) {
        this.error = true;
        this.sent = false;
        return;
      }

      this.error = false;
      this.sent = true;
      this.$emit("agregar-producto", this.producto);
      this.reiniciarFormulario();
    },
    reiniciarFormulario() {
      this.producto = {
        nombre: "",
        descripcion: "",
        precio: 0,
      };
    },
  },
};
</script>

<style>
</style>