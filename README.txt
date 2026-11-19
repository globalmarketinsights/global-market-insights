GLOBAL MARKET INSIGHTS
======================

A free, mobile-friendly educational website about cryptocurrency, forex and
financial markets.

LIVE WEBSITE
------------
https://globalmarketinsights.github.io/global-market-insights/

SOURCE REPOSITORY
-----------------
https://github.com/globalmarketinsights/global-market-insights

HOSTING AND BUILD
-----------------
- Hosting: GitHub Pages (free plan).
- Framework: Jekyll using the GitHub Pages gem.
- Deployment: GitHub Actions workflow in .github/workflows/pages.yml.
- Search: Pagefind creates a static search index during each build.
- Base URL: /global-market-insights

The workflow builds the Jekyll site, creates the Pagefind index, uploads the
Pages artifact and deploys it when changes reach the main branch. Pull requests
run the build checks before changes are merged.

SITE PAGES
----------
index.html       Homepage
crypto.html      Cryptocurrency education
forex.html       Forex education
learn.html       Beginner learning centre
guides.html      Evergreen guide library
bitcoin-basics.html Bitcoin fundamentals
crypto-wallet-security.html Crypto wallet safety
forex-currency-pairs.html Forex quote basics
forex-risk-management.html Trading risk education
investment-scams.html Scam awareness guide
blockchain-basics.html Blockchain fundamentals
stablecoins-explained.html Stablecoin designs and risks
forex-trading-costs.html Forex spreads, commissions and swaps
forex-leverage-margin.html Leverage and margin education
tools.html       Free browser-based financial calculators
search.html      Site-wide search
about.html       About the website
contact.html     Contact information
disclaimer.html  Financial and affiliate disclaimer
privacy.html     Privacy notice
404.html         Custom not-found page

TOOLS
-----
The Tools page currently includes nine free calculators:
- Investment profit/loss estimate with entered trading fees
- Forex position size estimate based on account risk and pip value
- Percentage calculator
- Compound growth estimator with monthly contributions
- Average purchase price across two purchases
- Percentage-based transaction fee estimator
- Drawdown and recovery calculator
- Risk-to-reward ratio calculator
- Simplified margin requirement estimator

Calculators use manual inputs and run in the visitor's browser. They do not
fetch live prices and are not financial advice or trading instructions.

EDITING SAFELY
--------------
1. Make changes on a separate branch.
2. Open a pull request into main.
3. Let the GitHub Actions build complete successfully.
4. Review and merge the pull request.
5. GitHub Pages deploys changes pushed to main.

Do not replace the existing website wholesale. Preserve working pages and
assets unless a change is specifically needed.

SAFETY AND MONETIZATION
-----------------------
- Keep educational content accurate, original and evergreen where practical.
- Never publish fabricated prices, fake breaking news, guaranteed returns or
  trading signals.
- Clearly disclose affiliate relationships beside qualifying links.
- Verify affiliate approval, country eligibility, payment methods and terms
  before publishing promotions.
- Do not claim that a broker, exchange or investment is safe or suitable for
  every visitor.
- Check applicable laws and platform rules before monetizing.

COSTS
-----
The website now includes a refreshed responsive visual design, improved homepage and learning hubs, expanded guide library, and nine browser-only calculators. The website is designed to run on free GitHub Pages hosting and free build
tools. A custom domain, paid APIs and paid subscriptions are optional and are
not required for the current setup.
