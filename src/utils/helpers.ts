import { dhcToast } from '../styles/DHCToast';

export function copyDataInput(dollarSign: string, elementByID: string) {
  const element = document.getElementById(elementByID) as HTMLInputElement;
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  dhcToast.success({
    title: '',
    message: `Copied to ${dollarSign} ${element.value}`,
  });
  element.select();
  element.setSelectionRange(99999, 99999);
}
