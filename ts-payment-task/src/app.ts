import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { hasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/listTemplate.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;


const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);


form.addEventListener("submit", (e)=> {
    e.preventDefault();
    let doc;
    if(type.value === "Invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc,type.value,'end');
})