import ChartMilestone from "./src/components/ListFilter.vue";

function install(app) {
  if (install.installed) return;
  install.installed = true;
  app.component("v-chart-milestone", ChartMilestone);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

ChartMilestone.install = install;

export default ChartMilestone;
