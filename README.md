# Global Market Insights

An international educational website about cryptocurrency, forex and financial markets.

## Development and deployment

- Static site generated with Jekyll using GitHub Pages-compatible dependencies.
- GitHub Actions builds the site and deploys it to GitHub Pages.
- Pagefind creates a static, browser-based search index during each build.
- The current project URL uses the repository base path: `/global-market-insights`.

## Publishing

The workflow is in `.github/workflows/pages.yml`. In the repository's **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. Pushes to `main` (and the temporary `site-foundation` branch while testing) trigger a build and deployment.

## Content and monetization principles

The site prioritizes evergreen educational material and manual-input tools. It does not rely on live market-price APIs, trading signals, guaranteed-return claims or unverified affiliate links. Affiliate relationships must be disclosed and partner eligibility and payment availability must be checked before publishing links.

## Local build

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll build
npx --yes pagefind --site _site
```

The generated site is written to `_site/`.
