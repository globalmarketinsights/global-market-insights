const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".navlinks");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
}
const search = document.querySelector("#articleSearch");
if (search) {
  const items = [...document.querySelectorAll("[data-searchable]")];
  const empty = document.querySelector(".empty");
  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    items.forEach(item => {
      const match = item.textContent.toLowerCase().includes(q);
      item.style.display = match ? "" : "none";
      if (match) shown++;
    });
    if (empty) empty.style.display = shown ? "none" : "block";
  });
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();


// Small, manual-input calculators. All calculations run in the visitor's browser.
const numberFrom = id => Number(document.getElementById(id)?.value);
const money = value => new Intl.NumberFormat(undefined,{maximumFractionDigits:2}).format(value);
const showResult = (id, html) => { const node=document.getElementById(id); if(node) node.innerHTML=html; };

const profitForm=document.getElementById("profit-form");
if(profitForm) profitForm.addEventListener("submit",event=>{
  event.preventDefault();
  const invested=numberFrom("invested"), buy=numberFrom("buy-price"), sell=numberFrom("sell-price"), fee=numberFrom("trade-fee");
  if(!(invested>0&&buy>0&&sell>=0&&fee>=0&&fee<=100)){showResult("profit-result","Please enter a positive investment and buy price, a non-negative sell price, and a fee between 0 and 100%.");return;}
  const units=invested/buy, gross=(sell-buy)*units, fees=(invested*fee/100)+(units*sell*fee/100), net=gross-fees, percent=net/invested*100;
  showResult("profit-result",`Estimated units: <strong>${money(units)}</strong><br>Estimated trading fees: <strong>${money(fees)}</strong><br>Estimated result after fees: <strong>${money(net)}</strong><br>Estimated return: <strong>${percent.toFixed(2)}%</strong>`);
});

const positionForm=document.getElementById("position-form");
if(positionForm) positionForm.addEventListener("submit",event=>{
  event.preventDefault();
  const balance=numberFrom("account-balance"), risk=numberFrom("risk-percent"), stop=numberFrom("stop-pips"), pip=numberFrom("pip-value");
  if(!(balance>0&&risk>0&&risk<=100&&stop>0&&pip>0)){showResult("position-result","Enter a positive balance, stop distance and pip value, plus a risk percentage above 0 and no more than 100.");return;}
  const riskAmount=balance*risk/100, lots=riskAmount/(stop*pip);
  showResult("position-result",`Planned risk amount: <strong>${money(riskAmount)}</strong><br>Estimated position size: <strong>${lots.toFixed(4)} standard lots</strong><br>Micro-lot equivalent: <strong>${money(lots*100)}</strong>`);
});

const percentageForm=document.getElementById("percentage-form");
if(percentageForm) percentageForm.addEventListener("submit",event=>{
  event.preventDefault();
  const base=numberFrom("percent-base"), rate=numberFrom("percent-rate");
  if(!Number.isFinite(base)||!Number.isFinite(rate)){showResult("percentage-result","Please enter valid numbers.");return;}
  showResult("percentage-result",`${rate}% of ${money(base)} is <strong>${money(base*rate/100)}</strong>.`);
});

const compoundForm=document.getElementById("compound-form");
if(compoundForm) compoundForm.addEventListener("submit",event=>{
  event.preventDefault();
  const initial=numberFrom("starting-amount"), contribution=numberFrom("monthly-contribution"), annual=numberFrom("annual-growth"), years=numberFrom("growth-years");
  if(!(initial>=0&&contribution>=0&&annual>-100&&annual<=1000&&years>=0&&years<=100)){showResult("compound-result","Please check your figures. The annual rate must be above -100%, and the period must be 0–100 years.");return;}
  const months=Math.round(years*12), monthly=Math.pow(1+annual/100,1/12)-1;
  let total=initial*Math.pow(1+monthly,months);
  if(months>0) total += monthly===0 ? contribution*months : contribution*((Math.pow(1+monthly,months)-1)/monthly);
  const paid=initial+contribution*months, growth=total-paid;
  showResult("compound-result",`Estimated ending value: <strong>${money(total)}</strong><br>Total contributions: <strong>${money(paid)}</strong><br>Illustrative growth: <strong>${money(growth)}</strong><br>Months modelled: <strong>${months}</strong>`);
});

// Additional manual-input calculators. All calculations stay in the visitor's browser.
const bindCalculator=(formId,callback)=>{const form=document.getElementById(formId);if(form)form.addEventListener("submit",event=>{event.preventDefault();callback();});};
bindCalculator("average-form",()=>{const q1=numberFrom("avg-q1"),p1=numberFrom("avg-p1"),q2=numberFrom("avg-q2"),p2=numberFrom("avg-p2");if(!(q1>=0&&p1>0&&q2>=0&&p2>0&&(q1+q2)>0)){showResult("average-result","Enter non-negative quantities, positive prices and at least one unit purchased.");return;}const qty=q1+q2,cost=q1*p1+q2*p2;showResult("average-result",`Total units: <strong>${money(qty)}</strong><br>Total cost: <strong>${money(cost)}</strong><br>Average unit cost: <strong>${money(cost/qty)}</strong>`);});
bindCalculator("fee-form",()=>{const amount=numberFrom("fee-amount"),rate=numberFrom("fee-rate");if(!(amount>=0&&rate>=0&&rate<=100)){showResult("fee-result","Enter a non-negative amount and a fee rate between 0 and 100%.");return;}const fee=amount*rate/100;showResult("fee-result",`Estimated fee: <strong>${money(fee)}</strong><br>Amount after fee: <strong>${money(amount-fee)}</strong>`);});
bindCalculator("drawdown-form",()=>{const peak=numberFrom("peak-value"),current=numberFrom("current-value");if(!(peak>0&&current>=0)){showResult("drawdown-result","Enter a positive peak and a non-negative current value.");return;}const loss=(peak-current)/peak*100,recovery=current===0?Infinity:(peak-current)/current*100;showResult("drawdown-result",`Drawdown from peak: <strong>${loss.toFixed(2)}%</strong><br>Gain needed to recover: <strong>${Number.isFinite(recovery)?recovery.toFixed(2)+"%":"Not defined from zero"}</strong>`);});
bindCalculator("rr-form",()=>{const entry=numberFrom("rr-entry"),stop=numberFrom("rr-stop"),target=numberFrom("rr-target");const risk=Math.abs(entry-stop),reward=Math.abs(target-entry);if(!(Number.isFinite(entry)&&risk>0&&reward>0)||((stop-entry)*(target-entry)>=0)){showResult("rr-result","For a long example, put the stop below entry and target above it; for a short example, put the stop above entry and target below it.");return;}showResult("rr-result",`Price risk: <strong>${risk}</strong><br>Potential price reward: <strong>${reward}</strong><br>Reward-to-risk: <strong>1:${(reward/risk).toFixed(2)}</strong>`);});
bindCalculator("margin-form",()=>{const notional=numberFrom("notional-value"),leverage=numberFrom("leverage-value");if(!(notional>=0&&leverage>0)){showResult("margin-result","Enter a non-negative position value and leverage greater than zero.");return;}showResult("margin-result",`Estimated initial margin: <strong>${money(notional/leverage)}</strong><br>Illustrative margin rate: <strong>${(100/leverage).toFixed(2)}%</strong>`);});
