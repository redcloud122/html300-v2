export const toggleBorderMixin = {
  methods: {
    toggleBorder(event) {
      let targetId = event.currentTarget.id;
      let element = document.getElementById(targetId);

      (element.style.border === "none") ? element.style.border = ".5px solid #2c3e50" : element.style.border = "none";
    }
  }
}

