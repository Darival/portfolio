
export const run = (navService, headerService) => {
  navService.startNavEventListener();
  headerService.observe();
}