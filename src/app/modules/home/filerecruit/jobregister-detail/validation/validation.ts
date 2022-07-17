import {FormGroup, ValidatorFn} from "@angular/forms";

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function dateLessThan(firstDate: string, secondDate: string): ValidatorFn {
  // @ts-ignore
  return (form: FormGroup): { [key: string]: boolean } | null => {
    // @ts-ignore
    const firstDateValue = form.get(firstDate).value;
    const seconDateValue = form.get(secondDate).value;
    // @ts-ignore
    if (!firstDate || !secondDate) {
      return {missing: true};
    }
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const firstDate = new Date(firstDateValue);
    const seconDate = new Date(seconDateValue);
    if (firstDate.getTime() >= seconDate.getTime()) {
      const err = {dateLessThan : true};
      return err;
    }
  };
}
