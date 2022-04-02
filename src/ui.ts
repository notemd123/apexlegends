import * as app from './lib';

export function ui(coreAsync: (core: app.Core) => Promise<void>) {
  const be = <HTMLElement> document.querySelector('.box');
  const ce = <HTMLInputElement> document.querySelector('button[name=connect]');
  const pe = <HTMLInputElement> document.querySelector('input[name=password]');
  const se = <HTMLInputElement> document.querySelector('input[name=server]');
  const ue = <HTMLInputElement> document.querySelector('input[name=username]');
  
  document.addEventListener('DOMContentLoaded', () => {
    const params = new URL(location.href.replace('#', '?')).searchParams;
    pe.value = params.get('p') ?? '';
    se.value = params.get('s') ?? '';
    ue.value = params.get('u') ?? '';
    if (pe.value && se.value && ue.value) ce.click();
  });

  ce.addEventListener('click', () => {
    disableInputs(true);
    location.hash = `p=${encodeURIComponent(pe.value)}&s=${encodeURIComponent(se.value)}&u=${encodeURIComponent(ue.value)}`;
    tryAsync().finally(() => disableInputs(false));
  });

  function disableInputs(disabled: boolean) {
    ce.disabled = disabled;
    pe.disabled = disabled;
    ue.disabled = disabled;
    se.disabled = disabled;
  }

  async function tryAsync() {
    const server = app.Server.create(se.value, ue.value, pe.value);
    await app.Core.createAsync(server).then(async (core) => {
      be.style.display = 'none';
      await coreAsync(core).catch(console.error.bind(console));
      be.style.display = 'inherit';
    });
  }
}