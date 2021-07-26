import { toastTheme } from '../components/molecules/ToastTheme';

interface ICopyValue {
  id: string;
  code?: string;
  title?: string;
  message?: string;
}

export function copyValue({ id, code, title = '', message }: ICopyValue) {
  const element = document.getElementById(id) as HTMLInputElement;
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  toastTheme.success({
    title: title,
    message: message && `Copied to ${code} ${element.value}`,
  });
  element.select();
  element.setSelectionRange(99999, 99999);
}
