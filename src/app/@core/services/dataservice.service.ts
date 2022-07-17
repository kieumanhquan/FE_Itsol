import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // eslint-disable-next-line @typescript-eslint/member-ordering
  idJobRegis: any;
  setIdJobRegis(element: any) {
    // @ts-ignore
    this.idJobRegis = element;
  }

  getidJobRegis() {
    return this.idJobRegis;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  status: any;
  setStatus(elements: any) {
    // @ts-ignore
    this.status = elements;
  }

  getStatus() {
    return this.status;
  }


}
