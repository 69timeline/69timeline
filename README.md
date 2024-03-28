# 69Timeline

## Development

You need `node` and `npm` install (try a fairly recent version, latest lts node version is v20).

Clone and cd into the repo then run
```sh
npm install
```
to install depedencies, then you can run
```sh
npm run dev
```
to start a dev server on port `1234`.

Refer to [astro docs](https://docs.astro.build/en/basics/project-structure/)
for the project structure.

## Astro lsp Setup

To install the lsp run
```sh
npm i -g typescript prettier prettier-plugin-astro @astrojs/language-server
```

Then for helix add this to the `languages.toml`:
```toml
[language-server.astro-ls]
command = "astro-ls"
args = ["--stdio"]
# Replace the path to where your global node installs go (or just globally search for node_modules/typescript/lib)
config = { typescript = { tsdk = "/usr/lib/node_modules/typescript/lib" }}

[[language]]
name = "astro"
scope = "source.astro"
injection-regex = "astro"
file-types = ["astro"]
language-servers = ["astro-ls"]
formatter = { command = "prettier", args = ["--plugin", "prettier-plugin-astro", "--parser", "astro"] }
auto-format = true
```

## Content structure
The `src/content` folder has a `config.ts` that defines the structure of all
files contained in the subfolders.

### src/content/events
Contains historic events, this what is shown on the main timeline and as such is the most
important.

### src/content/actors
Contains data about real persons and are refenced by events by their ids (the file names).

Ids follow the CRIs format, `${firstName}.${lastName}` with letters in lowercase and no accents.

If two person would have the same id, add .1, .2 etc for each duplicate, and add metadata
in the files to be able to deferentiate them easily.
