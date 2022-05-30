# What is this folder for?
I'm attempting to document the YAML schemas I tend to use (especially the custom ones) for a few reasons:

1. Practice in case I need this for work later
2. Documentation because I haven't actually worked on this site for a while
3. Documentation because I'm planning an overhaul of my websites and want to refactor a lot of code.
4. Personal convenience, I want to use this.

# How can I use this?

*NOTE*: A JetBrains IDE (like WebStorm) will provide a better reading experience, since I had more freedom to markup the code with HTML. 

First off, basic setup. I've got this to work in both [VSCode](https://joshuaavalon.io/intellisense-json-yaml-vs-code) and [WebStorm](https://www.jetbrains.com/help/idea/json.html#ws_json_using_schemas). The file to reference is the `flexfolio.schema.json`.

You can't actually use this in the posts directly due to... file extension shenanigans. Instead, use a `.yml` file in **this directory**, or explore the `photo-template.yml` or `webdev-template.yml` files. There, you can explore the various descriptions as you craft the YAML frontmatter.

# How could I implement this?

- Use [this](https://codebeautify.org/yaml-to-json-schema-generator) to generate some of the JSON quickly (so you can then dive in and experiment faster)
- Use [this](https://json-schema.org/understanding-json-schema/UnderstandingJSONSchema.pdf) to understand more properties you're able to use.